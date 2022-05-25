/*Viết chương trình kiểm tra một ký tự trong bảng chữ cái tiếng anh là nguyên âm hay phụ âm. Ký tự là bất kỳ được
nhập từ bàn phím. Các ký tự nguyên âm bao gồm: 'o', 'u', 'i', 'a', 'e' hoặc 'O', 'U', 'I', 'A', 'E'*/
let character = prompt('Nhập vào kí tự : ');
switch (character) {
    case 'u':
    case 'e':
    case 'o':
    case 'a':
    case 'i':
    case 'U':
    case 'E':
    case 'O':
    case 'A':
    case 'I':
        alert(character+' là nguyên âm');
        break;
    default :
        alert(character+' là phụ âm');
        break;
}