let array = [-3, 5, 1, 3, 2, 10];
let max = array[0];
let vitri = 0;
for (let i=0 ; i<array.length ; i++) {
    if (array[i] > max) {
        max = array[i];
        vitri = i;
    }
}
alert('Giá trị lớn nhất trong mảng là ' + max + ' nằm ở vị trí thứ ' + vitri);