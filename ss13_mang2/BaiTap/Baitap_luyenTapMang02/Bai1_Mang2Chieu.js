let array2D = [[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20]];
for (let i=0 ; i<array2D.length ; i++) {
    document.write('row '+ i + '<br>');
    for (let j=0 ; j<array2D[i].length ; j++) {
        document.write(array2D[i][j] + '<br>');
    }
}