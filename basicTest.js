import Person from "./Person.js";

let firstname = 'Christian';
const birthDate = new Date(1979, 1, 1)

console.log(firstname)
console.log(birthDate);

firstname = 'John';
console.log(firstname);

let numberOfCats = 2;
console.log(numberOfCats);

// Creating a function
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
    firstname: 'Christian', myLastname: 'Kirschberg'};
    
    // Object destructuring
const {myFirstname, myLastname} = person;
console.log(myFirstname, myLastname);

// Creating a person object with a constructor
const person1 = new Person('Christian', 'Cats');
person1.greet();

// Javascript array
let students = ["Patrick", "Kengo", "Lavi", "Thomas", 3, true, [], undefined];
students.push("Kai");
console.log(students);
console.log(students[0]);
let students2 = students.slice(0,3)
console.log(students2);

// Adding an object to an array.
students.push({name: 'Sofia', hobby: 'Roller skating'});
console.log(students);

// Accessing an object in an array
console.log(students[6].hobby)


