let arrayInteger = [1,9,23,45,67,10,100];
let count = 0;
for (let i=0 ; i<arrayInteger.length ; i++) {
    if (arrayInteger[i] >= 10) {
        count++;
    }
}
alert('Có tổng cộng '+count+' phần tử có giá trị lớn hơn hoặc bằng 10');