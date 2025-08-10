//variable declarations
//let, const

let age;
age = 30;
age = 31; //can be modified after initializing

const num = 34; //can't be modified

//DataTypes
//String, Numbers, Boolean, null, undefined

const name = 'John';
const number = 30;
const rating = 4.5;
const isCool = true;    
const x = null;
const y = undefined;
let z;

console.log(typeof name); //shows the data type on the console

//Concatenation
console.log('My name is ' + name + ' and I am ' + age);
//Template String
const hello = `My name is ${name} and I am ${age}`;
console.log(hello);

//String methods
const s = 'Hello World!';
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0,5));
console.log(s.split(''));
const words = 'one, two, three, four';
console.log(words.split(', '));

//Arrays

const numbers = new Array(1,2,3,4,5);
console.log(numbers);
const fruits = ['apple', 'mango', 'orange', 10, true];
console.log(fruits);
console.log(fruits[1]);
fruits[5] = 'grapes';
console.log(fruits);
fruits.push('strawberry');
fruits.unshift('guava');
console.log(fruits);
fruits.pop();
console.log(fruits);
console.log(Array.isArray(fruits));
console.log(fruits.indexOf('orange'));

//Objects

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main str.',
        city: 'Boston',
        state: 'MA'
    }
}
console.log(person.firstName, person.age, person.address.street);

const { firstName, lastName, address : { city }} = person;
console.log(city);

person.email = 'john@gmail.com'
console.log(person);

//Array of Objects

const todos = [
    {
        id: 1,
        text: 'take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'dentist appointment',
        isCompleted: false
    }
];

console.log(todos[1].text);
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

//For loop

for (let i = 0; i < 10; i++) {
    console.log(`For Loop Number: ${i}`);
}
//Looping through array
for (let todo of todos) {
    console.log(todo.text);
}
//while loop

let i = 0;
while (i < 10) {
    console.log(`While Loop Number: ${i}`);
    i++;
}
//Advanced array options
//forEach
todos.forEach(function(todo) {
    console.log(todo.text)
});
//map
const todoText = todos.map(function(todo) {
    return todo.text;
});
console.log(todoText);
//filter
const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;
}).map(function(todo) {
    return todo.text;
});
console.log(todoCompleted);

//if-else

const a = 10;
if(a === 10) {
    console.log('a is 10');
} else {
    console.log('a is not 10');
}

const b = 6;
const color = b > 5 ? 'red' : 'blue';
console.log(color);

//creating and calling functions
function addNums(num1, num2) {
    console.log(num1 + num2);
}
addNums(3,4);

//Constructor function
/*function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
}

Person.prototype.getBirthYear = function() {
    return this.dob.getFullYear();
}

Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}*/

//Creating classes
class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear() {
        return this.dob.getFullYear();
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

//Instantiate objects
const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('Mary', 'Smith', '3-6-1970');
console.log(person1.dob);
console.log(person1.getBirthYear());
console.log(person2.getFullName());

