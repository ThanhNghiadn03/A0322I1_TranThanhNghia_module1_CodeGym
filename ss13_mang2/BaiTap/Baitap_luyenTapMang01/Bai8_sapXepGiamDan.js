let arrayInteger = new Array(10);
for (let i=0 ; i<arrayInteger.length ; i++) {
    arrayInteger[i] = parseInt(prompt('Nhập vào phần tử thứ '+ i + ' : '));
}
let stringArray = arrayInteger.join(',');
document.write('Mảng của bạn đã nhập : <br><br>' + stringArray);
for (let i=0 ; i<arrayInteger.length ; i++) {
    for (let j=i ; j<arrayInteger.length ; j++) {
        if (arrayInteger[i] < arrayInteger[j]) {
            let tmp = arrayInteger[i];
            arrayInteger[i] = arrayInteger[j];
            arrayInteger[j] = tmp;
        }
    }
}
stringArray = arrayInteger.join(',');
document.write('<br><br>Sắp xếp giảm dần : <br><br>' + stringArray);