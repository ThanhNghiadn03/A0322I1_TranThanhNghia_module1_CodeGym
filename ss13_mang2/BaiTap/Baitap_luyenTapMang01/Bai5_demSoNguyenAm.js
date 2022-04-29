let arrayElement = [-1,2,3,-7,19,28,61,-28,0,9,100];
let count = 0;
for (let i=0 ; i<arrayElement.length ; i++) {
    if (arrayElement[i] < 0) {
        count++;
    }
}
alert('Có '+ count + ' số nguyên âm trong chuỗi số');