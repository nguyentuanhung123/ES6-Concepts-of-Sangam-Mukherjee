// map, filter, find, some, every, includes, indexOf, findIndex

const personsArray = [
    {
        name: 'Person 1',
        age: 30,
        country: 'USA'
    },
    {
        name: 'Person 2',
        age: 40,
        country: 'USA'
    },
    {
        name: 'Person 3',
        age: 50,
        country: 'India'
    },
    {
        name: 'Person 4',
        age: 60,
        country: 'Russia'
    }
]

let getAllNames = personsArray.map((singlePerson, index) => {
    console.log(singlePerson, index);
    return `${singlePerson.name} age is ${singlePerson.age}`
});

/**
 * { name: 'Person 1', age: 30, country: 'USA' } 0
{ name: 'Person 2', age: 40, country: 'RUSSIA' } 1
{ name: 'Person 3', age: 50, country: 'India' } 2
[ 'Person 1 age is 30', 'Person 2 age is 40', 'Person 3 age is 50' ]
 */

console.log(getAllNames); // [ 'Person 1 age is 30', 'Person 2 age is 40', 'Person 3 age is 50' ]


/**
 * Khi sử dụng find thì nếu có 2 object thỏa mãn theo yêu cầu thì sẽ trả về object đầu tiên thỏa mãn điều kiện
 */

let getPersonFromUSA = personsArray.find((singlePerson, index) => {
    return singlePerson.country === 'USA'
})

console.log(getPersonFromUSA); // { name: 'Person 1', age: 30, country: 'USA' }

/**
 * Khi sử dụng filter sẽ trả về 1 mảng các object thỏa mãn theo yêu cầu
 */

let getPersonsFromUSA = personsArray.filter((singlePerson, index) => {
    return singlePerson.country === 'USA'
})

console.log(getPersonsFromUSA); //[ { name: 'Person 1', age: 30, country: 'USA' }, { name: 'Person 2', age: 40, country: 'USA' } ]

/**
 * Khi sử dụng some nếu tìm thấy 1 object thóa mãn yêu cầu thì sẽ return với true. Nếu không thì sẽ return với false
 * Hàm some sé trả về true hoặc false
 * Chỉ cần 1 object thỏa mãn điều kiện thì hàm trả về true
 */
let checkSomeArrayMethodWithExample = personsArray.some((singlePerson) => {
    return singlePerson.age > 40 
})

console.log(checkSomeArrayMethodWithExample); // true

/**
 * Every khác với some ở chỗ dù có object thỏa mãn yêu cầu nhưng nếu có object khác không thỏa mãn yêu cầu thì sẽ return với false
 * Hàm every sé trả về true nếu tất cả các object đều thỏa mãn điều kiện để trả về true. 
 * Nếu có 1 giá trị trả về false thì hàm trả về false
 */
let checkEveryArrayMethodWithExample = personsArray.every((singlePerson) => {
    return singlePerson.age > 40 
})

console.log(checkEveryArrayMethodWithExample); // false

/**
 * Hàm includes sẽ trả về true nếu trong mảng có chứa giá trị theo yêu cầu
 * Trả về true hoặc false
 */
const fruitsArray = ['apple', 'banana', 'mango', 'orange'];

console.log(fruitsArray.includes('apple')); // true
console.log(fruitsArray.includes('kiwi')); // false

/**
 * Hàm indexOf sẽ cho ta biết index của chuỗi đang yêu cầu nằm ở vị trí nào trong mảng
 * Nếu không có giá trị theo yêu cầu sẽ trả về -1
 */
console.log(fruitsArray.indexOf('apple')); // 0
console.log(fruitsArray.indexOf('kiwi')); // -1

/**
 * Hàm findIndex sẽ trả về vị trị của object đang yêu cầu trong mảng được chỉ định
 * Nếu không tìm thấy sẽ trả về -1
 * 
 * Hàm findIndex phù hợp với 1 mảng các object còn indexOf thì chỉ phù hợp với 1 mảng các chuỗi ký tự
 * Nói cách khác: Hàm findIndex có thể làm cả việc của indexOf nhưng indexOf không thể làm việc của findIndex
 */

let getIndexOfPersonWhoIsFromRussia = personsArray.findIndex((singlePerson) => {
    return singlePerson.country === 'Russia'
})

let getIndexOfPersonWhoIsFromJapan = personsArray.findIndex((singlePerson) => {
    return singlePerson.country === 'Japan'
})

console.log(getIndexOfPersonWhoIsFromRussia); // 3
console.log(getIndexOfPersonWhoIsFromJapan); // -1




