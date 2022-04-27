let stringNum = prompt('Nhập vào 1 chuỗi số : ');
let newString = "";
for (let i=0 ; i<stringNum.length ; i++) {
    if (i != (stringNum.length-1) && parseInt(stringNum[i])%2==0 && parseInt(stringNum[i+1])%2==0) {
        newString = newString.concat(stringNum[i]);
        newString = newString.concat('-');
    } else {
        newString = newString.concat(stringNum[i]);
    }
}
document.write(newString);