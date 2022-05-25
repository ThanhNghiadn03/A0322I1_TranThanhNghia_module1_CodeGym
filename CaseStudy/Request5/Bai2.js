/*Viết hàm liệt kê các số nguyên tố trong mảng 2 chiều, đếm các số nguyên tố có trong mảng đó.*/
let array2D = [];
let col = parseInt(prompt('Nhập vào số cột của mảng 2 chiều : '));
let row = parseInt(prompt('Nhập vào số hàng của mảng 2 chiều : '));
for (let i=0 ; i<row ; i++) {
    array2D[i] = [];
    for (let j=0 ; j<col ; j++) {
        array2D[i][j] = parseInt(prompt('Nhập vào phần tử thứ ['+i+']['+j+'] : '));
        document.write(array2D[i][j]+'&nbsp;&nbsp;&nbsp;');
    }
    document.write('<br>');
}
document.write('<br><br>');
function primeNumber(array2D) {
    let count = 0;
    let arrPrime = [];
    let n = 0;
    for (let i=0 ; i<row ; i++) {
        for (let j=0 ; j<col ; j++) {
            let soLuongUoc = 0;
            for (let dem = 1 ; dem <=array2D[i][j]; dem++){
                if (array2D[i][j]%dem==0) {
                    soLuongUoc++;
                }
            }
            if (soLuongUoc==2) {
                if (arrPrime.includes(array2D[i][j])==false) {
                    arrPrime[n++] = array2D[i][j];
                    count++;
                    document.write('Số nguyên tố thứ '+count+' ở bên trong mảng : '+ array2D[i][j]+'<br><br>');
                }
            }
        }
    }
}
primeNumber(array2D);