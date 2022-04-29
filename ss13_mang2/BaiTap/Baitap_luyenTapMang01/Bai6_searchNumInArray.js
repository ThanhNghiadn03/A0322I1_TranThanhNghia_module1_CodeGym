let arrayElement = new Array(5);
for (let i=0 ; i < arrayElement.length ; i++) {
    arrayElement[i] = parseInt(prompt('Nhập vào phần tử thứ ' + i + ' : '));
}
let result = '';
result = arrayElement.join(',');
document.write(result);
let value = parseInt(prompt('Nhập vào giá trị bạn muốn tìm trong mảng : '));
let search = arrayElement.indexOf(value);
search < 0 ? alert(value + ' is not in Array') : alert(value + ' is in Array');