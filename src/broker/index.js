"use strict";

const mqtt = require("mqtt");
const Config = require("../config");
const Controller = require("../controller");

class Broker {
    constructor() {
        let self = this;
        self.broker = mqtt.connect(Config.broker.mqtt.mosquitto.url);
    }

    attachListeners() {
        let self = this;

        self.broker.on("connect", () => {
            self.broker.subscribe('vehicleHealth');
        })

        self.broker.on("message", (topic, message) => {
            let controller = new Controller(topic, message.toString());
            controller.execute();
        })
    }
}

module.exports = Broker;