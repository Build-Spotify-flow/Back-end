const express = require("express");
// maybe cors and or helmet as well??

const server = express();

server.use(express.json());

module.exports = server;
