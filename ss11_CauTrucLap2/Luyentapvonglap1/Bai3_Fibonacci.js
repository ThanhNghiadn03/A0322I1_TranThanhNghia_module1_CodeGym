let fi1=1;
let fi2=1;
let count = 2;
document.write(fi1 + '<br>');
document.write(fi2 + '<br>');
while (count < 20) {
    fi1 = fi1+fi2;
    document.write(fi1 + '<br>');
    count++;
    if (count == 20) {
        break;
    }
    fi2 = fi2 + fi1;
    document.write(fi2 + '<br>');
    count++;
}