class Circle {
    constructor(radius , color) {
        this.radius = radius;
        this.color = color;
    }
    getRadius() {
        return this.radius;
    }

    setRadius(radius) {
        this.radius = radius;
    }
    getArea() {
        return Math.PI*this.radius*this.radius;
    }

}
let radius1 = new Circle('12.6','Vang');
let valueArea = radius1.getArea();
document.write('Dien tich cua hinh tron do la : '+ valueArea);
