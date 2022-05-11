let canhBen = parseInt(prompt('Nhập vào độ dài cạnh của tam giác cân : '));
let row = canhBen;
for (let i=0 ; i<canhBen ; i++) {
    for (let j=1 ; j<=row; j++) {
        if (j<(canhBen-i)) {
            document.write('&nbsp; &nbsp;&nbsp;')
        } else {
            document.write('* &nbsp;');
        }
    }
    row++;
    document.write('<br>');
}