function userConfirm(answer) {
    let result = "";
    if (answer) {
        result = "Excelent , we'll play a nice game";
    } else {
        result = "oke";
    }
    return result;
}
let userAnswer = confirm('Do you want to play a game ?');
let final = userConfirm(userAnswer);
document.write(final);