class Sms {
    constructor() {

    }

    send(message, callback) {
        console.log("message sent");
        callback(null);
    }
}

module.exports = Sms;