import Person from "./Person.js";
import Book from "./Book.js";

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
const box = document.getElementById("box");


box.addEventListener("click", function() {    
    const backgroundColor = box.style.backgroundColor;

    if (backgroundColor === "red") {
        box.style.backgroundColor = "lightblue";
    } else {
        box.style.backgroundColor = "red";
    }
})

function createTodo(){
    const newTodoText = document.getElementById("newTodoText").value;
    const newLi = document.createElement("li");
    newLi.textContent = newTodoText;
    
    document.getElementById("todoList").appendChild(newLi);
}

document.getElementById("newTodoText").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        createTodo();
    }
})

document.getElementById("addTodo").addEventListener("click", function() {
  createTodo();
})


const numbers = [4, 7, 9, 1.2, 5, 7];
let sum = 0;
for (let x of numbers) {
    sum = sum + x;
    console.log("Hello from the loop");
}

console.log("The result is " + sum);

const randomArray = ['Peter', 7, 'Marianne', true, 'Helle', 8]

randomArray.forEach(x => {
    console.log(x + ' is a ' + typeof x);
    console.log(`${x} is a ${typeof x}`);
})


const books = [ { 
    title: "The Last Kingdom", 
    author: "Bernard Cornwell" 
}, {
    title: "Beside Still Waters", 
    author: "Robert Sheckley" 
}, {
    title: "The Dream of a Ridiculous Man", 
    author: "Fyodor Dostoevsky"
}]

let myVar = "Harry Potter";
const books2 = [
    new Book(myVar, "Bernard Cornwell"),
    new Book("Beside Still Waters", "Robert Sheckley"),
    new Book("The Dream of a Ridiculous Man", "Fyodor Dostoevsky"),
    new Book("The Dream of a Ridiculous Man 2", "Fyodor Dostoevsky"),
    new Book("The Dream of a Ridiculous Man 3", "Fyodor Dostoevsky")
]

let time = 8;
let greeting = "";
if (time < 10) {
    greeting = "Good morning";
} else if (time < 15) {
    greeting = "Good early day";
} else if (time < 20) {
    greeting = "Good late day";
} else {
    greeting = "I have kids, I am already asleep";
}
console.log(greeting);

const email = 'kirs@cphbusiness.dk';
const firstName = 'Christian';
const lastname = 'Kirschberg';

if (email === 'kirs@cphbusiness.dk' ||
    firstName === 'Christian2' && lastname === 'Kirschberg'
) {
    console.log('Welcome!');
}

const number = "4"
if (number === 4) {
    console.log(true)
}

const pi = 3
if (pi >= 3) {
    console.log("pi is greater than 3")
}
if (pi < 3) { 
    console.log("pi is less than 3")
}
const age = 18;
let alcohol = age >= 18;
console.log(alcohol);

myObj.myMethod(admin ? 'ACTIVE' : 'NOT ALLOWED')

const largest = (number1, number2, number3, number4) => {
    //if ()
    return number1;
}

console.log(largest(1, 2, 3, 4));

