"use strict";

const mqtt = require("mqtt");
const Config = require("../config");

class Broker {
    constructor() {
        let self = this;
        self.broker = mqtt.connect(Config.broker.mqtt.mosquitto.url);
    }

    attachListeners() {
        let self = this;

        self.broker.on("connect", () => {
            self.broker.subscribe('tracker');
        })

        self.broker.on("message", (topic, message) => {
            console.log(message.toString());
        })
    }
}

module.exports = Broker;