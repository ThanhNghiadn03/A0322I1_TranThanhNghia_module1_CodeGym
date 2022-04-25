let array = [];
let index = 0;
function addElementToArray() {
    array[index] = document.getElementById('input').value;
    alert('Element ' + index + ' = ' + array[index]);
    index++;
}
function displayElement() {
    let e = "";
   for (let i=0 ; i<index ; i++) {
       e += 'Element '+ i + ' = '+ array[i] + '<br>';
   }
   document.getElementById('result').innerHTML = e;
}