"use strict"

// --------------------------------------------------------------------------------------------------
// SPRINT-2 1.1 ARROW FUNCTIONS
// --------------------------------------------------------------------------------------------------

// ex 1
function add(num1, num2) {
    num1 = 1;
    num2 = 3;
    return console.log(`add function -> result = ${num1 + num2}`);
}
add(2, 50);

// ex 2
const randomNumber = () => {
    let randomNum = (Math.random() * 100);
    console.log(`random number is -> ${randomNum.toFixed(2)}`)
};
randomNumber();

// ex 3
class Person {
    constructor (name) {
        this._name = name;
    }
    get name() { return this._name }

    greet = () => { console.log(`Hi, ${this.name}!`) }
}

function sayingHi() {
    const laia = new Person ("Laia");
    laia.greet();
}

sayingHi();

// ex4
function printNumbers() {
    const numsArray = [5, 6, 7, 3, 5, 34, 678];
    let num;
    let result;

    for (let i = 0 ; i < numsArray.length ; i++) {
        num = numsArray[i];
        const print = () => {
            result = console.log(`printing... ${num}`);
        }
        print();

    }
    return result;
}
printNumbers();

// ex5
setTimeout( () => { console.log(`Delayed message delivered...`) }, 3000);

// --------------------------------------------------------------------------------------------------
// SPRINT-2 1.2
// --------------------------------------------------------------------------------------------------

//ex 1
function canDrive(age) { return age >= 18 ? console.log(`${age} years -> can drive`) : console.log(`${age} years -> can not drive`); };
canDrive(20);
canDrive(3);


//ex2
const compareNums = (num1, num2) => {
    num1 > num2 ?
    console.log(`comparing ${num1} and ${num2} -> ${num1} is higher`) :
    console.log(`comparing ${num1} and ${num2} -> ${num2} is higher`)
}
compareNums(3, 67);


// ex3
const verifyTypeOfNum = (num) => {
    let result = "";
    let isNegative = `num is negative`;
    let isZero = `num is zero`;
    let isPositive = `num is positive`;

    num < 0 ? result = isNegative :
    num === 0 ? result = isZero :
    result = isPositive;

    console.log(`${num} type of number -> ${result}`);
}

verifyTypeOfNum(0);
verifyTypeOfNum(3);
verifyTypeOfNum(-5);

function findHigherNum(a, b, c) {
    let highestNum = 0;
        
    a >= b && a >= c ? highestNum = a :
    b >= a && b >= c ? highestNum = b :
    highestNum = c;

    console.log(`highestNum = ${highestNum}`);
}
findHigherNum(4, -20, 8);


// ex4
function evenOrOdd() {
    const numsArray = [23, 678, 43, 0, 6, 2, 3.5, 900];
    let num;

    for (let i = 0 ; i < numsArray.length ; i++) {
        num = numsArray[i];
        num === 0 ? console.log(`${num} is zero`) :
        num % 2 === 0 ? console.log(`${num} is even`) :
        console.log(`${num} is odd`) ;
    }
}
evenOrOdd();


// --------------------------------------------------------------------------------------------------
// SPRINT-2 1.3 CALLBACKS
// --------------------------------------------------------------------------------------------------

// LVL 1

// ex 1
function processFun(num, callbackFun) {
    callbackFun(num);
}

function sumNumbers(a, b) {
    return(a + b);
}

// ex 2
function callbackulator(num1, num2, sumNumbers) {
    console.log(sumNumbers(num1, num2));
}

callbackulator(10, 4, sumNumbers);


// LVL 2


// ex 3
function greet(name) {
    console.log(`Hello, ${name}!`);
}

function awaitAndGreet(name, greet) {
    setTimeout(greet(name), 2000);
}

awaitAndGreet(`Gabs`, greet);

// LVL 3

// ex 5
function upperCaseConversor(string) {
    console.log(string.toUpperCase());
}

function processString(string, upperCaseConversor) {
    upperCaseConversor(string);
}

