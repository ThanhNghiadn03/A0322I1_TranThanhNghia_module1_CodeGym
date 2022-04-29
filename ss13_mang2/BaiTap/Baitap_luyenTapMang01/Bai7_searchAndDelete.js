let arrayInteger = new Array(10);
for (let i=0 ; i<arrayInteger.length ; i++) {
    arrayInteger[i] = parseInt(prompt('Nhập vào phần tử thứ ' + i));
}
let value = parseInt(prompt('Bạn muốn tìm và xóa giá trị nào ? '));
let searchIndex = arrayInteger.indexOf(value);
document.write('Mảng của bạn đã nhập vào : <br><br>');
let stringArray = arrayInteger.join(',');
document.write(stringArray);
if (searchIndex < 0) {
    alert(value + ' is not in Array');
} else {
    for (let i=searchIndex ; i<(arrayInteger.length-1) ; i++) {
        let tmp = arrayInteger[i];
        arrayInteger[i] = arrayInteger[i+1];
        arrayInteger[i+1] = tmp;
    }
    arrayInteger[arrayInteger.length-1] = 0;
}
document.write('<br><br>Mảng của bạn hiện tại : <br><br>');
stringArray = arrayInteger.join(',');
document.write(stringArray);