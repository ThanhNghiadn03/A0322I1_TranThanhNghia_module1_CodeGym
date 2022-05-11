class Temperature {
    constructor(Cdegrees) {
        this.Cdegrees = Cdegrees;
    }

    getCdegrees() {
        return this.Cdegrees;
    }

    setCdegrees(Cdegrees) {
        this.Cdegrees = Cdegrees;
    }

    CtoF() {
        let Fdegrees = (this.getCdegrees()*1.8) + 32;
        alert(this.getCdegrees() + ' độ C khi chuyển sang độ F là : '+Fdegrees);
    }

    CtoK() {
        let Kdegrees = this.getCdegrees()+273.15;
        alert(this.getCdegrees()+' độ C khi chuyển sang độ K là : '+Kdegrees);
    }
}

let tempe1 = new Temperature(25);
tempe1.CtoF();
tempe1.CtoK();
let askUser = confirm('Bạn có muốn đổi độ C sang độ F và K không ?');
while (askUser==true) {
    let CofUser = parseFloat(prompt('Nhập vào nhiệt độ (độ C) : '));
    tempe1.setCdegrees(CofUser);
    tempe1.CtoK();
    tempe1.CtoF();
    askUser =confirm('Bạn có muốn tiếp tục không ?');
}
alert('Oke ^^');