let arrayCharac = [];
let numOfEle = parseInt(prompt('Nhập vào số lượng các kí tự trong mảng : '));
document.write('Các phần tử trong mảng là :')
for (let i=0 ; i<numOfEle ; i++) {
    arrayCharac[i] = prompt('Nhập vào phần tử thứ '+ i + ' : ');
    document.write(arrayCharac[i]+ '  ;  ');
}
for (let i=0 ; i<numOfEle ; i++) {
    if (arrayCharac[i] == '-') {
        arrayCharac[i] = '_';
    }
}
document.write('<br><br>Các phần tử trong mảng sau khi chuyển đổi là : ');
for (let i=0 ; i<numOfEle ; i++) {
    document.write(arrayCharac[i]+ '  ;  ');
}