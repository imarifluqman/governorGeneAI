// console.log("Hello World");
// ==========task 01 =============
// const personName: string = "Muhammad Arif";
// const message: string = `Hello ${personName}, would you like to learn some Python today?`;
// console.log(message);
// ==========task 02 =============
// const personName: string = "usAma saJid";
// Print the name in lowercase
// console.log("Lowercase:", personName.toLowerCase());
// Print the name in uppercase
// console.log("Uppercase:", personName.toUpperCase());
// Print the name in titlecase
// let splitPersonName: string[] = personName.split(" ");
// console.log(splitPersonName);
// for (let index = 0; index < splitPersonName.length; index++) {
//   const titlecase = splitPersonName[index].slice(0, 1).toUpperCase();
//   const Lowercase = splitPersonName[index].slice(1).toLowerCase();
//   console.log(titlecase + Lowercase);
// }
// ==========task 03 =============
// const quote: string =
//   "A person who never made a mistake never tried anything new.";
// const author: string = "Albert Einstein";
// console.log(`${author} once said, "${quote}"`);
// ==========task 04 =============
// const famous_person: string = 'Albert Einstein';
// const quote: string = 'A person who never made a mistake never tried anything new.';
// const message: string = `${famous_person} once said, "${quote}"`;
// console.log(message);
// ==========task 05 =============
// const nameWithWhitespace: string = "\t \n   Muhammad Amjad \n\t ";
// console.log("Name with whitespace:", nameWithWhitespace);
// const strippedName: string = nameWithWhitespace.trim();
// console.log("Stripped name:", strippedName);
// ==========task 06 =============
// console.log(5 + 3);
// console.log(10 - 2);
// console.log(4 * 2);
// console.log(64 / 8);
// ==========task 07 =============
// console.log(
//   "=======================\n" + (5 + 3) + "\n======================="
// );
// console.log(
//   "=======================\n" + (10 - 2) + "\n======================="
// );
// console.log("=======================\n" + 4 * 2 + "\n=======================");
// console.log("=======================\n" + 64 / 8 + "\n=======================");
// ==========task 08 =============
// const favoriteNumber: number = 4;
// const message: string = `My favorite number is ${favoriteNumber}.`;
// console.log(message);
// ==========task 09 =============
// Author: Nelson Mandela
// Date: 2024-02-18
// Program: Famous Quote
// Description: This program prints a famous quote along with its author.
// const famousPerson: string = "Nelson Mandela";
// const quote: string =
//   "Education is the most powerful weapon which you can use to change the world.";
// const message: string = `${famousPerson} once said, "${quote}"`;
// console.log(message);
// Date: 2024-02-18
// Program: Number Eight
// Description: This program demonstrates addition, subtraction, multiplication, and division operations that result in the number 8.
// console.log(5 + 3);
// console.log(10 - 2);
// console.log(4 * 2);
// console.log(64 / 8);
// ==========task 10 =============
// const names: string[] = ["Usama", "Khalid", "Amjad", "Ather", "Noman"];
// for (let i = 0; i < names.length; i++) {
//   console.log(names[i]);
// }
// ==========task 11 =============
// const names: string[] = ["Usama", "Khalid", "Amjad", "Ather", "Noman"];
// for (let i = 0; i < names.length; i++) {
//     console.log(`Hello ${names[i]}, I hope you're having a great day!`);
// }
// ==========task 12 =============
// const transportation: string[] = ["motorcycle", "car", "bicycle", "scooter"];
// for (let i = 0; i < transportation.length; i++) {
//   console.log(`I would like to own a ${transportation[i]}.`);
// }
// ==========task 13 to 16 & 18=============
// const dinnerGuests: string[] = ["Usama", "Khalid", "Amjad"];
// for (let i = 0; i < dinnerGuests.length; i++) {
//   console.log(
//     `Dear ${dinnerGuests[i]}, you are invited to dinner. Please join us for a delightful evening.`
//   );
// }
// dinnerGuests[dinnerGuests.indexOf("Khalid")] = "Rameez";
// console.log("--- New Invitations ---");
// for (let i = 0; i < dinnerGuests.length; i++) {
//   console.log(
//     `Dear ${dinnerGuests[i]}, you are invited to dinner. Please join us for a delightful evening.`
//   );
// }
// console.log("-----Good news! We found a bigger dinner table.");
// // Add new guests
// dinnerGuests.unshift("Ather");
// dinnerGuests.splice(2, 0, "Umair");
// dinnerGuests.push("Noman");
// // Print invitations for the new guests
// console.log("--- Additional Invitations ---");
// for (let i = 0; i < dinnerGuests.length; i++) {
//   console.log(
//     `Dear ${dinnerGuests[i]}, you are invited to dinner. Please join us for a delightful evening.`
//   );
// }
// console.log(
//   "Unfortunately, the new dinner table won't arrive in time, and we can only invite two people for dinner."
// );
// if (dinnerGuests.length > 2) {
//   const removedGuest: string = dinnerGuests.pop()!;
//   console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
// }
// console.log(`Dear ${dinnerGuests[0]}, you are still invited to dinner.`);
// console.log(`Dear ${dinnerGuests[1]}, you are still invited to dinner.`);
// dinnerGuests.pop();
// dinnerGuests.pop();
// console.log("Final guest list:", dinnerGuests);
// console.log(`You are inviting ${dinnerGuests.length} people to dinner.`);
// ==========task 17 =============
// let placesToVisit: string[] = ['Paris', 'Tokyo', 'Oman', 'New York', 'Turkey'];
// console.log("Original Order:", placesToVisit);
// console.log("Alphabetical Order:", [...placesToVisit].sort());
// console.log("Original Order:", placesToVisit);
// console.log("Reverse Alphabetical Order:", [...placesToVisit].sort().reverse());
// console.log("Original Order:", placesToVisit);
// placesToVisit.reverse();
// console.log("Reversed Order:", placesToVisit);
// placesToVisit.sort();
// console.log("Sorted Alphabetically:", placesToVisit);
// placesToVisit.sort((a, b) => b.localeCompare(a));
// console.log("Sorted in Reverse Alphabetical Order:", placesToVisit);
// ==========task 19 =============
// const fruits: string[] = ["Apple", "Banana", "Orange", "Strawberry", "Mango"];
// console.log("List of Fruits:", fruits);
// ==========task 20 =============
// const car1 = {
//   brand: "Toyota",
//   model: "Corolla",
//   year: 2022,
//   color: "Silver",
// };
// const car2 = {
//   brand: "Honda",
//   model: "Civic",
//   year: 2023,
//   color: "Blue",
// };
// const car3 = {
//   brand: "Ford",
//   model: "Mustang",
//   year: 2021,
//   color: "Red",
// };
// console.log("Car 1:", car1);
// console.log("Car 2:", car2);
// console.log("Car 3:", car3);
// ==========task 21 =============
// const fruits: string[] = ["Apple", "Banana", "Orange", "Strawberry", "Mango"];
// // console.log("Third fruit in the list:", fruits[5]); // Error
// console.log("List of Fruits:", fruits);
// ==========task 22 =============
// let car: string = 'subaru';
// // Test 1
// console.log("Is car == 'subaru'? I predict True.");
// console.log(car == 'subaru');
// // Test 2
// console.log("Is car == 'honda'? I predict False.");
// console.log(car == 'honda');
// // Test 3
// console.log("Is car != 'toyota'? I predict True.");
// console.log(car != 'toyota');
// // Test 4
// console.log("Is car !== 'subaru'? I predict False.");
// console.log(car !== 'subaru');
// // Test 5
// console.log("Is car === 'subaru'? I predict True.");
// console.log(car === 'subaru');
// // Test 6
// console.log("Is car === 'Subaru'? I predict False.");
// console.log(car === 'Subaru');
// // Test 7
// console.log("Is car.length < 10? I predict True.");
// console.log(car.length < 10);
// // Test 8
// console.log("Is car.startsWith('su')? I predict True.");
// console.log(car.startsWith('su'));
// // Test 9
// console.log("Is car.includes('aru')? I predict True.");
// console.log(car.includes('aru'));
// // Test 10
// console.log("Is car.indexOf('a') > -1? I predict True.");
// console.log(car.indexOf('a') > -1);
// ==========task 23 =============
// let name: string = 'John';
// let age: number = 30;
// let numbers: number[] = [1, 2, 3, 4, 5];
// // Tests for equality and inequality with strings
// console.log("Is name == 'John'? I predict True.");
// console.log(name == 'John');
// console.log("Is name != 'Jane'? I predict True.");
// console.log(name != 'Jane');
// // Tests using the lower case function
// console.log("Is name.toLowerCase() == 'john'? I predict True.");
// console.log(name.toLowerCase() == 'john');
// // Numerical tests
// console.log("Is age > 25? I predict True.");
// console.log(age > 25);
// console.log("Is age <= 30? I predict True.");
// console.log(age <= 30);
// // Tests using "and" and "or" operators
// console.log("Is name == 'John' and age == 30? I predict True.");
// console.log(name == 'John' && age == 30);
// console.log("Is name == 'John' or age == 25? I predict True.");
// console.log(name == 'John' || age == 25);
// // Test whether an item is in an array
// console.log("Is 3 in numbers? I predict True.");
// console.log(numbers.includes(3));
// // Test whether an item is not in an array
// console.log("Is 6 not in numbers? I predict True.");
// console.log(!numbers.includes(6));
// ==========task 24 to 27 =============
// let alienColor: string = "green";
// if (alienColor === "green") {
//   console.log("Congratulations! You just earned 5 points.");
// }
// if (alienColor === "red") {
//   console.log("Congratulations! You just earned 5 points.");
// }
// if (alienColor === "green") {
//   console.log(
//     "Congratulations! You just earned 5 points for shooting the alien."
//   );
// } else {
//   console.log(
//     "Congratulations! You just earned 10 points for shooting the alien."
//   );
// }
// if (alienColor === "green") {
//   console.log(
//     "Congratulations! You just earned 5 points for shooting the alien."
//   );
// } else {
//   console.log(
//     "Congratulations! You just earned 10 points for shooting the alien."
//   );
// }
// if (alienColor === 'green') {
//     console.log("Congratulations! You just earned 5 points.");
// } else if (alienColor === 'yellow') {
//     console.log("Congratulations! You just earned 10 points.");
// } else if (alienColor === 'red') {
//     console.log("Congratulations! You just earned 15 points.");
// }
// if (alienColor === 'green') {
//     console.log("Congratulations! You just earned 5 points.");
// } else if (alienColor === 'yellow') {
//     console.log("Congratulations! You just earned 10 points.");
// } else if (alienColor === 'red') {
//     console.log("Congratulations! You just earned 15 points.");
// }
// if (alienColor === 'green') {
//     console.log("Congratulations! You just earned 5 points.");
// } else if (alienColor === 'yellow') {
//     console.log("Congratulations! You just earned 10 points.");
// } else if (alienColor === 'red') {
//     console.log("Congratulations! You just earned 15 points.");
// }
// ==========task 28 =============
// let age: number = 30;
// if (age < 2) {
//     console.log("The person is a baby.");
// } else if (age >= 2 && age < 4) {
//     console.log("The person is a toddler.");
// } else if (age >= 4 && age < 13) {
//     console.log("The person is a kid.");
// } else if (age >= 13 && age < 20) {
//     console.log("The person is a teenager.");
// } else if (age >= 20 && age < 65) {
//     console.log("The person is an adult.");
// } else {
//     console.log("The person is an elder.");
// }
// ==========task 29 =============
// let favorite_fruits: string[] = ['banana', 'apple', 'strawberry'];
// if (favorite_fruits.includes('banana')) {
//     console.log("You really like bananas!");
// }
// if (favorite_fruits.includes('apple')) {
//     console.log("You really like apples!");
// }
// if (favorite_fruits.includes('strawberry')) {
//     console.log("You really like strawberries!");
// }
// if (favorite_fruits.includes('orange')) {
//     console.log("You really like oranges!");
// }
// if (favorite_fruits.includes('kiwi')) {
//     console.log("You really like kiwis!");
// }
// ==========task 30 =============
// let usernames: string[] = ["admin", "Eric", "John", "Alice", "Bob"];
// for (let username of usernames) {
//   if (username === "admin") {
//     console.log("Hello admin, would you like to see a status report?");
//   } else {
//     console.log(`Hello ${username}, thank you for logging in again.`);
//   }
// }
// ==========task 31 =============
// let usernames: string[] = [];
// if (usernames.length > 0) {
//     for (let username of usernames) {
//         if (username === 'admin') {
//             console.log("Hello admin, would you like to see a status report?");
//         } else {
//             console.log(`Hello ${username}, thank you for logging in again.`);
//         }
//     }
// } else {
//     console.log("We need to find some users!");
// }
// ==========task 32 =============
// let current_users: string[] = ['john', 'alice', 'bob', 'emma', 'charlie'];
// let new_users: string[] = ['mike', 'sarah', 'Bob', 'emma', 'john'];
// for (let new_user of new_users) {
//     if (current_users.some(user => user.toLowerCase() === new_user.toLowerCase())) {
//         console.log(`Sorry, the username '${new_user}' is already taken. Please choose a new one.`);
//     } else {
//         console.log(`Congratulations! The username '${new_user}' is available.`);
//     }
// }
// ==========task 33 =============
// let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let number of numbers) {
//   if (number === 1) {
//     console.log(`${number}st`);
//   } else if (number === 2) {
//     console.log(`${number}nd`);
//   } else if (number === 3) {
//     console.log(`${number}rd`);
//   } else {
//     console.log(`${number}th`);
//   }
// }
// ==========task 34 =============
// let favorite_pizzas: string[] = ["Pepperoni", "Margherita", "Supreme"];
// for (let pizza of favorite_pizzas) {
//   console.log(`I like ${pizza} pizza.`);
// }
// console.log("Pizza is one of my favorite foods, and I really love it!");
// ==========task 35 =============
// let animals: string[] = ['Dog', 'Cat', 'Rabbit'];
// for (let animal of animals) {
//     console.log(`A ${animal} would make a great pet.`);
// }
// console.log("Any of these animals would make a great pet!");
// ==========task 36 =============
// function make_shirt(size: string, message: string): void {
//   console.log(`Creating a ${size}-sized shirt with the message: "${message}"`);
// }
// make_shirt("Large", "I love TypeScript!");
// ==========task 37 =============
// function make_shirt(
//   size: string = "Large",
//   message: string = "I love TypeScript"
// ): void {
//   console.log(`Creating a ${size}-sized shirt with the message: "${message}"`);
// }
// make_shirt();
// make_shirt("Medium");
// make_shirt("Small", "Hello World!");
// ==========task 38 =============
// function describe_city(city: string, country: string = 'USA'): void {
//     console.log(`${city} is in ${country}.`);
// }
// describe_city('Karachi', 'Pakistan'); // Calling with a non-default country
// describe_city('New York'); // Calling with default country (USA)
// describe_city('London', 'UK'); // Calling with a non-default country
// ==========task 39 =============
// function city_country(city: string, country: string): string {
//   return `"${city}, ${country}"`;
// }
// console.log(city_country("Lahore", "Pakistan"));
// console.log(city_country("Paris", "France"));
// console.log(city_country("Tokyo", "Japan"));
// ==========task 40 =============
// function make_album(
//   artist: string,
//   title: string,
//   tracks?: number
// ): { artist: string; title: string; tracks?: number } {
//   let album: { artist: string; title: string; tracks?: number } = {
//     artist: artist,
//     title: title,
//   };
//   if (tracks !== undefined) {
//     album.tracks = tracks;
//   }
//   return album;
// }
// let album1 = make_album("Artist1", "Album1", 10);
// let album2 = make_album("Artist2", "Album2");
// let album3 = make_album("Artist3", "Album3", 15);
// console.log(album1);
// console.log(album2);
// console.log(album3);
// ==========task 41 =============
// function show_magicians(magicians: string[]): void {
//   for (let magician of magicians) {
//     console.log(magician);
//   }
// }
// let magicians: string[] = [
//   "David Copperfield",
//   "Harry Houdini",
//   "Penn Jillette",
//   "Teller",
// ];
// show_magicians(magicians);
// ==========task 42 =============
// function show_magicians(magicians: string[]): void {
//   for (let magician of magicians) {
//     console.log(magician);
//   }
// }
// function make_great(magicians: string[]): string[] {
//   let great_magicians: string[] = [];
//   for (let magician of magicians) {
//     great_magicians.push(magician + " the Great");
//   }
//   return great_magicians;
// }
// let magicians: string[] = [
//   "David Copperfield",
//   "Harry Houdini",
//   "Penn Jillette",
//   "Teller",
// ];
// magicians = make_great(magicians);
// show_magicians(magicians);
// ==========task 43 =============
// function show_magicians(magicians: string[]): void {
//   for (let magician of magicians) {
//     console.log(magician);
//   }
// }
// function make_great(magicians: string[]): string[] {
//   let great_magicians: string[] = [];
//   for (let magician of magicians) {
//     great_magicians.push(magician + " the Great");
//   }
//   return great_magicians;
// }
// let magicians: string[] = [
//   "David Copperfield",
//   "Harry Houdini",
//   "Penn Jillette",
//   "Teller",
// ];
// let great_magicians: string[] = make_great([...magicians]);
// console.log("Original magicians:");
// show_magicians(magicians);
// console.log("\nGreat magicians:");
// show_magicians(great_magicians);
// ==========task 44 =============
// function make_sandwich(...items: string[]): void {
//   console.log("Making a sandwich with the following items:");
//   for (let item of items) {
//     console.log("- " + item);
//   }
//   console.log("Sandwich is ready!\n");
// }
// make_sandwich("Turkey", "Lettuce", "Tomato");
// make_sandwich("Ham", "Cheese");
// make_sandwich("Peanut Butter", "Jelly", "Banana");
// ==========task 45 =============
// Define the car_info function
function car_info(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = { manufacturer: manufacturer, model: model, options: options };
    return car;
}
// Call the function with the required information and additional name-value pairs
var my_car = car_info("Toyota", "Camry", { color: "blue" }, { year: 2022 });
// Print the object returned by the function
console.log(my_car);
