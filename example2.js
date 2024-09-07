// Template literals

let name1 = "John";
let name2 = "Doe";

console.log(name1 + " " + name2, `${name1} ${name2}`); // John Doe John Doe

// Template operator

let showRecipeOne = false;

function getRecipeOneName(recipeName) {
    return recipeName;
}

function getRecipeTwoName(recipeName) {
    return recipeName;
}

if (showRecipeOne) {
    console.log(getRecipeOneName("Pizza"));
} else {
    console.log(getRecipeTwoName("Coke"));
}

// condition ? statement 1 : statement 2

showRecipeOne 
    ? console.log(getRecipeOneName("Pizza")) 
    : console.log(getRecipeTwoName("Coke")); // trả về Coke do showRecipeOne có giá trị false

