const config = require('config');
const express = require('express');
const bodyParser = require('body-parser');
const restControllers = require('./controllers/rest');

const clientFactory = require('./infrastructure/grpc/factories/clientFactory').init();
const server = express();

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }));
server.use('/', restControllers);
server.listen(config.port, () => console.log(`Example1 API running on port : ${config.port}`));