let dodai = parseInt(prompt('Nhập vào độ dài cạnh góc vuông của 1 tam giác vuông cân : '));
let count = 0;
for (let i=0 ; i<dodai; i++) {
    count++;
    for (let j=0 ; j<count ; j++) {
        if (i==0 || i==(dodai-1)) {
            document.write('* &nbsp;');
        } else {
            if (j==0 || j==(count-1)) {
                document.write('* &nbsp;');
            } else {
                document.write('&nbsp;&nbsp;&nbsp;&nbsp;');
            }
        }
    }
    document.write('<br>');
}