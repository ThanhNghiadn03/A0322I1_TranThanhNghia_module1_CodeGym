let board = [];
    let data = "";
    for (let i=0 ; i<5 ; i++) {
        board[i] = new Array("O","O","O","O","O");
    }

    for (let i=0 ; i<5 ; i++) {
        data += '<br>';
        for (let j=0 ; j<5 ; j++) {
            data += board[i][j] + '&nbsp;&nbsp;&nbsp;&nbsp';
        }
    }
    data += '<br><br><input type="button" value="Play" onclick="play()">'
    document.getElementById('game').innerHTML=data;

    function play() {
        let posX = parseInt(prompt("Nhập vào cột (tính từ 0 bên trái) thứ : "));
        let posY = parseInt(prompt("Nhập vào hàng thứ (hàng đầu tiên là thứ 0) thứ : "));
        let valueXorO = prompt("Bạn đánh X hay O : ");
        data = "";
        board[posY][posX] = valueXorO;
        for (let i=0 ; i<5 ; i++) {
            data += '<br>';
            for (let j = 0; j < 5; j++) {
                data += board[i][j] + '&nbsp;&nbsp;&nbsp;&nbsp';
            }
        }
            data += '<br><br><input type="button" value="Play" onclick="play()">'
            document.getElementById('game').innerHTML=data;
    }