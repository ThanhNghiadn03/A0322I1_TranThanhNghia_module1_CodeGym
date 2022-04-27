let initialMoney = parseInt(prompt('Nhập vào số tiền ban đầu : '));
let numOfMonths = parseInt(prompt('Nhập vào số tháng cho vay : '));
let count = numOfMonths;
let interestRate = parseFloat(prompt('Nhập vào lãi suất hằng tháng'));
let onlyInterestMoney = 0;
while (count!=0) {
    onlyInterestMoney = (interestRate/100)*initialMoney;
    initialMoney = initialMoney + onlyInterestMoney;
    count--;
}
document.write('Sau '+ numOfMonths + ' tháng cho vay thì tổng tiền gốc lẫn lãi là : '+ initialMoney);
document.write('<br><br>');
document.write('Nếu chỉ tính riêng tiền lãi là : '+ onlyInterestMoney);