/*let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("JONAS");
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);

//Assignment 1. 

let country = "Nigeria";
let continent = "Africa";
let population = 200;

console.log(country, continent, population);

//Data types

//Number
//String
//Boolean
//Undefined
//Null
//Symbol
//BigInt


let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 1);
// console.log(typeof 'Jonas');

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);


let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);


let age = 30;
age = 31;

const birthYear = 1991;
// birthYear  = 1990;

// const job;
var job = 'programmer';
job = "teacher";

lastName = "Aina";
console.log(lastName);


const now = 2027;
const ageAkin = now - 2003;
const ageNia = now - 2005;
console.log(ageAkin, ageNia);

console.log(ageAkin * 2, ageNia / 10, 2 ** 3) ;
// 2 **3 means 2 to the power of 3 = 2 * 2 * 2;

const firstName = 'Akinolu';
const lastName = 'Aina';
console.log(firstName + " " + lastName);

//Assignment Operators
let x = 10 + 5;
x += 10;   //x = x + 10;
x *= 4;   //x  = x * 4;
x /= 2;  //x = x / 2;
x ++;   //x = x + 1;
x --;  //x = x -1; 
x --;
console.log(x);

//Comparsion Operators
console.log(ageAkin > ageNia); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageNia >= 18;

console.log(now - 1991 > now - 2018)

const now = 2027;
const ageAkin = now - 2003;
const ageNia = now - 2005;

console.log(now - 1991 > now - 2018)

console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5; //x = y = 10, x = 10;
console.log(x, y);

const averageAge = (ageAkin + ageNia) / 2;
console.log(ageAkin, ageNia, averageAge);


const massMark = 78;
const massJohn = 92;
const heightMark = 1.69;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark) ;
const BMIJohn = massJohn / (heightJohn * heightJohn) ;

const markHigherBMI = (BMIMark > BMIJohn);
console.log(BMIMark, BMIJohn, markHigherBMI);


const firstName = 'Akinolu';
const job = 'Developer';
const birthYear = 2003;
const year = 2027

const Akin = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + "!" ;
console.log(Akin);

const akinNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(akinNew);

console.log(`Just a regular string...`)

console.log ('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);


// const age = 15;

// if (age >= 18) {
//   console.log("Nia can start driving license lessons.");
// } else {
//   const yearsLeft = 18 - age;
//   console.log(
//     `Nia cannot start driving licence lessons. She has to wait another ${yearsLeft} year(s).`
//   );
// }

// const birthYear = 2013;

// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);

// if(BMIMark > BMIJohn){
//     console.log(`Mark's BMI  is higher than John's`)
// } else {
//     console.log("John's BMI is higher than Mark's")
// }

// type conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(1991), 23);

//type coercion
console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" * "2");

let n = "1" + 1;
n -= 1;
console.log(n);


// 5 falsy values: 0, '', undefined, null, NaN.

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 1;
if (money) {
  console.log("Don't spend it all");
} else {
  console.log("You should get a job.");
}

let height = 0;
if (height) {
  console.log("You are tall.");
} else {
  console.log("You are exitentialy short!");
}
*/

const age = 18;
if(age === 18) console.log('You just becne an adult! :)');

