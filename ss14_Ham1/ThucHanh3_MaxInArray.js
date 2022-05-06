function array(arrUse) {
    let max = arrUse[0];
    for (let i=0 ; i<arrUse.length ; i++) {
        if (max < arrUse[i]) {
            max = arrUse[i];
        }
    }
    return max;
}
let arrayInput = [];
let numberOfEle = parseInt(prompt('Nhập vào số lượng phần tử trong mảng : '));
document.write('Các phần tử trong mảng : ');
for (let i=0 ; i<numberOfEle ; i++) {
    arrayInput[i] = parseInt(prompt('Nhập vào phần tử thứ '+ i + ' : '));
    document.write(arrayInput[i] + '  ');
}
let maxInArray = array(arrayInput);
document.write('<br><br>Giá trị lớn nhất trong mảng là : ' + maxInArray);
