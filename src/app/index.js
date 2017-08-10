"use strict";

const Koa = require('koa');
const Router = require('../routes');
const Broker = require('../broker');
const Config = require("../config");

class App extends Koa {
    constructor() {
        super();
        let self = this;
        
        self.router = new Router();
        self.broker = new Broker();
    }

    attachRoutes() {
        let self = this;

        self.router.declareRoutes();
        self.use(self.router.routes());
    }

    attachBroker() {
        let self = this;
        self.broker.attachListeners();
    }

    startServer() {
        let self = this;

        self.listen(Config.server.port, () => {
            console.log("server started")
        });

    }

}

module.exports = App;