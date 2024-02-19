"use strict";
const personName = "usAma saJid";
console.log("Lowercase:", personName.toLowerCase());
console.log("Uppercase:", personName.toUpperCase());
let splitPersonName = personName.split(" ");
console.log(splitPersonName);
for (let i = 0; i < splitPersonName.length; i++) {
    const titlecase = splitPersonName[i].slice(0, 1).toUpperCase();
    const Lowercase = splitPersonName[i].slice(1).toLowerCase();
    console.log(titlecase + Lowercase);
}
