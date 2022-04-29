let arrayA = new Array(10);
let arrayB = new Array(10);
let arrayC = new Array(20);
alert('Nhập mảng A : ');
for (let i=0 ; i<arrayA.length ; i++) {
    arrayA[i] = parseInt(prompt('Nhập vào phần tử thứ ' + i + ' : '));
}
let stringArray = arrayA.join(',');
document.write('Mảng A : '+ stringArray);
alert('Nhập mảng B : ');
for (let i=0 ; i<arrayB.length ; i++) {
    arrayB[i] = parseInt(prompt('Nhập vào phần tử thứ ' + i + ' : '));
}
stringArray = arrayB.join(',');
document.write('<br><br>Mảng B : ' + stringArray);
arrayC = arrayA.concat(arrayB);
stringArray = arrayC.join(',');
document.write('<br><br>Mảng C : ' + stringArray)
