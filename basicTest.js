let firstname = 'Christian';
const birthDate = new Date(1979, 1, 1)

console.log(firstname)
console.log(birthDate);

firstname = 'John';
console.log(firstname);

let numberOfCats = 2;
console.log(numberOfCats);


function add(number1, number2) {
    return number1+number2;
}

const result = add(4, 5);
console.log(result);

// In js {} is an object
const cat1 = { 
    name: 'Monty', 
    color: 'grey', 
    gender: 'male', 
    getNameAndColor: function() {
        return this.name + ' ' + this.color
    } };
console.log(cat1);
cat1.name = 'Charlie';
cat1.address = {street: 'Triumfbuen 17', zip: '3400', city: 'Hillerød'}

console.log(cat1);



const person = {
    myFirstname: 'Christian', myLastname: 'Kirschberg'};

    // Object destructuring
const {myFirstname, myLastname} = person;
console.log(myFirstname, myLastname);


