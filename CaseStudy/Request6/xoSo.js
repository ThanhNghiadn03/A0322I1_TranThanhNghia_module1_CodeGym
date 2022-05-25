class veSo {
    constructor(num1,num2,num3,num4,num5,num6) {
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.num4 = num4;
        this.num5 = num5;
        this.num6 = num6;
    }

    setNum1(num1) {
        this.num1 = num1;
    }
    getNum1() {
        return this.num1;
    }

    setNum2(num2) {
        this.num2 = num2;
    }
    getNum2() {
        return this.num2;
    }

    setNum3(num3) {
        this.num3 = num3;
    }
    getNum3() {
        return this.num3;
    }

    setNum4(num4) {
        this.num4 = num4;
    }
    getNum4() {
        return this.num4;
    }

    setNum5(num5) {
        this.num5 = num5;
    }
    getNum5() {
        return this.num5;
    }

    setNum6(num6) {
        this.num6 = num6;
    }
    getNum6() {
        return this.num6;
    }
}


let arrLotery = [];

function menu() {
    let choose = parseInt(prompt("Bạn có 2 lựa chọn : \n"+
        "1.Bạn tự chọn số \n"+
        "2.Hệ thống tự chọn cho bạn \n"));
    if (choose==1) {
        inputLottery();
    }
    if (choose==2) {
        randomLottery();
    }
}

function inputLottery() {
    if (arrLotery.length < 4) {
        let number = [];
        for (let i=0 ; i<6 ; i++) {
            number[i] = parseInt(prompt('Nhập vào số thứ '+ (i+1)+' : '));
        }
        let vietlott = new veSo(number[0],number[1],number[2],number[3],number[4],number[5]);
        arrLotery.push(vietlott);
        displayLottery(arrLotery);
    }else {
        alert('Bạn chỉ mua được 4 tờ vé số');
    }
}

function randomLottery() {
    if (arrLotery.length < 4) {
        let number = [];
        for (let i=0 ; i<6 ; i++) {
            number[i] = Math.floor(Math.random()*100);
        }
        let lottery = new veSo(number[0],number[1],number[2],number[3],number[4],number[5]);
        arrLotery.push(lottery);
        displayLottery(arrLotery);
    }else {
        alert('Bạn chỉ mua được 4 tờ vé số');
    }
}

function displayLottery(arr) {
    let str = '';
    for (let i=0 ; i<arr.length ; i++) {
     str += "<input value ='"+arr[i].getNum1()+"'>"+
        "<input value='"+arr[i].getNum2()+"'>"+
        "<input value='"+arr[i].getNum3()+"'>"+
        "<input value='"+arr[i].getNum4()+"'>"+
        "<input value='"+arr[i].getNum5()+"'>"+
        "<input value='"+arr[i].getNum6()+"'>"+ '<br>';
    }
    document.getElementById('lottery').innerHTML = str;
}

function checkLottery(arr) {
    let money = 0;
    let count = 0;
    let numberResult = [];
    for (let i=0 ; i<6 ; i++) {
        numberResult[i] = Math.floor(Math.random()*100);
    }
    for (let i=0 ; i<arr.length ; i++) {
        if (arr[i].getNum1()==numberResult[0] &&
            arr[i].getNum2()==numberResult[1] &&
            arr[i].getNum3()==numberResult[2] &&
            arr[i].getNum4()==numberResult[3] &&
            arr[i].getNum5()==numberResult[4] &&
            arr[i].getNum6()==numberResult[5]) {
            alert('vé của bạn (vé số '+(i+1)+' đã trúng giải nhất');
            money += 10000000000;
            count++;
        } else if (arr[i].getNum2()==numberResult[1] &&
                arr[i].getNum3()==numberResult[2] &&
                arr[i].getNum4()==numberResult[3] &&
                arr[i].getNum5()==numberResult[4] &&
                arr[i].getNum6()==numberResult[5]) {
            alert('vé của bạn (vé số '+(i+1)+' đã trúng giải nhì');
            money += 5000000000;
            count++;
        } else if (arr[i].getNum3()==numberResult[2] &&
            arr[i].getNum4()==numberResult[3] &&
            arr[i].getNum5()==numberResult[4] &&
            arr[i].getNum6()==numberResult[5]) {
            alert('vé của bạn (vé số '+(i+1)+' đã trúng giải ba');
            money += 3000000000;
            count++;
        } else if (arr[i].getNum4()==numberResult[3] &&
            arr[i].getNum5()==numberResult[4] &&
            arr[i].getNum6()==numberResult[5]) {
            alert('vé của bạn (vé số '+(i+1)+' đã trúng giải khuyến khích');
            money += 900000000;
            count++;
        }
    }
    if (count==0) {
        alert('Chúc bạn may mắn lần sau');
    }
    alert('Tổng số tiền thưởng của bạn là : '+ money + ' VND');
}

function result() {
    checkLottery(arrLotery);
}