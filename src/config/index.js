"use strict";

const serverConfig = require('./server');
const brokerConfig = require('./broker');

module.exports = {
    server: serverConfig,
    broker: brokerConfig
};