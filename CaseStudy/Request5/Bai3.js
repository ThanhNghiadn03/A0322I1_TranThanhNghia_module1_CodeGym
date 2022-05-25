let array2D = [];
let col = parseInt(prompt('Nhập vào số lượng cột của mảng 2 chiều :'));
let row = parseInt(prompt('Nhập vào số lượng hàng của mảng 2 chiều : '));
for (let i=0 ; i<row ; i++) {
    array2D[i] = [];
    for (let j=0 ; j<col ; j++) {
        array2D[i][j] = parseInt(prompt('Nhập vào phần tử thứ ['+i+']['+j+'] : '));
        document.write(array2D[i][j]+'&nbsp;&nbsp;&nbsp;');
    }
    document.write('<br>');
}

function maxArray2D(array2D) {
    let max = array2D[0][0];
    for (let i=0 ; i<row ; i++) {
        for (let j=0 ; j<col ; j++) {
            if (max < array2D[i][j]) {
                max = array2D[i][j];
            }
        }
    }
    return max;
}

function minArray2D(array2D) {
    let min = array2D[0][0];
    for (let i=0 ; i<row ; i++) {
        for (let j=0 ; j<col ; j++) {
            if (min > array2D[i][j]) {
                min = array2D[i][j];
            }
        }
    }
    return min;
}

document.write('<br><br>Phần tử lớn nhất trong mảng : '+maxArray2D(array2D));
document.write('<br><br>Phần tử nhỏ nhất trong mảng : '+minArray2D(array2D));