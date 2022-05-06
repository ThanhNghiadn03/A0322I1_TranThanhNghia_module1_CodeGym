function FtoC() {
    let Fdegress = parseFloat(document.getElementById('theF').value);
    let waschange = (Fdegress-32)/1.8;
    document.getElementById('theC').innerHTML = waschange;
}


