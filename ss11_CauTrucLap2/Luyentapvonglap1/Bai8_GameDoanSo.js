function play() {
    let guessRange = parseInt(prompt('Bạn muốn đoán từ 0 đến bao nhiêu ?'));
    let randomNumber = Math.floor(Math.random()*guessRange);
    console.log(randomNumber);
    let guessNumber = parseInt(prompt('Nhập vào số bạn đoán : '));
    while (randomNumber != guessNumber) {
        if (randomNumber < guessNumber) {
            alert('Số bạn đoán lớn hơn');
        } else {
            alert('Số bạn đoán bé hơn');
        }
        guessNumber = parseInt(prompt('Bạn có thể nhập lại : '));
    }
    alert('YOU WIN');
}