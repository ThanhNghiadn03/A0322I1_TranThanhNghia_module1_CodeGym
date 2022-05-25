let arrayA = [];
let numberOfEleInA = parseInt(prompt('Nhập vào số lượng phần tử của mảng A : '));
for (let i=0 ; i<numberOfEleInA ; i++) {
    arrayA[i] = parseInt(prompt('Nhập vào phần tứ thứ '+ i + ' của mảng A : '));
}
let arrayB = [];
let numberOfEleInB = parseInt(prompt('Nhập vào số lượng phần tử của mảng B : '));
for (let i=0 ; i<numberOfEleInB ; i++) {
    arrayB[i] = parseInt(prompt('Nhập vào phần tử thứ '+i+' của mảng B : '));
}
let missingValueAinB = [];
let countEle =0;
for (let i=0 ; i<numberOfEleInB ; i++) {
    if (arrayA.includes(arrayB[i])==false) {
        missingValueAinB[countEle] = arrayB[i];
        countEle++;
    }
}
for (let i=0 ; i<missingValueAinB.length ; i++) {
    for (let j=i ; j<missingValueAinB.length ; j++) {
        if (missingValueAinB[i] > missingValueAinB[j]) {
            let tmp = missingValueAinB[i];
            missingValueAinB[i] = missingValueAinB[j];
            missingValueAinB[j] = tmp;
        }
    }
}
document.write('Mảng A : ');
for (let i=0 ; i<numberOfEleInA ; i++) {
    document.write(arrayA[i]+' ');
}
document.write('<br><br>Mảng B : ');
for (let i=0 ; i<numberOfEleInB ; i++) {
    document.write(arrayB[i] + '  ');
}
document.write('<br><br>Mảng bao gồm các phần tử có trong B nhưng không có trong A : <br>');
for (let i=0 ; i<missingValueAinB.length ; i++) {
    document.write(missingValueAinB[i]+'  ');
}