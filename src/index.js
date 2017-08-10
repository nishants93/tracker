"use strict";

const App = require('./app');

const app = new App();
app.attachRoutes();
app.attachBroker();
app.startServer();