const Email = require('./email');
const Sms = require('./sms');

class Notifier {
    constructor() {
        let self = this;

        self.sms = new Sms();
        self.email = new Email();
    }

    sendSms(message) {
        let self = this;

        self.sms.send(message, (err) => {
            console.log(err);
        });
    }

    sendEmail(message) {
        let self = this;

        self.email.send(message, (err) => {
            console.log(err);
        })
    }

    sendBoth(message) {
        let self = this;

        self.sendEmail(message);
        self.sendSms(message);
    }
}

module.exports = Notifier;