let myColor = ["Red","Green","White","Black"];
let chuoimoi = "";
for (let i=0 ; i<myColor.length ; i++) {
    chuoimoi = chuoimoi.concat(myColor[i]);
    if (i!=(myColor.length -1)) {
        chuoimoi = chuoimoi.concat(',');
    }
}
document.write(chuoimoi);