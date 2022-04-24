let thuaso2=1;
let thuaso1=2;
document.write('<table border="1"');
for(; thuaso2<=9 ; thuaso2++) {
    document.write('<tr>');
    for(; thuaso1<=9 ; thuaso1++) {
        document.write('<td style="width: 500px">');
        document.write(thuaso1 + ' x ' + thuaso2 + ' = ' + (thuaso1*thuaso2));
        document.write('</td>');
    }
    thuaso1 = 2;
    document.write('</tr>');
}
document.write('</table>');