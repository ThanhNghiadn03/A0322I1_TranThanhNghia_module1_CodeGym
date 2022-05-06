let array1d = [];
let numOfEle = parseInt(prompt('Nhập vào số lượng phần tử : '));
let number = ['1','2','3','4','5','6','7','8','9','0'];
let countNum = 0;
for (let i=0 ; i<numOfEle ; i++) {
    array1d[i] = prompt('Nhập vào phần tử thứ ' + i);
}
document.write('Các phần tử trong mảng là : ');
for (let i=0 ; i<numOfEle ; i++) {
    document.write(array1d[i] + '&nbsp');
    if (number.indexOf(array1d[i]) >= 0) {
        countNum++;
    }
}
document.write('<br><br>Số lượng kí tự số trong mảng là : ' + countNum);