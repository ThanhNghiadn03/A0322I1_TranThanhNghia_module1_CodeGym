class Date {
    constructor(day , month , year) {
        this.day =day;
        this.month = month;
        this.year = year;
    }

    getDay() {
        return this.day;
    }

    getMonth() {
        return this.month;
    }

    getYear() {
        return this.year;
    }

    setDay(day) {
        this.day = day;
    }

    setMonth(month) {
        this.month = month;
    }

    setYear(year) {
        this.year = year;
    }

    setDate(day , month , year) {
        this.day = day;
        this.month = month;
        this.year = year;
    }

    toString() {
        document.write(this.getDay() + '/'+this.getMonth()+'/'+this.getYear()+'<br>');
    }
}

let date1 = new Date(21,6,2003);
let date2 = new Date(4,9,2003);
date1.toString();
date2.toString();
date1.setDate(11,5,2022);
date1.toString();