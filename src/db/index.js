const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/trackerDB");

let Schema = mongoose.Schema;

class DB {
    getModel(modelName, schemaPayload) {
        return mongoose.model(modelName, new Schema(schemaPayload));
    }
}

module.exports = DB;