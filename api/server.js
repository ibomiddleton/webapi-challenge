const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const hubsRouter = require('../data/helpers/router.js')
const server = express();
const dbConfig = require('../data/dbConfig.js');
const mongoose = require('mongoose');

server.use(helmet());
server.use(express.json());
server.use(bodyParser.json());



server.get('/', (req, res) => {
    res.json({"message": "Welcome to API Challenge"});
});



  module.exports = server;