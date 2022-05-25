function rutGon(string) {
    for (let i=0 ; i<string.length ; i++) {
        for (let j=i+1 ; j<string.length ; j++) {
            if (string[i] == string[j]) {
                string[j] = '*';
            }
        }
    }
    let result = [];
    let n=0;
    for (let i=0 ; i<string.length ; i++) {
        if (string[i] != '*') {
            result[n++] = string[i];
        }
    }
    return result;
}
function compare(string1, string2) {
    let numbers = 0;
    for (let i=0 ; i<string1.length ; i++) {
        for (let j=0 ; j<string2.length ; j++) {
            if (string1[i] == string2[j]) {
                numbers ++;
            }
        }
    }
    return numbers;
}
let string1Use = prompt('Nhập vào xâu thứ nhất : ');
let string2Use = prompt('Nhập vào xâu thứ hai : ');
let arrayString1 = [];
let arrayString2 = [];
for (let i=0 ; i<string1Use.length ; i++) {
    arrayString1[i] = string1Use[i];
}
for (let i=0 ; i<string2Use.length ; i++) {
    arrayString2[i] = string2Use[i];
}
arrayString1 = rutGon(arrayString1);
arrayString2 = rutGon(arrayString2);
console.log(arrayString1);
console.log(arrayString2);
alert('Số lượng kí tự chung giữa xâu '+string1Use+' và '+string2Use+' là : '+compare(arrayString1,arrayString2));