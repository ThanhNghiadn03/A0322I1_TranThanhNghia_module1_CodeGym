function hcn() {
    let canh1 = parseFloat(document.getElementById('dai').value);
    let canh2 = parseFloat(document.getElementById('rong').value);
    let choose = prompt('Nhập 1 nếu chỉ muốn tính diện tích , nhập 2 nếu chỉ muốn tính chu vi , nhập 3 nếu muốn tính cả diện tích và chu vi');
    let area = 1;
    let perimeter = 1;
    switch (choose) {
        case '1' :
        {
            area = canh1 * canh2;
            console.log(area);
            document.getElementById('area').innerHTML = 'Diện tích hình chữ nhật là : ' + area;
            document.getElementById('perimeter').innerText = 'X';
            break;
        }
        case '2' :
        {
            perimeter = 2*(canh1+canh2);
            document.getElementById('perimeter').innerHTML = 'Chu vi hình chữ nhật là : ' + perimeter;
            document.getElementById('area').innerText = 'X';
            break;
        }
        case '3' :
        {
            area = canh1 * canh2;
            document.getElementById('area').innerHTML = 'Diện tích hình chữ nhật là : ' + area;
            perimeter = 2*(canh1+canh2);
            document.getElementById('perimeter').innerHTML = 'Chu vi hình chữ nhật là : ' + perimeter;
            break;
        }
        default :
            alert('Nhập không hợp lệ');
    }
}