const Users = require("./users-model.js");
const request = require("supertest");

const server = require("../api/server.js");

const db = require("../data/dbConfig.js");

describe("user model", () => {
  beforeEach(async () => {
    await db("users").truncate();
  });
  describe("add()", () => {
    it("adds a user to the database", async () => {
      await Users.add({ username: "colin", password: "pass" });
      const users = await db("users");
      expect(users).toHaveLength(1);
    });
  });
  it("returns a JSON object", () => {
    return request(server)
      .get("/")
      .then(res => {
        expect(res.type).toMatch(/json/i);
      });
  });
  describe("find()", () => {
    it("finds a user", async () => {
      await Users.add({ username: "colin", password: "pass" });
      await Users.find();
      const users = await db("users");
      expect(users).toHaveLength(1);
    });
  });
  it("adds two new users and returns them as an array", async () => {
    await Users.add({ username: "colin", password: "pass" });
    await Users.add({ username: "troy", password: "password" });
    const users = await db("users");
    expect(Array.isArray(users)).toBe(true);
  });
  it("gets the username of a newly created user", async () => {
    await Users.add({ username: "colin", password: "pass" });
    await Users.findById(1).then(user => {
      expect(user.username).toMatch(/colin/i);
    });
  });
});
