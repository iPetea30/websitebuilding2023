const country = 'Romania';
const continent = 'Europa';
let population = 49;
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

let isIsland = false;
const language = 'english';
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

// Mark ??i John ??ncearc?? s??-??i compare IMC (indicele de mas?? corporal??), l-au calculat folosind formula:
// IMC = masa / inaltime ** 2 = masa / (inaltime * inaltime) (masa in kg ??i ??n??l??imea ??n metri).
// Sarcinile tale:
// 1. Stoca??i masa ??i ??n??l??imea lui Mark ??i John ??n variabile
// 2. Calcula??i ambele IMC folosind formula (le pute??i chiar implementa pe ambele versiuni)
// 3. Crea??i o variabil?? boolean?? ???markHigherBMI??? care s?? con??in?? informa??ii despre faptul dac?? Mark are un IMC mai mare dec??t John.
// Date de testare:

// ?? Date 1: Mark c??nt??re??te 78 kg ??i are 1,69 m ??n??l??ime.  John c??nt??re??te 92 kg ??i are 1,95
// m ??naltime.
// ?? Data 2: Mark c??nt??re??te 95 kg ??i are 1,88 m ??n??l??ime. John c??nt??re??te 85 kg ??i are 1,76
// m ??naltime.

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

// let massMark = 95;
// let massJohn = 85;

// let heightMark = 1.88;
// let heightJohn = 1.76;

// // let BMIMark = massMark / heightMark ** 2;
// // let BMIJohn = massJohn / heightJohn ** 2;
// const BMIMark = massMark / (heightMark ** 2);
// const BMIJohn = massJohn / (heightJohn ** 2);

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
//     console.log("Esti destul de in varsta pentru a conduce o masina !????");
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


///// CHALLENGE #2

// Folosi??i exemplul IMC / BMI din Provocarea #1 ??i codul pe care l-a??i scris deja ??i imbunatiti-l.
// Sarcinile tale:
// 1. Imprima??i o ie??ire pe consol??, spun??nd cine are IMC / BMI mai mare. Mesajul este fie ???IMC-ul lui Mark este mai mare dec??t al lui John!??? sau ???IMC-ul lui John este mai mare dec??t al lui Mark!???
// 2. Utiliza??i un literal ??ablon pentru a include valorile IMC ??n rezultate. Exemplu: ???Al lui Mark
// IMC (28,3) este mai mare dec??t cel al lui John (23,9)!"
// Sugestie: Folosi??i o declara??ie if/else

// SUCCES

// const BMIMark = 28.3;
// const BMIJohn = 23.9;

// if(BMIMark > BMIJohn){
//     console.log("IMC-ul lui Mark este mai mare decat al lui John !");
// } else {
//     conesole.log("IMC-ul lui John este mai mare decat al lui Mark !");
// }


// ?? Data 2: Mark c??nt??re??te 95 kg ??i are 1,88 m ??n??l??ime. John c??nt??re??te 85 kg ??i are 1,76
// m ??naltime.

// const masaMark = 95;
// const masaJohn = 85;

// const inaltimeMark = 1.88;
// const inaltimeJohn = 1.76;

// // const BMIMark = masaMark / inaltimeMark ** 2;
// // const BMIJohn = masaJohn / inaltimeJohn ** 2;
// const BMIMark = masaMark / (inaltimeMark ** 2);
// const BMIJohn = masaJohn / (inaltimeJohn ** 2);

// console.log(BMIMark, BMIJohn);

// const markHigherBMI = BMIMark > BMIJohn;
// console.log(markHigherBMI); // false


// if (markHigherBMI) {
//     console.log(`BMI-ul lui Mark, (${BMIMark}) este mai mare decat al lui John (${BMIJohn})!`);
// } else {
//     console.log(`BMI-ul lui John, (${BMIJohn}) este mai mare decat al lui Mark (${BMIMark})!`);
// }


//// Type Conversion and Coercion //Conversiunea si Coersiunea tipurilor de date

// Type conversion
// const inputYear = "1991";
// console.log(Number(inputYear) + 18, inputYear); // 2009

// const namePersoana = "Ion";
// console.log(Number(namePersoana)); // NaN
// console.log(typeof NaN); // number

// console.log(String(23), 23);// string 23, number 23

// // Type coersion
// console.log("Eu am " + 23 + " ani."); // string Eu am 23 ani
// console.log("23" - "10" - 3); // number 10
// console.log("23" / "2"); // number 11.5

// let n = "1" + 1; // string 11
// n -= 1; // string 11 - 1 = number 10
// console.log(n); // number 10

// let m = 2 + 3 + 4 + '5'; // string '95'
// console.log(m); // string '95'

// let k = '10' - '4' - '3' - 2 + "5"; // string '15'
// console.log(k); // string '15'

