let arrayInteger = [];
let numOfEle = parseInt(prompt('Nhập vào số lượng các phần tử : '));
document.write('Mảng của bạn nhập vào là : ' + '<br><br>');
for (let i=0 ; i<numOfEle ; i++) {
    let x = parseInt(prompt('Nhập vào phần tử thứ '+ i + ' : '));
    arrayInteger.push(x);
    document.write(arrayInteger[i] + '&nbsp;&nbsp;&nbsp;');
}
document.write('<br><br>Mảng của bạn sau khi đảo ngược là : <br><br>');
arrayInteger.reverse();
for (let i=0 ; i<numOfEle ; i++) {
    document.write(arrayInteger[i] + '&nbsp;&nbsp;&nbsp;');
}
