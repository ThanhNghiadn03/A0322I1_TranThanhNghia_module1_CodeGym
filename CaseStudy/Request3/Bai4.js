let userNumber = prompt('Nhâp vào 1 số : ');
let number = ['1','2','3','4','5','6','7','8','9','0'];
let readNumber = ['một','hai','ba','bốn','năm','sáu','bảy','tám','chín','không'];
let string = '';
for (let i=0 ; i<userNumber.length ; i++) {
    let index = number.indexOf(userNumber[i]);
    string = string + readNumber[index] + ' ';
}
document.write(userNumber + ' đọc là : '+string);