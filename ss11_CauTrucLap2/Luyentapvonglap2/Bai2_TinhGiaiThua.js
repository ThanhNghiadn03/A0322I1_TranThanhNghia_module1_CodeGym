let number = parseInt(prompt('Nhập vào số để tính giai thừa : '));
let factorial = 1;
for (let i=1 ; i<=number ; i++) {
    factorial*=i;
}
document.write('Giai thừa của '+ number + ' là : ' + factorial);