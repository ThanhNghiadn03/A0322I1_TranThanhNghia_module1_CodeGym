let numerators = [];
let denominators = [];
let numOfFraction = parseInt(prompt('Nhập vào số lượng phân số : '));
for (let i=0 ; i<numOfFraction ; i++) {
    numerators[i] = parseInt(prompt('Nhập vào tử số của phân số thứ '+i+' : '));
    denominators[i] = parseInt(prompt('Nhập vào mẫu số của phân số thứ '+i+' : '));
}
document.write('Phân số : ');
for (let i=0 ; i<numOfFraction ; i++) {
    document.write(numerators[i] + '/'+denominators[i]+'&nbsp;&nbsp;');
}
let UCLN = 1;
for (let i=0 ; i<numOfFraction ; i++) {
    UCLN = UCLN * denominators[i];
}
for (let i=0 ; i<numOfFraction ; i++) {
    let factor = UCLN/denominators[i];
    numerators[i] = numerators[i]*factor;
}
let max = numerators[0];
for (let i=0 ; i<numOfFraction ; i++) {
    if (numerators[i] > max) {
        max = numerators[i];
    }
}
let index = numerators.indexOf(max);
document.write('<br><br>Vị trí của phân số lớn nhất là : '+index);
