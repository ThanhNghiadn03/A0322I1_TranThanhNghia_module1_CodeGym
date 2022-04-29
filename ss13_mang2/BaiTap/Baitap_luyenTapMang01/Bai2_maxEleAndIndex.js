let arrayInteger = [10,2,3,85,20,18,24,100,21,22,63,99,11,81,72,16];
let maxEle = arrayInteger[0];
for (let i=0 ; i<arrayInteger.length ; i++) {
    if (arrayInteger[i] > maxEle) {
        maxEle = arrayInteger[i];
    }
}
let index = arrayInteger.indexOf(maxEle);
alert('Giá trị lớn nhất trong mảng là : '+maxEle);
alert('Vị trí của ' + maxEle + ' trong mảng là : ' + index);