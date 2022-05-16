class Battery {
    constructor(energy) {
        this.energy = energy;
    }

    setEnergy(energy) {
        this.energy = energy;
    }

    getEnergy() {
        return this.energy;
    }

    decreaseEnergy() {
        if (this.getEnergy()>0) {
            this.energy--;
        }
    }
}

class FlashLamp {
    constructor(status,battery) {
        this.status = status;
        this.battery = battery;
    }
    setBattery(battery) {
        this.battery = battery;
    }
    getBatteryInfo() {
        return this.battery.getEnergy();
    }
    light() {
        if (this.status == true) {
            alert('Đèn pin đang phát sáng');
        } else {
            alert('Đèn pin không phát sáng');
        }
    }
    turnOn() {
        if (this.status==false) {
            this.status = true;
            this.battery.decreaseEnergy();
            alert('Đèn đã bật');
        }
    }
    turnOff() {
        if (this.status==true) {
            this.status = false;
            this.battery.decreaseEnergy();
            alert('Đèn đã tắt');
        }
    }
}
let pin = new Battery(100);
let den = new FlashLamp(false, pin);
den.light();
den.turnOn();
den.light();
alert('pin : '+ den.getBatteryInfo());
den.turnOff();
den.light();
alert('pin : '+ den.getBatteryInfo());