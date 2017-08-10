"use strict";

const Koa = require('koa');
const Router = require('koa-router');

class App extends Koa {
    constructor() {
        super();
        let self = this;
        self.router = new Router();
    }

    attachRoutes() {
        let self = this;

        self.router.get('/', ctx => {
            ctx.body = "hello koa";
        });

        self.use(self.router.routes());
    }

    startServer() {
        let self = this;

        self.listen(3000, () => {
            console.log("server started")
        });
        
    }

}

module.exports = App;