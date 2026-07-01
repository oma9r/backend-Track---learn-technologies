let varName = "Welcome to varName";

console.log(varName);

varName = "hi, i change it!";

console.log(varName);

let intL = 15;

console.log(intL, varName);

intL = intL * 10;

varName = "after some mul";

console.log(intL, varName);

// single line comment

// test 

/*
*
* this is mul comment
*
*
*/

console.log("============================================================================");

// data types part===============================================

// string section ----------------------

const singleQuotes = 'Hello!';
console.log(singleQuotes);

const name = 'Jane';

const backticks = `Hello, ${name}`;

console.log(backticks);

const plusW = `2 + 2`;

console.log(plusW);

const plus = `${2 + 2}`; // will print 4 not 2 + 2 
console.log(plus);


// type of 

console.log(typeof name);
console.log(typeof backticks);
console.log(typeof plusW);
console.log(typeof plus);


// Numbers section -------------------------------


const wholeNumber = 5;
const decimalNumber = 0.54;

// js doesn't care about the type of number (int or double or float)!

console.log(wholeNumber);
console.log(decimalNumber);

//type of

console.log(typeof wholeNumber);  // number
console.log(typeof decimalNumber); // number


const result = wholeNumber + decimalNumber;

console.log(result);

console.log(`${decimalNumber - wholeNumber}`);

const string = "hello";
const divideNumber = 3;

const resultD = string / divideNumber;

console.log(resultD);

console.log(typeof resultD);

console.log(`the result of mul op: ${string * divideNumber}`);


console.log("===========================================");

// boolean section ---------------------------------------------



let isCool = true;

console.log('boolean type', isCool);
console.log(typeof isCool);

const isCoolString = 'true';

console.log('string type', isCoolString);
console.log(typeof isCoolString);

if (isCool) {
    console.log("this is true!!");
}
else {
    console.log("this is false!");
}

isCool = false;

if (isCool) {
    console.log("this is true!!");
}
else {
    console.log("this is false!");
}



// NULL 

// the null type has one value: null
const age = null;

console.log(age);
console.log(typeof age);

if (age) {
    console.log("this is null!!");
}
else {
    console.log("this is not null!");
}


//undefined

// is the variable that declared but not assigned yet!

let x;
console.log(x);
console.log(typeof x);


if (x) {
    console.log("this is x!!");
}
else {
    console.log("this is not x!");
}

console.log("======================================");

//Objects --------------------------------------


const name1 = 'John';
const age1 = 25;

const person = {
    name1: 'John',
    age1: 25,
}

console.log(person);
console.log(typeof person);

console.log('reach to a specific data member: ', person.name1);
console.log('reach to a specific data member with type of: ', typeof person.name1);

//Array

const arr = [1, 2, 3, 4, 5];

console.log(arr[0] + arr[1] * arr[4]);

console.log(arr);

const date = new Date();

console.log(date);


// c++ is statically typed
// js is a  dynamically typed

console.log("Comparison ======================================");


// Comparison operators => true/false

// the return value of it always boolean -> true or false just!

const a = 5;
const b = 10;

console.log("the result of a > b is: ", a >= b);


console.log("the result of a == b is: ", a == b);

console.log("the result of a != b is: ", a != b);

//strict equality


//compares values and data types
//return true if only both are the same 

console.log(`20 === "20"`, 20 === "20"); // we compare int === string

console.log(`20 === 20`, 20 === 20); // same type same value


console.log(`30 === 20`, 30 === 20); // different type same value


//Loose equality == 
//doesn't compare data types
console.log(`loose equality: `, 20 == "20");

console.log(`loose equality: `, 30 == "20"); // just we care about the value

console.log(a === b);

// the good ones: === !==          // do care about the type
// the evil twins: == !=           // don't care about the type

console.log(`'' == '0'`, '' == '0'); // false

console.log(`'0' == ''`, '0' == ''); // false

console.log(`0 == ''`, 0 == ''); // true


//strict Inequality

console.log(a !== b);



console.log("hello" === "hello");




console.log(`5 == '5'`, 5 == '5');


console.log(`5 == '5'`, 5 === '5');


console.log("Logical operators======================================");

// OR ||
//ANd &&
//NOT !

console.log(`false && true`, false && true);
console.log(`false || true`, false || true);
console.log(`!true`, !true);



console.log("if statement======================================");

const age2 = 18;

let change = 20;

if (change > age2) {
    console.log('you can enter!');
    change = change - 1;
}
else {
    console.log("sorry, we can't!");
}

if (change > age2) {
    console.log('you can enter!');
    change = change - 1;
}
else {
    console.log("sorry, we can't!");
}

if (change > age2) {
    console.log('you can enter!');
    change = change - 1;
}
else {
    console.log("sorry, we can't!");
}

if (change > age2) {
    console.log('you can enter!');
    change = change - 1;
}
else {
    console.log("sorry, we can't!");
}


console.log("while statement======================================");

let index = 0;

while (index < 10) {
    console.log(`index = `, index);
    ++index;
}

console.log("for loop statement======================================");

for (let i = 0; i < 10; i++) {
    console.log(i * i);

}



console.log("functions statement======================================");

function square(number) {
    return number * number;
}

console.log('10 * 10 = ', square(10));



//function declaration 
function name11(params) {
    //statements
}

// function expression
const name2 = function (params) {
    //statements
}

// an arrow function expression

const name3 = (params) => {
    //statements
}


function sayHi(name) {
    console.log(`hi, ${name}`);
}

sayHi("omar");

// every function in js return undefined unless determine return in the function

function add(a, b) {
    return a + b;
}

console.log(add(4, 5));


const tryS = (number) => {
    return number * number;
}

const resultTryS = tryS(5);
console.log(resultTryS);


const tryS1 = (number) => number * number;
const resultTryS1 = tryS1(10);
console.log(resultTryS1);

