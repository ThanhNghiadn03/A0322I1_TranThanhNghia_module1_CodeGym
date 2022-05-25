let menu = ['cafe','cam vắt','nước ép cà rốt','nước ép cà chua','nước lọc','nước dừa'];
let price = [5000,10000,15000,16000,6000,18000];
let moneyPay = 0;
let order;
let soluong;
alert('Nhập số để đặt món');
do {
    order = parseInt(prompt('1.cafe ; 2.cam vắt ; 3.nước ép cà rốt ; 4.nước ép cà chua ; 5.nước lọc ; 6.nước lọc ; 7.nước dừa ; 8.Thoát gọi món'));
    if (order==8) {
        break;
    }
    soluong = parseInt(prompt('Giá của ' + menu[order-1] + ' là ' + price[order-1] + ' , Bạn muốn đặt bao nhiêu món ?'));
    moneyPay = moneyPay + soluong * price[order-1];
    console.log(moneyPay);
} while (order != 8);

alert('Tổng số tiền bạn phải thanh toán là : ' + moneyPay + ' VNĐ');