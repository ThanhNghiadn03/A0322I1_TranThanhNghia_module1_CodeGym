function checkPrime() {
    let numberNeedCheck = parseInt(document.getElementById('needCheck').value);
    if (numberNeedCheck < 2) {
        document.getElementById('result').innerHTML = 'Đây không phải là số nguyên tố';
    } else {
        let count = 0;
        for (let i=1 ; i<=numberNeedCheck ; i++) {
            if (numberNeedCheck%i==0) {
                count++;
            }
        }
        if (count==2) {
            document.getElementById('result').innerHTML = 'Đây là số nguyên tố';
        } else {
            document.getElementById('result').innerHTML = 'Đây không phải là số nguyên tố';
        }
    }
}