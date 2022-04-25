let fibo1 = 1;
let fibo2 = 1;
let count = 2;
let sum = 2;
document.write('1<br>1<br>');
while (count < 20) {
    fibo1 = fibo1 + fibo2;
    document.write(fibo1 + '<br>')
    count++;
    sum = sum + fibo1;
    if (count < 20) {
        fibo2 = fibo2 + fibo1;
        sum += fibo2;
        count++;
    }
    document.write(fibo2 + '<br>');
}
document.write('Tổng của 20 số fibonacci đầu tiên là : '+ sum);