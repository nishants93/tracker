"use strict";

const VehicleHealthHandler = require("../handlers/vehicle-health");

class VehicleHealthController {
    constructor(message) {
        let self = this;

        self.message = message;
    }

    recordData() {
        let self = this;

        let vehicleHealthHandler = new VehicleHealthHandler();
        vehicleHealthHandler.processAndInsert(self.message);
    }
}

module.exports = VehicleHealthController;