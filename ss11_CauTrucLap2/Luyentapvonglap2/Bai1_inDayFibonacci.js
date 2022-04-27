let fibo1 = 1;
let fibo2 = 1;
let numberOfFibonacci = parseInt(prompt('Bạn muốn in ra bao nhiêu số Fibonacci (số lượng lớn hơn 2):'));
document.write(fibo1 + '<br>'+ fibo2 + '<br>');
let count = 2;
while (count < numberOfFibonacci) {
    fibo1 += fibo2;
    document.write(fibo1 + '<br>');
    count++;
    if (count != numberOfFibonacci) {
        fibo2 += fibo1;
        document.write(fibo2 + '<br>');
        count++;
    }
}