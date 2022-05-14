class Mobile {
    constructor(name, pin , OnOrOff) {
        this.pin = pin;
        this.name = name;
        this.OnOrOff= OnOrOff;
    }

    checkOnOrOff() {
        this.decreasePin();
        if (this.OnOrOff==true) {
            return 'Điện thoại '+ this.name + ' đang bật';
        } else {
            return 'Điện thoại ' +this.name+ ' đang tắt';
        }
    }
    decreasePin() {
        this.pin = this.pin - 1;
    }
    TurnOnOrOff() {
        this.decreasePin();
        if (this.OnOrOff==true) {
            let user = confirm('Điện thoại đang bật , bạn có muốn tắt ?');
            if (user==true) {
                return this.OnOrOff = false;
            } else {
                return this.OnOrOff = true;
            }
        } else {
            let user = confirm('Điện thoại đang tắt , bạn có muốn bật ?');
            if (user == true) {
                return  this.OnOrOff = true;
            } else {
                return this.OnOrOff = false;
            }
        }
    }

    charging() {
        this.decreasePin();
        let user = '';
        if (this.getPin() <= 20) {
            user = confirm('Pin yếu , bạn có muốn sạc điện thoại ?');
            if (user==true) {
                return 'Điện thoại '+ this.name +  ' đang sạc';
            } else {
                return 'pin yếu , bạn cần sạc điện thoại gấp !!!';
            }
        } else {
            user = confirm('Bạn muốn sạc điện thoại ? ');
            if (user == true) {
                return 'Điện thoại'+this.name+ 'đang sạc';
            }else {
                return 'pin : '+this.getPin();
            }
        }
    }



    getPin() {
        return this.pin;
    }

    getName() {
        return this.name;
    }

}
