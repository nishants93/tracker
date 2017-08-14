"use strict";

const Config = require("../config");
const VehicleHealthController = require("./vehicle-health");

class Controller {
    constructor(topic, message) {
        let self = this;

        self.topic = topic;
        self.message = message;
    }

    execute() {
        let self = this;

        switch(self.topic) {
            case Config.broker.topics.vehicleHealth:
                let vehicleHealthController = new VehicleHealthController(self.message);
                vehicleHealthController.recordData();
                return;
            default :
                console.log("No Registered topic specified, malformed data.");
        }
    }
}

module.exports = Controller;