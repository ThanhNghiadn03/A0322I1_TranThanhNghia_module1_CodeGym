class Apple {
    constructor(weight) {
        this.weight = weight;
    }
    decrease() {
        this.weight--;
    }
    isEmty() {
        if(this.weight == 0) {
            return true;
        } else {
            return false;
        }
    }
    getWeight() {
        return this.weight;
    }
}

class Human {
    constructor(name,gender,weight) {
        this.name = name;
        this.gender = gender;
        this.weight = weight;
    }

    isMale() {
        if (this.gender == "Male") {
            return true;
        } else {
            return false;
        }
    }

    setGender(gender) {
        this.gender = gender;
    }

    checkApple(Apple) {
        if (Apple.isEmty()==true) {
            return false;
        } else {
            return true;
        }
    }

    eat(Apple) {
        if (this.checkApple(Apple)== true) {
            alert(this.name+' ăn táo ');
            Apple.decrease();
            this.weight++;
        }else {
            alert('Quả táo đã hết');
        }
    }

    say(string) {
        return string;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getWeight() {
        return this.weight;
    }
    setWeight(weight) {
        this.weight = weight;
    }
}
let Adam = new Human("Adam","Male",60);
let Eva = new Human("Eva" , "Female" , 45);
let apple = new Apple(10);
while (apple.isEmty() != true) {
    Adam.eat(apple);
    Eva.eat(apple);
}
document.write('Cân nặng của Adam : '+Adam.getWeight());
document.write('<br><br>Cân nặng của Eva : '+ Eva.getWeight());
alert('Cân nặng của quả táo : '+apple.getWeight() );