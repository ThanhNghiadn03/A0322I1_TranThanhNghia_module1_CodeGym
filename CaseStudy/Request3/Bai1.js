let arrayUse = [];
let numOfElement = parseInt(prompt('Nhập vào số lượng phần tử : '));
for (let i=0 ; i<numOfElement; i++) {
    arrayUse[i] = parseInt(prompt('Nhập vào phần tử thứ '+i+' : '));
}
let arrayPrefixSum = [];
let numOfPre = 0;
for (let i=0 ; i<numOfElement; i++) {
    let sum = 0;
    for (let j=0 ; j<(i+1) ; j++) {
        sum += arrayUse[j];
    }
    arrayPrefixSum[numOfPre] = sum;
    numOfPre++;
}
document.write('Mảng A : ');
for (let i=0 ; i<numOfElement ; i++) {
    document.write(arrayUse[i] + '  ');
}
document.write('<br><br>Prefix sums của A : ');
for (let i=0 ; i<numOfPre ; i++) {
    document.write(arrayPrefixSum[i] + '  ');
}