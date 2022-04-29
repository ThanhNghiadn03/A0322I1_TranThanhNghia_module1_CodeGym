let arrayInteger = [];
let numOfEle = parseInt(prompt('Nhập vào số lượng phần tử trong mảng : '));
for (let i=0 ; i<numOfEle ; i++) {
    let x = parseInt(prompt('Nhập vào phần tử thứ '+ i + ' : '));
    arrayInteger.push(x);
}
let maxEle = arrayInteger[0];
let average = 0;
for (let i=0 ; i<numOfEle ; i++) {
    if (maxEle < arrayInteger[i]) {
        maxEle = arrayInteger[i];
    }
    document.write(arrayInteger[i] + '<br>');
    average += arrayInteger[i];
}
average = average/numOfEle;
alert('Giá trị lớn nhất trong mảng là : '+ maxEle);
alert('Giá trị trung bình của các phần tử nằm trong mảng là : '+ average);
document.write('Max : ' + maxEle + '<br><br>');
document.write('Average : ' + average + '<br>');

