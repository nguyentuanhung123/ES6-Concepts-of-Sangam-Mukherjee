const id = 1;
const productName = "Product Apple Watch";
const rating = 5;

const product = {
    id: id,
    name: productName,
    rating: rating  
}

console.log(product); // { id: 1, name: 'Product Apple Watch', rating: 5 }

const product2 = {
    description: 'Product 2 description',
    id,
    productName,
    rating
}

const getProductTwoDescription = product2.description;

console.log(getProductTwoDescription); // Product 2 description

const { description } = product2;

console.log(description); // Product 2 description

