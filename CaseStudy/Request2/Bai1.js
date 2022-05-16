/*Viết một chương trình để nhập lương nhân viên, tính thuế thu nhập và lương ròng (số tiền lương thực sự mà nhân
viên đó nhận được). Với các thông số giả sử như sau (không theo luật lương, chỉ là con số giả sử để dễ tính toán):
20% thuế thu nhập nếu lương là 15 triệu.
10% thuế thu nhập nếu lương từ 7 đến 15 triệu.
5% thuế thu nhập nếu lương dưới 7 triệu
*/
let salary = parseInt(prompt('Nhập vào lương nhân viên'));
let tax = 1;
let netSalary = 1;
if (salary < 7000000) {
    tax = (5/100)*salary;
    netSalary = salary - tax;
} else if (salary < 15000000) {
    tax = (10/100)*salary;
    netSalary = salary-tax;
} else {
    tax = (20/100)*salary;
    netSalary = salary-tax;
}

document.write('Lương nhân viên : '+ salary+'<br><br>');
document.write('Thuế thu nhập : '+ tax + '<br><br>');
document.write('Lương ròng : '+netSalary+'<br><br>');