processString(`holi caracoli`, upperCaseConversor);

// --------------------------------------------------------------------------------------------------
// SPRINT-2 1.4 REST & SPREAD OPERATORS
// --------------------------------------------------------------------------------------------------

// LVL 1

// ex 1
const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8];
const arrayMix = [...arr1, ...arr2];
console.log(`mix de arrays con spread: ${arrayMix}`);


// ex 2
function sumNumbers(...nums) {
    let sum = nums.reduce((totalNums, num) => totalNums + num, 0);
    return sum;
}

console.log(`Rest y reduce calcula: ${sumNumbers(1, 22, 2)}`);

// LVL 2

// ex 3
function changeProperty() {

    const obj1 = {
    name: "Peter Parker",
    age: 29,
    language: "english"
};

    const obj2 = {...obj1, name: "esmeralda dorinda"};

    console.table(obj1);
    console.table(obj2);
    console.table([obj1, obj2]);
}

changeProperty();

// ex 4
function destructuring() {

    const arr = [1, "hello", 3, 99];
    const [num, string, ...restOfArr] = arr;

    console.log(`Arr: ${arr} // This is num -> ${num}, string -> ${string}
        and this is the rest of the array... ${restOfArr}`);
}

destructuring();

// LVL 3

// ex 5
function sumAndSpread(a, b, c) {
    console.log(a + b + c);
}

const arrOfThree = [22, 23, 24];
sumAndSpread(...arrOfThree);


// ex 6
function objectMerging() {

    const obj1 = {
        name: "arroz a la cubana",
        country: "cuba",
        type: "vegetarian"
    }

    const obj2 = {
        mainIngredient: "rice",
        cost: "cheap",
        rating: "5"
    }

    const arrozALaCubana = {...obj1, ...obj2};
    console.table(arrozALaCubana);
}

objectMerging();

// --------------------------------------------------------------------------------------------------
// SPRINT-2 1.5 ARRAY TRANSFORMATIONS
// --------------------------------------------------------------------------------------------------

// LVL 1

// ex 1
function squaredNumElementsOfArray() {

    let squaredNum = 0;
    const arr = [1, 2, 3, 4];
    const newArr = [];

    arr.forEach((element, i) => {
        element = arr[i];
        squaredNum = element * element;
        newArr.push(squaredNum);
    })
    console.log(newArr);
}

squaredNumElementsOfArray();


// ex 2
function onlyEvenNumbersInArray() {
    const arr = [1, 2, 3, 4];
    const newArr = [];

    for (let i = 0 ; i < arr.length ; i++) {
        if (arr[i] % 2 === 0) {
            newArr.push(arr[i]);
        }
    }
    console.log(newArr);
}

onlyEvenNumbersInArray();


// ex 3
function toFindNumsHigherThanTen() {
    const arr = [1, 10, 8, 11];
    let higherThanTen = arr.find((num =>  num > 10 ));
    console.log(higherThanTen);
}

toFindNumsHigherThanTen();


// ex 4
function sumOfNumbersOfArray() {
    const arr = [13, 7, 8, 21];
    let totalSum = arr.reduce((total, num) => total + num);
    console.log(totalSum);
}

sumOfNumbersOfArray();


// LVL 2

// ex 5
const arr = [1, 3, 7, 10, 15, 17, 11, 5, 8, 12, 9];

const multiPurposeCalculatorArrow = arr => ((arr.filter((num) => num >= 10)).map((num) => num * 2).reduce((total, num) => total + num));
console.log(multiPurposeCalculatorArrow(arr));


// ex 6
const arrNums = [11, 12, 13, 14];
const everyNumHigherThanTen = arrNums => { return arrNums.every((num) => num > 10) };
const someNumHigherThanTen = arrNums => { return arrNums.some((num) => num > 10) };
console.log(`result with .every() -> ${everyNumHigherThanTen(arrNums)} result with .some() -> ${someNumHigherThanTen(arrNums)}`);

