const country = 'Romania';
const continent = 'Europa';
let population = 18;
// console.log(country);
// console.log(continent);
// console.log(population);




// let myName = 'Numele meu este Petea';
// let age = 33;
// console.log(myName);
// console.log(age);

// let PI = 3.14;
// let Person = 'person';

let javaScriptIsFun = true;
// console.log(javaScriptIsFun);
// javaScriptIsFun = false;
// console.log(javaScriptIsFun);

// console.log(typeof javaScriptIsFun);
// javaScriptIsFun = 23;
// console.log(typeof javaScriptIsFun);
// javaScriptIsFun = '23';
// console.log(typeof javaScriptIsFun);


//// tipuri de date
// let year;
// console.log(year);
// console.log(typeof undefined);

// year = 1989;
// console.log(typeof year);

// console.log(typeof null);

// let island = false;
const language = 'romana';
// console.log(typeof country);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);


//// let, const, var
// let age = 30;
// age = 31;
// console.log(age);

// const birthYear = 1991;
// console.log(birthYear);

// var myAge = 20;
// myAge = 22;
// console.log(myAge);

// let myAge2 = 30;
// console.log(myAge2);

// language = 'portuguese';


//// operatorii de baza
let now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2021;

// // console.log(ageJonas);
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3); // 2 ** 3 = 2 la puterea a 3 a. 2 * 2 * 2 = 8.

// const firstName = 'Ion';
// const lastName = 'Ciobanu';
// console.log(firstName);
// console.log(lastName);
// console.log(firstName + lastName + firstName + firstName + lastName); // + reprezinta concatenare - impreunare = IonCiobanuIonIonCiobanu
// console.log(firstName + " " + lastName); //Ion Ciobanu

// //Assigment operators
// let x = 10 + 5; // 15
// x+= 10; // x = x + 10 // 25
// console.log(x); //25
// x -= 5; // x = x - 5 // 20
// console.log(x); // 20
// x *= 5; // x = x * 5 // 100
// console.log(x); // 100

// x++ // x = x + 1
// x--;
// x--; 
// console.log(x); // 99

// //Comparison operators
// console.log(10 > 8); //false
// console.log(10 < 8); // true
// console.log(ageJonas > ageSarah); // true
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;

// console.log(isFullAge); // false // 16

// console.log(now - 1991 > now - 2021); // true // 

// console.log(population / 2);
// population++;
// console.log(population);
// console.log(population > 6);
// console.log(population < 33);
// const description1 = country + ' is in ' + continent + ' and it`s ' + population + ' milion people speaks ' + language;
// console.log(description1);


///// Precedenta operatorilor
let suma = ageJonas - ageSarah;
console.log(suma);
console.log(now - 1991 > now - 2021);

let x, y;
// x = y = undefined;

// x = y = 25 - 10 -5;
// // x = y = undefined y = 10;
// // undefined 10;

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);


///// CHALLENGE #1

// Mark și John încearcă să-și compare IMC (indicele de masă corporală), l-au calculat folosind formula:
// IMC = masa / inaltime ** 2 = masa / (inaltime * inaltime) (masa in kg și înălțimea în metri).
// Sarcinile tale:
// 1. Stocați masa și înălțimea lui Mark și John în variabile
// 2. Calculați ambele IMC folosind formula (le puteți chiar implementa pe ambele versiuni)
// 3. Creați o variabilă booleană „markHigherBMI” care să conțină informații despre faptul dacă Mark are un IMC mai mare decât John.
// Date de testare:

// § Date 1: Mark cântărește 78 kg și are 1,69 m înălțime.  John cântărește 92 kg și are 1,95
// m înaltime.
// § Data 2: Mark cântărește 95 kg și are 1,88 m înălțime. John cântărește 85 kg și are 1,76
// m înaltime.

// Data 1

// const masaMark = 78;
// const masaJohn = 92;

// const inaltimeMark = 1.69;
// const inaltimeJohn = 1.95;

// // const BMIMark = masaMark / inaltimeMark ** 2;
// // const BMIJohn = masaJohn / inaltimeJohn ** 2;
// const BMIMark = masaMark / (inaltimeMark ** 2);
// const BMIJohn = masaJohn / (inaltimeJohn ** 2);

// console.log(BMIMark, BMIJohn);

// const markHigherBMI = BMIMark > BMIJohn;
// console.log(markHigherBMI); // true

// Data 2

// let masaMark = 95;
// let masaJohn = 85;

// let inaltimeMark = 1.88;
// let inaltimeJohn = 1.76;

// // let BMIMark = masaMark / inaltimeMark ** 2;
// // let BMIJohn = masaJohn / inaltimeJohn ** 2;
// const BMIMark = masaMark / (inaltimeMark ** 2);
// const BMIJohn = masaJohn / (inaltimeJohn ** 2);

// console.log(BMIMark, BMIJohn);

// let markHigherBMI = BMIMark > BMIJohn;
// console.log(markHigherBMI); // false


//// Stringuri si sabloane literale

// const numelePersoanei = "Ion";
// const job = "profesor";
// const anulNasterii = 1991;
// const currentYear = 2037;

// // const stringNou = "Eu sunt " + numelePersoanei + ", un " + job + " care are " + (currentYear - anulNasterii) + " ani."
// // console.log(stringNou);

// const stringMaiNou = `Eu sunt ${numelePersoanei}, un ${job} care are ${currentYear - anulNasterii} ani.`;
// console.log(stringMaiNou);

// // console.log("Asta este \n\
// // un string \n\
// // in mai multe randuri");

// console.log(`Asta este
// un string
// in mai multe randuri`);

// console.log("Cuvant." + " " + job);
// console.log(`Cuvant. ${job}`);

// EXERCITIU
// const description1 = `${country} is in ${continent} and its ${population} milion people speaks ${language}`;
// console.log(description1);



//// Luarea deciziilor. IF - ELSE

// const age = 16;

// if(age >= 18){
//     console.log("Esti destul de in varsta pentru a conduce o masina !🚗");
// } else {
//     console.log(`Nu ai varsta necesara! Trebuie sa mai cresti ${18 -age} ani.`);
// }

// const birthYear = 1991;

// let century;
// if (birthYear <= 2000){
//     century = 20;
// } else {
//     century = 21;
// }

// console.log(`Ai fost nascut in secolul ${century}.`);

// EXERCITIU
// if(population > 33){
//     console.log(`Populatia din ${country} este peste medie.`);
// } else {
//     console.log(`Populatia din ${country} este cu ${33 - population} milioane sub medie.`);
// }