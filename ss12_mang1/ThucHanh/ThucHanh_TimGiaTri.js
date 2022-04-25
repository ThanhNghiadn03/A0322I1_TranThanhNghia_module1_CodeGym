let valueNeedToFind = parseInt(prompt('Nhập vào giá trị muốn tìm : '));
let array = [1,2,3,4,5,6,7,8,9,10];
let right = 0;
for (let i=0 ; i<array.length ; i++) {
    if (array[i]==valueNeedToFind) {
        alert('Element '+ i + ' = ' + valueNeedToFind);
        right++;
        break;
    }
}
if (right==0) {
    alert('Not found');
}