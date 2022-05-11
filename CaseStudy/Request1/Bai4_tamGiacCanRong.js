let canhBen = parseInt(prompt('Nhập vào cạnh bên của tam giác cân : '));
let row = canhBen;
for (let i=0 ; i<canhBen ; i++) {
    for (let j=1 ; j<=row; j++) {
        if (j<(canhBen-i)) {
            document.write('&nbsp; &nbsp;&nbsp;');
        } else if (i==0 || i==(canhBen-1)){
            document.write('* &nbsp;');
        } else {
            if (j==(canhBen-i) || j==row) {
                document.write('* &nbsp;');
            } else {
                document.write('&nbsp; &nbsp;&nbsp;');
            }
        }
    }
    row++;
    document.write('<br>');
}