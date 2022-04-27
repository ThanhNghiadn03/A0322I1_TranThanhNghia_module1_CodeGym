let width = parseInt(prompt('Enter width of rectangle : '));
let height = parseInt(prompt('Enter height of rectangle : '));
for (let i=0 ; i<height ; i++) {
    for (let j=0 ; j<width ; j++) {
        if (i!=0 && i!=(height-1)) {
            if (j==0 || j==(width-1)) {
                document.write('*');
            } else {
                document.write('&nbsp;&nbsp;');
            }
        } else {
            document.write('*');
        }
    }
    document.write('<br>');
}