class Mobile {
    constructor(name,pin,inbox,messageSent,draftMess,onOrOff) {
        this.name = name;
        this.pin = pin;
        this.messageSent = messageSent
        this.inbox = inbox;
        this.draftMess = draftMess;
        this.onOrOff = onOrOff;
    }

    getName() {
        return this.name;
    }
    getPin() {
        if (this.pin >= 0 || this.pin <= 100 ) {
            return this.pin;
        } else {
            return 'Error';
        }
    }
    getMessageSent() {
        return this.messageSent;
    }
    getInbox() {
        return this.inbox;
    }
    getOnOrOff() {
        return this.onOrOff;
    }
    getDraftMess() {
        return this.draftMess;
    }


    setInbox(message,obj2) {
        obj2.inbox = obj2.inbox + message;
    }

    setDraftMess(mess) {
        this.draftMess = this.draftMess + mess + '  ';
    }

    draftBox() {
        if (this.getOnOrOff()=='On') {
            this.pin--;
            document.write('Thư nháp của '+ this.getName()+' : '+this.getDraftMess());
        } else {
            alert('Điện thoại đang tắt');
        }
    }

    charging() {
        if (this.getPin() < 20) {
            alert('Pin yếu');
            alert('Đang sạc điện thoại')
        } else if(this.getPin() < 100) {
            alert('Đang sạc điện thoại');
        } else {
            alert('Pin đầy');
        }
    }

    checkPin() {
        alert('Pin của '+this.getName()+' là : '+this.getPin() + ' %');
    }

    powerButton() {
        this.pin--;
        if (this.getOnOrOff()=='Off') {
            return this.onOrOff = 'On';
        } else {
            return this.onOrOff = 'Off';
        }
    }

    inBox() {
        if (this.getOnOrOff()=='On') {
            this.pin--;
            alert('Tin nhắn gửi đến của '+ this.getName() + ' là : '+this.getInbox());
        } else {
            alert('Điện thoại đang tắt');
        }
    }

    sentMessage(obj2) {
        if (this.getOnOrOff()=='On') {
            this.pin--;
            let mess = prompt('Nhập tin nhắn : ');
            let userConfirm = confirm('Bạn muốn gửi tin nhắn đang nhập ? ');
            if (userConfirm==true) {
                this.setInbox(mess,obj2);
            }else {
                this.setDraftMess(mess);
            }
        } else {
            alert('Điện thoại đang tắt');
        }
    }
}

let nokia = new Mobile('nokia',100,'','','','Off');
let ios = new Mobile('iphone' , 100 , '','','','Off');
nokia.powerButton();
ios.powerButton();
nokia.sentMessage(ios);
ios.inBox();
nokia.checkPin();
ios.checkPin();
