"use strict";

const DB = require("../db");

let vehicleHealthSchema = {
    "T": String,
    "GD": String, //DATE
    "GT": String, //Time
    "MC": Number, //Mobile network code //ignore
    "F": Number, // //ignore
    "G": String, //GPS LAT Lng. Interpretation down below
    "B": Number,
    "HD": Number, //IGNORE
    "DA": Number,
    "DC": Number,
    "SP": Number, //SPEED
    "D": Number,
    "D1": Number,
    "EV": String, //Over speeding event. 
    "ST": Number,
    "FS": Number,
    "S": String,
    "H": Number,
    "lat": String,
    "long": String
}

let db = new DB();

let VehicleHealthModel = db.getModel("VehicleHealth", vehicleHealthSchema);

class VehicleHealth {
    constructor() {

    }

    insert(data) {
        let newVehicleHealth = new VehicleHealthModel(data);
        newVehicleHealth.save(err => {
            console.log(err);
        });
    }

}

module.exports = VehicleHealth;