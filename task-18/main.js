"use strict";
const placesName = [
    "new york",
    "dubai",
    "pakistan",
    "united state",
    "oman",
];
// =========== its original order
console.log("original order ", placesName);
// ==============Alphabetical Order
let alphaOrder = [...placesName].sort();
console.log("Alphabetical order ", alphaOrder);
console.log("orignal order ", placesName);
let reverse = [...placesName].sort().reverse();
console.log("Alphabetical reverse order ", reverse);
console.log("orignal order ", placesName);
let reverseBack = placesName.reverse();
console.log("reverseBack order ", reverseBack);
let reverseAgain = placesName.reverse();
console.log("reverse again to original order ", placesName);
