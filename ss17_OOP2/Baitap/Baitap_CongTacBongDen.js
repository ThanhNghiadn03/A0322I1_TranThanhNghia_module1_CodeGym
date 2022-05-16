class ElectricLamp {
    constructor(status) {
        this.status = status;
    }

    turnOn() {
        if (this.status == false) {
            this.status = true;
            alert('Nút đèn đã bật');
        }
    }

    turnOff() {
        if (this.status == true) {
            this.status = false;
            alert('Nút đèn đã tắt');
        }
    }
}

class SwitchButton {
    constructor(status,lamp) {
        this.status = status;
        this.lamp = lamp;
    }

    connectToLamp(lamp) {
        if (this.status==true) {
            if (lamp.status == true) {
                alert('Đèn đang sáng');
            } else {
                alert('Đèn đang tắt');
            }
        } else {
            alert('Đèn đang tắt');
        }
    }

    switchOn() {
        if (this.status ==false) {
            this.status = true;
            alert('Công tắc đã bật');
        }
    }

    switchOff() {
        if (this.status == true) {
            this.status =false;
            alert('Công tắc đã tắt');
        }
    }
}
let den = new ElectricLamp(false);
let nut = new SwitchButton(false,den);
let time = 10;
while (time>0) {
    nut.switchOn();
    nut.switchOff();
    time--;
}
nut.connectToLamp(den);
nut.switchOn();
den.turnOn();
nut.connectToLamp(den);