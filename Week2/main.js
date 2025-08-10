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

