let string1 = prompt('Nhập vào chuỗi 1 : ');
let string2 = prompt('Nhập vào chuỗi 2 : ');
console.log(string1.length);
console.log(string2.length);
document.write('String 1 : ' + string1 + '<br><br>' + 'String 2 : ' + string2 + '<br><br>');
for (let i=0 ; i<string1.length ; i++) {
    if (string1.length != string2.length) {
        document.write('Hai chuỗi bạn nhập khác nhau');
        break;
    } else {
        if (string1[i] == string2[i]) {
            if (i==(string1.length - 1)) {
                document.write('Hai chuỗi bạn nhập giống nhau');
            }else {
                continue;
            }
        } else {
            document.write('Hai chuỗi bạn nhập khác nhau');
            break;
        }
    }
}