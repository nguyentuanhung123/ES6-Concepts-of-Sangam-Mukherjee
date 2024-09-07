function getName(name) {
    return name
}

let a = false
let b = true
let c = false

/**
 * Trong toán tử && chỉ cần 1 giá trị trả về false thì kết quả của toán tử sẽ trả về false
 * Nếu tất cả các giá trị đều trả về true thì sẽ lấy kết quả cuối cùng trả về true trong toán tử
 * Nếu kiểm tra lần lượt mà gặp phần tử đầu hoặc một phần tử bất kỳ khác trả về false thì các giá trị còn lại sẽ không được xét và kết quả sẽ trả về giá trị false
 * Nếu tất cả 1 giá trị đều trả về false thì kết quả sẽ trả về false
 */
console.log(a && getName('Nguyễn Tuấn Hưng')); // false
console.log(b && getName('Nguyễn Tuấn Hưng')); // Nguyễn Tuấn Hưng


/**
 * Trong toán tử || chỉ cần 1 giá trị trả về true thì kết quả của toán tử sẽ trả về true
 * Nếu tất cả các giá trị đều trả về false thì kết quả sẽ trả về false
 */
console.log(c || getName('Nguyễn Tuấn Hưng')); // Nguyễn Tuấn Hưng