// --------------------------------------------------------------------------------------------------
// SPRINT-2 1.6 ARRAY LOOPS
// --------------------------------------------------------------------------------------------------

// LVL 1

function displayNamesInConsole() {
    const namesArr = ["Anna", "Bernat", "Clara"];
    
    // ex 1
    namesArr.forEach((name => {
        console.log(name);
    }));
    
    // ex 2
    for (let name of namesArr) {
        console.log(name);
    }
}

displayNamesInConsole();


// ex 3
function funWithFilterEvenNums() {
    const numsArray1to6 = [1, 2, 3, 4, 5, 6];
    const newArrOfNums = numsArray1to6.filter((num) => { return num % 2 === 0 });
    console.log(newArrOfNums);
}

funWithFilterEvenNums();


// ex 4
function displayPropertiesOfObject() {
    const oPerson = {
    nom: "Ona",
    edat: 25,
    ciutat: "Barcelona"
    };

    for (let property in oPerson) {
        console.log(`${property}: ${oPerson[property]}`);
    }
}

displayPropertiesOfObject();


function stopWhenFindingElement() {
    const numsArr = [1, 2, 3, 4, 5, 6];

    for (let number of numsArr) {
        if (number == 5) {
            break;
        }
        console.log(number);
    }
}

stopWhenFindingElement();

// ex 6
function displayElementsAndIndex() {
    const namesArr = ["Esme", "Dafne", "Moshi"];

    for (let [i, name] of namesArr.entries()) {
        console.log(`${i + 1}: ${name}`);
    }
}

displayElementsAndIndex();


// --------------------------------------------------------------------------------------------------
// SPRINT-2 1.7 PROMISES & ASYNC/AWAIT
// --------------------------------------------------------------------------------------------------

// LVL 1

// ex 1
    const promise = new Promise((resolve => setTimeout(() =>
        (console.log(`Hello world! (two seconds late...) -- ex 1`), resolve()), 2000)));

//ex 2
function helloWorldDelayedAndThen() {
    return new Promise(resolve => setTimeout(() => resolve(`Hello World! Then... -- ex 2`), 2000));
}

helloWorldDelayedAndThen().then((result) => {
    console.log(result);
});

// ex 3
function helloWorldDelayedAndReject(input) {
        return new Promise((resolve, reject) => {
            if (input === `hello`) {
        setTimeout(() => {
            resolve(`Hello world, not rejected! -- ex 3`)}, 2000);
        } else {
            reject(`Bye world! Rejected! -- ex 3`);
        }
    });
}

helloWorldDelayedAndReject(`hello`)
.then((result) => { console.log(result) })
.catch((error) => { console.log(error) })

helloWorldDelayedAndReject(`whatever`)
.then((result) => { console.log(result) })
.catch((error) => { console.log(error) })


// ex 4
async function helloWorldDelayed() {
    await new Promise((resolve =>
        setTimeout(resolve, 2000)));
    console.log(`Hello world! (asyncronically...) -- ex 4`);
}

helloWorldDelayed();


// LVL 2

// ex 5
async function helloWorldDelayedTryCatch() {
    try {
        const message = await new Promise((resolve, reject) => {
            setTimeout(() => resolve(`Hello world! Trying code! -- ex 5`), 2000);
    });
        console.log(message);
    } catch (error) {
        console.error(`Error 404 world not found -- ex 5`);
    }
}

helloWorldDelayedTryCatch();


// ex 6
async function twoPromisesAtOnce() {
    try {
        const newPromise1 = new Promise ((resolve, reject) => {
            setTimeout(() => resolve(`First promise -- ex 6`), 2000);
        });
    
        const newPromise2 = new Promise ((resolve, reject) => {
            setTimeout(() => resolve(`Second promise -- ex 6`), 3000);
        });

        const results = await Promise.all([newPromise1, newPromise2]);
        console.log(results);
    } catch (error) {
        console.error(`Promises failed -- ex 6`);
    }
        
}

twoPromisesAtOnce();