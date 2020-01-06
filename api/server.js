const express = require("express");
// maybe cors and or helmet as well??

// the below middleware is to be implemented when saved songs and such are created.
// const authenticate = require("../auth/authenticate-middleware.js");
const authRouter = require("../auth/auth-router.js");

const server = express();

server.use(express.json());

server.use("/api/auth", authRouter);

server.get("/", (req, res) => {
  res.send("Welcome to the backend of Spotify Song Suggester!");
});

module.exports = server;