// EXERCITIU
// console.log("9" - "5"); // number 4
// console.log('19' - '13' + '17'); // string '617'
// console.log('19' - '13' + 17); // number 23
// console.log('123' < 57); // false
// console.log(5 + 6 + '4' + 9 - 4 -2); // number 1143



//// Truthy or Falsy Values //Valori Truthy sau Falsy

// Falsy
// 5 valori falsy : 0, " ", undefined, null, NaN

// console.log(Boolean(0)); // false
// console.log(Boolean(undefined)); // false
// console.log(Boolean("2341")); // true
// console.log(Boolean({})); // true

// const bani = 120;
// if (bani){ // bani = 0 => false
//     console.log("Ai ceva bani. Nu-i cheltui pe toti !");
// } else {
//     console.log("Du-te si gaseste-ti un job !");
// }

// let inaltime = 1.82;

// if(inaltime){
//     console.log("YAY! Variabila noastra este definita !");
// } else {
//     console.log("Variabila noastra nu este definita !");
// }



//// Equality operators == vs === //Operatori de egalitate == vs ====

// const age = "18";

// if (age === 18) console.log("Ai devenit un adult. (operator strict");
// if (age == 18) console.log("Ai devenit un adult. (operator liber)");

// const favourite = Number(prompt("Care este numarul tau favorit ?"));
// console.log(favourite); // 23 => string
// console.log(typeof favourite); // string '23'

// if (favourite == 23) { // true => string '23'
//     console.log("23 este un numar cool.");
// } else if (favourite == 7) {
//     console.log("7 este de asemenea un numar cool.");
// }

// if (favourite === 23) { // === => false => string'23' nu este egal cu number 23
//     console.log("23 este un numar cool.");
// } else if (favourite === 7) {
//     console.log("7 este de asemenea un numar cool.");
// } else if (favourite === 9) {
//     console.log("9 este de asemenea un numar bun.");
// } else {
//     console.log("Numarul pe care l-ai introdus nu este nici 9 nici 7 !");
// }

// if(favourite != 23) console.log("De ce nu ai ales numarul 23 ?"); // 9 != => se executa linia de cod

// EXERCITIU

// const numNeighbours = Number(prompt("How many neighbours does your country have?"));
// const numNeighbours = 10;

// if (numNeighbours === 1) {
//     console.log("Only 1 border neighbour.");
// } else if (numNeighbours > 1) {
//     console.log("More than 1 border neighbours.");
// } else {
//     console.log("No border neighbours");
// }



//// Basic Boolean Logic // logica Boolean

// Boolean operators : AND, OR, NOT
// A AND B => true only if both or all variables are true. False if one variable is false.
// A OR B => true if one or all variables are true. False only if all variables are false.
// NOT A, NOT B => if one variable A / B is true, than NOT A / NOT B changes to false.



//// Logical Operators // Operatori Logici

// const hasDriversLicense = true; // A
// const hasGoodVision = true; // B

// console.log(hasDriversLicense && hasGoodVision); // AND Logical Operator => false
// console.log(hasDriversLicense || hasGoodVision); // OR Logical Operator => true
// console.log(!hasDriversLicense); // NOT Logical Operator => false

// const shouldDrive = hasDriversLicense && hasGoodVision;

// if (shouldDrive) {
//     console.log("Sara ar trebui sa fie la volan.");
// } else {
//     console.log("Sara nu ar trebui sa conduca masina !");
// } // False => true && (AND) false => FALSE

// const isTired = true; // C
// if (hasDriversLicense && hasGoodVision && !isTired) { // true AND true AND false => false
//     console.log("Sara ar trebui sa fie la volan.");
// } else {
//     console.log("Sara nu ar trebui sa conduca masina !");
// } 


// EXERCITIU
// 1. Comenta??i codul anterior, astfel ??nc??t promptul s?? nu ne stea ??n cale
// 2. S?? presupunem c?? Sarah caut?? o ??ar?? nou?? ??n care s?? tr??iasc??. Ea vrea s?? tr??iasc?? ??ntr-o
// ??ar?? care vorbe??te engleza, are mai pu??in de 50 de milioane de locuitori ??i nu este o
// insul??.
// 3. Scrie??i o declara??ie if pentru a o ajuta pe Sarah s?? descopere dac?? ??ara dvs. este potrivit?? pentru ea.
// Va trebui s?? scrie??i o condi??ie care s?? ??in?? cont de toate criteriile lui Sarah. Lua??i
// timpul necesar ??i verifica??i o parte a solu??iei dac?? este necesar.
// 4. Dac?? ??ara ta este potrivit??, ??nregistreaz?? un ??ir ca acesta: ???Ar trebui s?? locuie??ti ??n Portugalia :)???. Dac??
// nu, ??nregistra??i ???Portugalia nu ??ndepline??te criteriile dvs. :('
// 5. Probabil c?? ??ara ta nu ??ndepline??te toate criteriile. Deci, ??ntoarce-te ??i temporar
// modific?? unele variabile pentru a face condi??ia adev??rat?? (cu excep??ia cazului ??n care locui??i ??n
// Canada :D)

