let nhietdo = parseFloat(prompt('Nhập vào nhiệt độ : '));
while (nhietdo < 20 || nhietdo > 100) {
    if (nhietdo < 20) {
        nhietdo = parseFloat(prompt('Tăng nhiệt độ : '));
    } else if (nhietdo > 100) {
        nhietdo = parseFloat(prompt('Giảm nhiệt độ : '));
    }
}
document.write('Nhiệt độ : ' + nhietdo);