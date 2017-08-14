"use strict";

const VehicleHealthModel = require("../models/vehicle-health");

function getLeadingZeroes(numberToCount) {
    let counter = 0;
    for(;;) {
        if (numberToCount[0] === '0') {
            counter++;
            numberToCount = numberToCount.slice(1);
        } else {
            break;
        }
    }
    return Array(counter + 1).join("0");
}

function evaluateCoordinate(coordinate) {
    let leadingZeroes = getLeadingZeroes(coordinate);
    coordinate = parseFloat(coordinate);
    coordinate = "" + coordinate;
    let header = parseFloat(coordinate.slice(0, 2));
    let trailer = parseFloat(coordinate.slice(2));
    trailer = trailer/60;
    let total = header + trailer;
    return leadingZeroes + total;
}

function embedLatLong(data) {
    let gps = data['G'].split(',');
    let lat = gps[0];
    let long = gps[1];
    lat = evaluateCoordinate(lat);
    long = evaluateCoordinate(long);
    data.lat = lat;
    data.long = long;
    return data;
}

class VehicleHealthHandler {
    constructor() {

    }

    processAndInsert(data) {
        data = JSON.parse(data);
        data = embedLatLong(data);
        let newVehicleHealth = new VehicleHealthModel();
        newVehicleHealth.insert(data);
    }

}

module.exports = VehicleHealthHandler;