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

lastName = "Aina";x 
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
//     `Sola cannot start driving licence lessons. She has to wait another ${yearsLeft} year(s).`
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

// const age = 18;
// if(age === 18) console.log('You just becne an adult! :)');

// Write a program that solves for x.
// Given the equation : 5x + 2x = 19.

// const age = 18;
// if (age === 18) console.log("You just became an adult ");

// if (age == 18) console.log("You just became an adult (loose)");

// const favourite = Number(prompt("What is your favourite number"));
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23) {
//   // '23' == 23
//   console.log("Cool! 23 is an amazing number!");
// } else if (favourite === 7) {
//   console.log("7 is also a cool number");
// } else if (favourite === 9) {
//   console.log('9 is also a cool number')
// } else {
//   console.log("Number is not 23 or 7 or 9.");
// }

// if(favourite !== 23) console.log('Why not 23?')
// const checkequality = [a, b]
// if(a = b)
//   console.log("Loose match")

// Write a function checkEquality(a, b) that:

// returns "Loose match" if a == b but not a === b,

// returns "Strict match" if both a === b,

// returns "No match" otherwise.

// Test it with:

//

// // if(hasDriverslicence && hasGoodVision){
// //   console.log('Sarah is able to drive!');
// // } else {
// //   console.log('Someone else should drive...');
// // }

// const isTired = false; // c
// console.log(hasDriverslicence || hasGoodVision || isTired);

// if(hasDriverslicence && hasGoodVision && !isTired){
//   console.log('Sarah is able to drive!');
// } else {
//   console.log('Someone else should drive...');
// }

//Challenge #3
// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;

// if (scoreDolphins > scoreKoalas) {
//   console.log("Dolphins win the trophy");
// } else if (scoreDolphins > scoreKoalas) {
//   console.log("Koalas win the trophy");
// } else if(scoreDolphins === scoreKoalas) {
//     console.log("Both win the trophy")
// };

// const day = "Thursday";

// switch (day) {
//   case "Monday": // day === 'monday;
//     console.log("Plan my course structure");
//     console.log("Go to coding meetup");
//     break;
//   case "Tuesday":
//     console.log("Prepare theory videos");
//     break;
//   case "Wednesday":
//   case "Thursday":
//     console.log("Write code examples");
//     break;
//   case "Friday":
//     console.log("Record videos");
//     break;
//   case "Saturday":
//   case "Sunday":
//     console.log('Enjoy the weekend')
//     break;
//     default:
//       console.log('Not a valid day!')
// }

// const day = "Saturday";

// if (day === "Monday") {
//   console.log("Plan my course structure");
// } else if (day === "Tuesday") {
//   console.log("Prepare theory videos");
// } else if (day === "Wednesday" || day === "Thursday") {
//   console.log("Write code examples");
// } else if (day === "Friday") {
//   console.log("Record videos");
// } else if (day === "Saturday" || day === "Sunday") {
//   console.log("Enjoy the weekend!");
// } else {
//   console.log("Not a valid day");
// }




























