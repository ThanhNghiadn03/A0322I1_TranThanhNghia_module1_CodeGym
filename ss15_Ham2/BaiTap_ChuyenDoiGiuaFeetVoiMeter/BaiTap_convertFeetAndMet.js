function feetToMeter() {
    let feet = parseFloat(document.getElementById('Feet').value);
    document.getElementById('resultFtoM').innerHTML = feet*0.305;
}

function meterToFeet() {
    let meter = parseFloat(document.getElementById('Meter').value);
    document.getElementById('resultMtoF').innerHTML = meter*3.279;
}