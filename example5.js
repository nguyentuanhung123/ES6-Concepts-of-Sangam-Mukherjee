// Default parameters, spread and rest operators

/**
 * 
 * TH1: Trong TH quên truyền giá trị thì sẽ lấy giá trị mặc định có trong hàm
 * Nếu trong hàm không có giá trị mặc định thì khi thực hiện hàm console.log sẽ thấy các giá trị mặc định trong hàm có giá trị undifined
 * Hàm sẽ bị trả về là NaN như bên dưới
 * 
 * TH2: Trong TH có truyền giá trị, giá trị mặc định trong hàm sẽ bị bỏ qua
 * 
 */

function mulOfTwoNmbers(num1 = 1, num2 = 2) {
    console.log(num1, num2);
    return num1 * num2;
}

console.log(mulOfTwoNmbers()); // NaN
console.log(mulOfTwoNmbers(10, 20)); // 200
