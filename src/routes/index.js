"use strict";

const KoaRouter = require('koa-router');

class Router extends KoaRouter{
    constructor() {
        super();
    }

    declareRoutes() {
        let self = this;

        self.get('/', (ctx, next) => {
            ctx.body = "Hello Koa";
        })
    }
}

module.exports = Router;