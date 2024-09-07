const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let getArrayFirstValue = array[0]; // Có thể dùng const trong TH này
let getArrayTwoValue = array[1]; // Có thể dùng const trong TH này

console.log(getArrayFirstValue, getArrayTwoValue); // 1 2

const [
    arrayFirstElement, 
    arraySecondElement, 
    arrayThirdElement
] = array;

console.log(
    arrayFirstElement, 
    arraySecondElement, 
    arrayThirdElement
); // 1 2 3
