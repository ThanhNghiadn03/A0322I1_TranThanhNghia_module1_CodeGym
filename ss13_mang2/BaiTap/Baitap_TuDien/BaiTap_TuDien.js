let search = prompt('Nhập vào từ vựng tiếng anh để tra nghĩa : ');
let English = ["hi","day","table","calculator","apartment"];
let Vietnamese = ["xin chào","ngày","cái bàn","Máy tính bỏ túi","căn hộ"];
let index = 0;
if (English.indexOf(search)!=(-1)) {
    index = English.indexOf(search);
    alert(Vietnamese[index]);
} else {
    alert('Không có từ này trong từ điển');
}