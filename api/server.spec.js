const request = require("supertest");

const server = require("./server.js");

describe("server.js", function() {
  describe("environment", function() {
    it("should set the environment to testing", function() {
      expect(process.env.DB_ENV).toBe("testing");
    });
  });
  describe("GET /", function() {
    it("requires you to login without auth", function() {
      return request(server)
        .get("/")
        .then(res => {
          expect(res.body.message).toBe("Please login and try again. ");
        });
    });
  });
});
