let number=0;
let count = 0;
let sum = 0;
while (count < 30) {
    if (number%7==0) {
        count++;
        sum+=number;
        document.write(number);
        if (count!=30) {
            document.write(' + ');
        }else {
            document.write(' = '+ sum);
        }
    }
    number++;
}