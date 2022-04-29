let board = [];
let dataTicTacToe = "";
for (let i=0 ; i<3 ; i++) {
    board[i] = ['O','O','O'];
}
for (let i=0 ; i<3 ; i++) {
    dataTicTacToe += '<br>';
    for (let j=0 ; j<3 ; j++) {
        dataTicTacToe += board[i][j] + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
    }
}

dataTicTacToe += '<br><br><input type="button" id="play" onclick="PlayTicTacToe()" value="Play">';
document.getElementById('display').innerHTML=dataTicTacToe;

function PlayTicTacToe() {
    let posX = parseInt(prompt('Nhập vào hàng thứ (bắt đầu từ 0) :'));
    let posY = parseInt(prompt('Nhập vào cột thứ (bắt đầu từ 0) : '));
    let value = prompt('Bạn muốn nhập X hay O : ');
    board[posX][posY]=value;
    dataTicTacToe = "";
    for (let i=0 ; i<3 ; i++) {
        dataTicTacToe += '<br>';
        for (let j=0 ; j<3 ; j++) {
            dataTicTacToe += board[i][j] + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
        }
    }
    dataTicTacToe += '<br><br><input type="button" id="play" onclick="PlayTicTacToe()" value="Play">';
    document.getElementById('display').innerHTML=dataTicTacToe;
}