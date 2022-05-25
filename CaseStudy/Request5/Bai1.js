/*Viết hàm tính tổng các số chẵn trong ma trận có kích thước m*n. Với m, n là các số nhập từ bàn phím.*/
let matrix = [];
let m = parseInt(prompt('Nhập vào số cột của ma trận : '));
let n = parseInt(prompt('Nhập vào số hàng của ma trận : '));
for (let i=0 ; i<n ; i++) {
    matrix[i] = [];
    for (let j=0 ; j<m ; j++) {
        matrix[i][j] = parseInt(prompt('Nhập vào cột '+i+' hàng '+j+' : ' ));
        document.write(matrix[i][j]+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');
    }
    document.write('<br>');
}
function sumEvenNumber(matrix) {
    let sum = 0;
    let count = 0;
    for (let i=0 ; i<n ; i++) {
        for(let j=0 ; j<m ; j++) {
            if (matrix[i][j]%2==0) {
                sum += matrix[i][j];
                count++;
            }
        }
    }
    document.write('<br><br>Số lượng các số chẵn trong ma trận là : '+ count);
    document.write('<br><br>Tổng các số chẵn có trong ma trận là : '+sum);
}

sumEvenNumber(matrix);