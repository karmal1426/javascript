// Variables in js
// variable declaration 
let firstName;
var age;



//assigned variable

firstName = 'prosper';
age= 12;


//declaration and assigning a variable at once

let lastName = 'Omotayo';
let gender = 'male';
const pi = 3.142;


//data type in JS

let isMarried = false
let isTall = true

let tpainBrain = null;

let tayoDetails = ['Omotayo', 'Alogba', 'Male', false, 40, ['blessing', 'taiwo', 'Kehinde']]


let justinDetails = {
    firstName: 'Justin',
    lastName: 'Ike',
    age: 14,
    gender: 'Male',
    sibling: ['Alvin', 'Tyla', 'Jhus']

}


console.log(tayoDetails[0])
console.log(tayoDetails[5][2])



// access data in an object

console.log(justinDetails.lastName)
console.log(justinDetails.gender)
console.log(justinDetails.age)


// arithmetic Operators

let num1 = 5;
let num2 = 10;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 / num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);
console.log(num1 ** num2);

//post increment
console.log(num1++);
console.log(num1);

//pre increment
console.log(++num2);

let num3 =7;

console.log(num3 += 5)



let personAge = 18;
let nationality = 'Nigerian';

nationality = 'Mexican';
let accountBalance = null; 
bankStatement;

// if(personAge >= 18 && nationality == 'Nigerian') alert('You can vote in the next election')
// if(personAge || 18 && nationality == 'Nigerian') alert('You can vote in the next election')


console.log(typeof nationality)
console.log(typeof accountBalance)
console.log(typeof bankStatement)



if (personAge || 18 && nationality == 'Nigerian') alert(`You are ${nationality}`)


