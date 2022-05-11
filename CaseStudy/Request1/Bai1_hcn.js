let width = parseInt(prompt('Enter width : '));
let height = parseInt(prompt('Enter height : '));
for (let i=0 ; i<height ; i++) {
    for (let j=0 ; j<width ; j++) {
        if (i==0 || i==(height-1)) {
            document.write('* &nbsp;');
        } else {
            if (j==0 || j==(width-1)) {
                document.write('* &nbsp;');
            } else {
                document.write('&nbsp; &nbsp;&nbsp;');
            }
        }
    }
    document.write('<br>');
}