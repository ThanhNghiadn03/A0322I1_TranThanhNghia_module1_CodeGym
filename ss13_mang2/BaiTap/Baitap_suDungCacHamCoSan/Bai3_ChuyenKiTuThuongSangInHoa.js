let stringNeedChange = prompt('Nhập vào 1 chuỗi : ');
let stringChanged = [];
const UPPER = "QWERTYUIOPASDFGHJKLZXCVBNM";
for (let i=0 ; i<stringNeedChange.length ; i++) {
    if (UPPER.includes(stringNeedChange[i]) == 1) {
        stringChanged.push(stringNeedChange[i].toLowerCase());
    } else {
        stringChanged.push(stringNeedChange[i].toUpperCase());
    }
}
for (let i=0 ; i<stringChanged.length ; i++) {
    document.write(stringChanged[i]);
}