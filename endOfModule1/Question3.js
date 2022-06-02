class Book {
    constructor(idBook,nameBook,year,numbers,status) {
        this.idBook = idBook;
        this.nameBook = nameBook;
        this.year = year;
        this.numbers = numbers;
        this.status = status;
    }

    getIdBook() {
        return this.idBook;
    }
    getNameBook() {
        return this.nameBook;
    }
    getYear() {
        return this.year;
    }
    getNumbers() {
        return this.numbers;
    }
    getStatus() {
        return this.status;
    }

    setIdBook(IdBook) {
        this.idBook = IdBook;
    }
    setNameBook(nameBook) {
        this.nameBook = nameBook;
    }
    setYear(year) {
        this.year = year;
    }
    setNumbers(numbers) {
        this.numbers = numbers;
    }
    setStatus(status) {
        this.status = status;
    }

    checkId() {
        let idFirst = parseInt(this.idBook[0]);
        while (idFirst<1 || idFirst>5) {
            alert('Bạn nhập bị sai id của sách !!!');
            let id = prompt('Nhập lại id của sách : ');
            this.setIdBook(id);
            idFirst = parseInt(this.idBook[0]);
        }
    }
    valiDate() {
        let year = this.getYear();
        while (year > 10000 || year < 0) {
            alert('Bạn nhập bị sai năm xuất bản của sách !!!');
            year = parseInt(prompt('Nhập lại năm xuất bản của sách : '));
            this.setYear(year);
            year = this.getYear();
        }
    }
}

let book1 = new Book('12345',"Toán",2000,3,true);
let book2 = new Book('23456',"Văn",1998,4,true);
let book3 = new Book('37456','Tiếng Anh',1999,0,false);
let str = '<tr>\n' +
    '        <th>Mã số sách</th>\n' +
    '        <th>Tên sách</th>\n' +
    '        <th>Năm xuất bản</th>\n' +
    '        <th>Số quyển</th>\n' +
    '        <th>Tình trạng</th>\n' +
    '    </tr>';
let listBook = [book1,book2,book3];

function listBookTable() {
    for (let i=0 ; i<listBook.length ; i++) {
        str += '<tr><td>'+listBook[i].idBook+'</td>'+'<td>'+listBook[i].nameBook+'</td>'+'<td>'+listBook[i].year+'</td>'+'<td>'
            +listBook[i].numbers+'</td>'+'<td>'+listBook[i].status+'</td></tr>';
    }
}
listBookTable();
document.getElementById('info').innerHTML = str;

function themSachMoi() {
    let id = prompt('Nhập vào id sách : ');
    let name = prompt('Nhập vào tên sách : ');
    let year = prompt('Nhập vào năm xuất bản : ');
    let numbers = parseInt(prompt('Nhập vào số quyển sách : '));
    if (numbers > 0) {
        var statusBook = true;
    } else {
         var statusBook = false;
    }
    let newBook = new Book(id,name,year,numbers,statusBook);
    newBook.checkId();
    newBook.valiDate();
    listBook.push(newBook);
    str = '<tr>\n' +
        '        <th>Mã số sách</th>\n' +
        '        <th>Tên sách</th>\n' +
        '        <th>Năm xuất bản</th>\n' +
        '        <th>Số quyển</th>\n' +
        '        <th>Tình trạng</th>\n' +
        '    </tr>';
    listBookTable();
    document.getElementById('info').innerHTML = str;
}

function borrowBook(Object) {
    if (Object.numbers!=0) {
        Object.numbers--;
        if (Object.numbers==0) {
            Object.setStatus(false);
        }
    } else {
        alert('Sách không còn để mượn');
    }
}

function plusBook(Object) {
    Object.numbers++;
    if (Object.numbers>0) {
        Object.setStatus(true);
    }
}

function muonSach() {
    alert('Bạn hãy chọn số thứ tự sách từ trên xuống để mượn');
    let stt = parseInt(prompt('Nhập vào số thứ tự :'));
    if (listBook[stt-1].status==true) {
        borrowBook(listBook[stt-1]);
        str = '<tr>\n' +
            '        <th>Mã số sách</th>\n' +
            '        <th>Tên sách</th>\n' +
            '        <th>Năm xuất bản</th>\n' +
            '        <th>Số quyển</th>\n' +
            '        <th>Tình trạng</th>\n' +
            '    </tr>';
        listBookTable();
        document.getElementById('info').innerHTML = str;
        alert('Cảm ơn bạn đã sử dụng sách');
    } else {
        alert('Đã hết loại sách này , bạn hãy chọn cuốn khác');
    }
}

function themSach() {
    alert('Bạn hãy chọn số thứ tự sách từ trên xuống để thêm');
    let stt = parseInt(prompt('Nhập vào số thứ tự :'));
    plusBook(listBook[stt-1]);
    str = '<tr>\n' +
        '        <th>Mã số sách</th>\n' +
        '        <th>Tên sách</th>\n' +
        '        <th>Năm xuất bản</th>\n' +
        '        <th>Số quyển</th>\n' +
        '        <th>Tình trạng</th>\n' +
        '    </tr>';
    listBookTable();
    document.getElementById('info').innerHTML = str;
    alert('Đã thêm sách !!!');
}