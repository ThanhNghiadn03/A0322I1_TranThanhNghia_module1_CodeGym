let sotunhien=1;
let demsonguyento=0;
let soluongso = parseInt(prompt('Bạn muốn in ra bao nhiêu số nguyên tố đầu tiên ? '));
while (demsonguyento < soluongso) {
    let uoc = 0;
    sotunhien++;
    for (let i=1; i<=sotunhien ; i++) {
        if (sotunhien%i==0) {
            uoc++;
        }
    }
    if (uoc == 2) {
        document.write(sotunhien);
        document.write('<br>');
        demsonguyento++;
    }
}