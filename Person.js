// Javascript class
export default class Person {
    constructor(firstname, hobby) {
        this.firstname = firstname;
        this.hobby = hobby;
    }

    // Creating a method
    greet() {
        console.log('Hello, my name is ' + this.firstname
            + ' and I love ' + this.hobby
        );
    }

}