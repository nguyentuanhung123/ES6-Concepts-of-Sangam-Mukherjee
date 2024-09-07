const array2 = [2, 3, 4];
const array3 = [10, 11, 12];

console.log(...array2); // 2, 3, 4
console.log([...array2]); // [2, 3, 4]
console.log([...array2, ...array3]); // [ 2, 3, 4, 10, 11, 12 ]
console.log([999, ...array2, 90, ...array3, 10000]); // [999, 2, 3, 4, 90, 10, 11, 12, 10000]



