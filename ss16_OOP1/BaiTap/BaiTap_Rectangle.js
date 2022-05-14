class Rectangle {
    constructor(width , length) {
        this.width = width;
        this.length = length;
    }

    getWidth() {
        return this.width;
    }

    getLength() {
        return this.length;
    }

    setWidth(width) {
        this.width = width;
    }

    setLength(length) {
        this.length = length;
    }

    Area() {
        let area = this.getWidth() * this.getLength();
        document.getElementById('area').innerHTML= area;
    }

    perimeter() {
        let perimeter = (this.getLength()+this.getWidth())*2;
        document.getElementById('perimeter').innerHTML = perimeter;
    }

    drawRectangle() {
        let draw = document.getElementById('Rectangle');
        if (draw.getContext) {
            let drawCtx = draw.getContext('2d');
            drawCtx.fillRect(10,40,this.getWidth(),this.getLength());
        }
    }
}

let rec1 = new Rectangle(12,32);

let user = confirm('Bạn có muốn nhập vào hình chữ nhật ? Nếu không thì sẽ hiện ra hình chữ nhật mặc định ');

if (user==true) {
    let length = parseFloat(prompt('Nhập vào length : '));
    rec1.setLength(length);
    let width = parseFloat(prompt('Nhập vào width : '));
    rec1.setWidth(width);
    document.getElementById('length').innerHTML = rec1.getLength();
    document.getElementById('width').innerHTML = rec1.getWidth();
    rec1.drawRectangle();
    rec1.Area();
    rec1.perimeter();
} else {
    document.getElementById('length').innerHTML = rec1.getLength();
    document.getElementById('width').innerHTML = rec1.getWidth();
    rec1.drawRectangle();
    rec1.Area();
    rec1.perimeter();
}