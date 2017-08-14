class Email {
    constructor() {

    }

    send(message, callback) {
        console.log("message sent");
        callback(null);
    }
}

module.exports = Email;