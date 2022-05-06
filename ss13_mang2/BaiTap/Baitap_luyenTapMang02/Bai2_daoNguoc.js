let array1d = [];
let numOfElement = parseInt(prompt('Nhập vào số lượng phần tử trong mảng : '));
for (let i=0 ; i<numOfElement ; i++) {
    array1d[i] = prompt('Nhập vào phần tử thứ '+ i);
}
let strArray = array1d.join('');
document.write('Trước khi đảo ngược : ' + strArray);
strArray = (array1d.reverse()).join('');
document.write('<br><br>Sau khi đảo ngược : ' + strArray);