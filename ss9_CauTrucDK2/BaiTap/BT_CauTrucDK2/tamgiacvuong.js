function tgv() {
    let canh1 = parseFloat(document.getElementById('canh1').value);
    let canh2 = parseFloat(document.getElementById('canh2').value);
    let canh3 = parseFloat(document.getElementById('canhhuyen').value);
    if (canh3*canh3 != canh1*canh1 + canh2*canh2) {
        alert('Tam giác vuông này không tồn tại !');
    } else {
        let choose = prompt('Nhập 1 nếu chỉ muốn tính diện tích , nhập 2 nếu chỉ muốn tính chu vi , nhập 3 nếu muốn tính cả diện tích và chu vi');
        let area = 1;
        let perimeter = 1;
        switch (choose) {
            case '1' :
            {
                area = canh1 * canh2 *(1/2);
                console.log(area);
                document.getElementById('area').innerHTML = 'Diện tích là : ' + area;
                document.getElementById('perimeter').innerText = 'X';
                break;
            }
            case '2' :
            {
                perimeter = canh1+canh2+canh3;
                document.getElementById('perimeter').innerHTML = 'Chu vi là : ' + perimeter;
                document.getElementById('area').innerText = 'X';
                break;
            }
            case '3' :
            {
                area = canh1 * canh2 * (1/2);
                document.getElementById('area').innerHTML = 'Diện tích là : ' + area;
                perimeter = canh1 + canh2 + canh3;
                document.getElementById('perimeter').innerHTML = 'Chu vi là : ' + perimeter;
                break;
            }
            default :
                alert('Nhập không hợp lệ');
        }
    }
}