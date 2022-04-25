let array = [];
let soluong = parseInt(prompt('Nhập vào số lượng các phần tử mảng : '));

for (let i=0; i<soluong ; i++) {
    array[i] = parseFloat(prompt('Nhập vào phần tử thứ '+ i));
}
document.write('Các phần tử trong mảng bạn vừa nhập là : <br><br>');
for (let i=0 ; i<soluong ; i++) {
    document.write(array[i] + '   ');
}
document.write('<br><br>Đảo ngược các phần tử trong mảng : <br><br>');
let first = 0;
let last = soluong - 1;
while (first<last) {
    let tmp = array[first];
    array[first] = array[last];
    array[last] = tmp;
    first++;
    last--;
}
for (let i=0 ; i<soluong ; i++) {
    document.write(array[i] + '   ');
}