// if (language === "english" && population < 50 && !isIsland) {
//     console.log(`You should live in ${country} :)`); // You should live in Romania :)
// } else {
//     console.log(`${country} does not fulfill your criteria.`);
// }



//// CHALLENGE #3
// Exist?? dou?? echipe de gimnastic??, Delfinii ??i Koalas. Ei concureaz?? ??mpotriva fiec??ruia
// de 3 ori. 
// C????tig??torul cu cel mai mare scor mediu c????tig?? un trofeu!
// Sarcinile tale:
// 1. Calcula??i scorul mediu pentru fiecare echip??, folosind datele de testare de mai jos
// 2. Compara??i scorurile medii ale echipelor pentru a determina c????tig??torul competi??iei, ??i imprima??i-l pe consol??. Nu uita??i c?? poate exista o remiz??, a??a c?? testa??i pentru asta
// de asemenea (remiz?? ??nseamn?? c?? au acela??i punctaj mediu)

// 3. Bonus 1: Include??i o cerin???? pentru un scor minim de 100. Cu aceast?? regul??, o echipa c????tig?? doar dac?? are un scor mai mare dec??t cealalt?? echip?? ??i ??n acela??i timp are un punctaj de cel pu??in 100 de puncte. 
// Sugestie: Utiliza??i un operator logic pentru a testa valoarea minim?? scor, precum ??i mai multe blocuri else-if.   

// 4. Bonus 2: Scorul minim se aplic?? ??i la o remiz??! Deci o remiz?? are loc doar c??nd
// ambele echipe au acela??i scor ??i ambele au un scor mai mare sau egal cu 100 puncte. ??n caz contrar, nicio echip?? nu c????tig?? trofeul

// Date de testare:
// ?? Date 1: Delfinii scor 96, 108 ??i 89. Koalas scor 88, 91 ??i 110

// ?? Bonus date 1: Delfinii scor 97, 112 ??i 101. Koala scor 109, 95 ??i 123

// ?? Bonus date 2: Delfinii scor 97, 112 ??i 101. Koala scor 109, 95 ??i 106


// SUCCES

// const scoreDolphins = (96 + 109 + 89) / 3;
// const scoreKoalas = (88 + 96 + 110) / 3;
// console.log(scoreDolphins, scoreKoalas); // 97.666666, 96.3333333

// if(scoreDolphins > scoreKoalas){
//     console.log("Dolphins have won the the trophy ! ????");
// } else if (scoreKoalas > scoreDolphins){
//     console.log("Koalas have won the the trophy ! ????");
// } else if (scoreDolphins === scoreKoalas){
//     console.log("It was a tie ! ????");
// }

// BONUS 1 + 2
// Include??i o cerin???? pentru un scor minim de 100. Cu aceast?? regul??, o echipa c????tig?? doar dac?? are un scor mai mare dec??t cealalt?? echip?? ??i ??n acela??i timp are un punctaj de cel pu??in 100 de puncte. 
// Sugestie: Utiliza??i un operator logic pentru a testa valoarea minim?? scor, precum ??i mai multe blocuri else-if.
// 4. Bonus 2: Scorul minim se aplic?? ??i la o remiz??! Deci o remiz?? are loc doar c??nd
// ambele echipe au acela??i scor ??i ambele au un scor mai mare sau egal cu 100 puncte. ??n caz contrar, nicio echip?? nu c????tig?? trofeul


// ?? Bonus date 1: Delfinii scor 97, 112 ??i 101. Koala scor 109, 95 ??i 123

// const scoreDolphins = (97 + 112 + 101) / 3;
// const scoreKoalas = (109 + 95 + 123) / 3;
// console.log(scoreDolphins, scoreKoalas); // 103.333333, 109

// if(scoreDolphins > scoreKoalas && scoreDolphins >= 100){
//     console.log("Dolphins have won the the trophy ! ????");
// } else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100){
//     console.log("Koalas have won the the trophy ! ????");
// } else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100){
//     console.log("It was a tie ! ????");
// } else {
//     console.log("No one won the trophy !????");
// }

//Koalas have won the the trophy ! ????

// ?? Bonus date 2: Delfinii scor 97, 112 ??i 101. Koala scor 109, 95 ??i 106

// const scoreDolphins = (97 + 112 + 101) / 3;
// const scoreKoalas = (109 + 95 + 106) / 3;
// console.log(scoreDolphins, scoreKoalas); // 103.333333, 103.333333

// if(scoreDolphins > scoreKoalas && scoreDolphins >= 100){
//     console.log("Dolphins have won the the trophy ! ????");
// } else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100){
//     console.log("Koalas have won the the trophy ! ????");
// } else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100){
//     console.log("It was a tie ! ????");
// } else {
//     console.log("No one won the trophy !????");
// }

//It was a tie ! ????
