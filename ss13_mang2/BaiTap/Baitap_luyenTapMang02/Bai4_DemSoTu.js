let stringUse = prompt('Nhập vào 1 câu : ');
let count = 0;
for (let i=0 ; i<stringUse.length ; i++) {
    if (i==0 && stringUse[i] != ' ') {
            count++;
    } else {
        if (stringUse[i] == ' ' && stringUse[i+1] != ' ') {
            count++;
        }
    }
}
document.write('Số từ của câu ' + stringUse + ' là : ' + count);