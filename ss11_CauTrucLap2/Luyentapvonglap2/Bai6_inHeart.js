let width = 7;
let height = 6;
for (let i=0 ; i<height ; i++) {
    if (i==0) {
        for (let j=0 ; j<width ; j++) {
            if (j==1 || j==2 || j==4 || j==5) {
                document.write('*');
            } else {
                document.write('&nbsp;&nbsp;');
            }
        }
        document.write('<br>');
    } else if (i==1 || i==2) {
        for (let j=0 ; j<width ; j++) {
            document.write('*');
        }
        document.write('<br>');
    } else if (i==3) {
        for (let j=0 ; j<width ; j++) {
            if (j>0 && j<6) {
                document.write('*');
            } else {
                document.write('&nbsp;&nbsp;');
            }
        }
        document.write('<br>');
    } else if (i==4) {
        for (let j=0 ; j<width ; j++) {
            if (j>1 && j<5) {
                document.write('*');
            } else {
                document.write('&nbsp;&nbsp;');
            }
        }
        document.write('<br>');
    } else {
        for (let j=0 ; j<width ; j++) {
            if (j==3) {
                document.write('*');
            } else {
                document.write('&nbsp;&nbsp;');
            }
        }
        document.write('<br>');
    }
}