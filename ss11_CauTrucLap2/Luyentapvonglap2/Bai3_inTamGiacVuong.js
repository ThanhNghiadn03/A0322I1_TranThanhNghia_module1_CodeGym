let dodaicanh = parseInt(prompt('Nhập vào độ dài cạnh góc vuông của tam giác vuông cân : '));
for (let i=1 ; i<=dodaicanh ; i++) {
    for (let j=0 ; j<i ; j++) {
        document.write(' * ');
    }
    document.write('<br>');
}
document.write('<br><br>');
for (let i=dodaicanh ; i>=0 ; i--) {
    for (let j=0 ; j<i ; j++) {
        document.write(' * ');
    }
    document.write('<br>')
}

document.write('<br><br><br>');
for (let i=1 ; i<=dodaicanh ; i++) {
    let thieu = dodaicanh-i;
    for (; thieu>0 ; thieu--) {
        document.write('&nbsp;&nbsp;&nbsp;');
    }
    for (let j=0 ; j<i ; j++) {
        document.write(' * ');
    }
    document.write('<br>')
}
document.write('<br><br>');
for (let i=dodaicanh ; i>=0 ; i--) {
    let thieu = dodaicanh-i;
    for (; thieu >0 ; thieu--) {
        document.write('&nbsp;&nbsp;&nbsp;');
    }
    for (let j=0 ; j<i ; j++) {
        document.write(' * ');
    }
    document.write('<br>')
}