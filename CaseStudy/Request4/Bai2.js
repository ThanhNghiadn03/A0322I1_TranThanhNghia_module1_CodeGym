let stringUser = prompt('Nhập vào 1 xâu để đếm số kí tự khác nhau trong đó : ');
let count = 0;
for (let i=0 ; i<stringUser.length ; i++) {
    let time = 0;
    for (let j=i+1 ; j<stringUser.length ; j++) {
        if (stringUser[i] == stringUser[j]) {
            time++;
        }
    }
    if (time == 0) {
        count++;
    }
}
alert('Số lượng kí tự khác nhau trong xâu '+ stringUser+' là : '+count);