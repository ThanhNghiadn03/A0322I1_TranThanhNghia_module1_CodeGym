class Animal {
    constructor(name,weight,speed) {
        this.name = name;
        this.weight = weight;
        this.speed = speed;
    }
}

class Rat extends Animal {
    constructor(name,weight,speed,status) {
        super(name,weight,speed);
        this.status = status;
    }
    voice() {
        alert(this.name+' kêu chít chít');
    }
}

class Cat extends Animal {
    voice() {
        alert(this.name+' kêu meo meo');
    }

    catchRat(rat) {
        if (this.speed > rat.speed) {
            return true;
        } else {
            return false;
        }
    }

    eatRat(rat) {
        if (rat.status=='Alive' && this.catchRat(rat)==true) {
            alert('Mèo ăn chuột');
            this.weight += rat.weight;
            rat.weight = 0;
        } else {
            alert('Con chuột ăn không được');
        }
    }
}

let chuot1 = new Rat('chuột 1',1,10,'Alive');

let meo1 = new Cat('mèo 1',5,17);

chuot1.voice();
meo1.voice();
meo1.catchRat(chuot1);
meo1.eatRat(chuot1);
alert('Khối lượng của '+meo1.name+' sau khi ăn '+chuot1.name+' là : '+meo1.weight);