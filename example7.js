// function getInfo(a, b, c, d, e) {
 
//     console.log(a, b, c, d, e); // 1 2 3 4 5
    
//     return 'Nguyễn Tuấn Hưng'
// }

function getInfo(a, b, ...c) {
 
    console.log(a, b, c); // 1 2 [ 3, 4, 5 ]
    
    return 'Nguyễn Tuấn Hưng'
}

console.log(getInfo(1, 2, 3, 4, 5)); // Nguyễn Tuấn Hưng
