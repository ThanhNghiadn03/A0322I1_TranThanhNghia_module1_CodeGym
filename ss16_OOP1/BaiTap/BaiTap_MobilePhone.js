class Mobile {
    constructor(pin , messComposing , inbox , messSent) {
        this.pin = pin;
        this.messComposing = messComposing;
        this.inbox = inbox;
        this.messSent = messSent;
    }

    getPin() {
        return this.pin;
    }

    getMessComposing() {
        return this.messComposing;
    }

    getInbox() {
        return this.inbox;
    }

    getMessSent() {
        return this.messSent;
    }

    setPin(pin) {
        do {
            this.pin = pin;
        }while (this.pin <0|| this.pin>100);
    }
}