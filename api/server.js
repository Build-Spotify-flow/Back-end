const express = require("express");
// maybe cors and or helmet as well??

// the below middleware is to be implemented when saved songs and such are created.
const authenticate = require("../auth/authenticate-middleware.js");
const authRouter = require("../auth/auth-router.js");
const trackRouter = require('../tracks/track-router')
const server = express();

server.use(express.json());
server.use("/api/auth", authRouter);
server.use(authenticate)
server.use("/api/track", trackRouter);

module.exports = server;
