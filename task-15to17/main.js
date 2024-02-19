"use strict";
const dinnerGuests = ["Usama", "Khalid", "Amjad"];
for (let i = 0; i < dinnerGuests.length; i++) {
    console.log(`Dear ${dinnerGuests[i]}, you are invited to dinner. Please join us for a delightful evening.`);
}
// Can not make dinner with us
const notToAttend = "Khalid";
console.log(notToAttend);
// Replace one guest
const replacementGuest = "wasi";
dinnerGuests[dinnerGuests.indexOf(notToAttend)] = replacementGuest;
console.log("--- New Invitations ---");
for (let i = 0; i < dinnerGuests.length; i++) {
    console.log(`Dear ${dinnerGuests[i]}, you are invited to dinner. Please join us for a delightful evening.`);
}
console.log("-----Good news! We found a bigger dinner table.");
// Add new guests
dinnerGuests.unshift("Ather");
dinnerGuests.splice(2, 0, "Umair");
dinnerGuests.push("Noman");
// Print invitations for the new guests
console.log("--- Additional Invitations ---");
for (let i = 0; i < dinnerGuests.length; i++) {
    console.log(`Dear ${dinnerGuests[i]}, you are invited to dinner. Please join us for a delightful evening.`);
}
console.log("Unfortunately, the new dinner table won't arrive in time, and we can only invite two people for dinner.");
console.log(`You are inviting ${dinnerGuests.length} people to dinner.`);
for (let j = 0; j < dinnerGuests.length; j++) {
    if (dinnerGuests.length > 2) {
        const removedGuest = dinnerGuests.pop();
        console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
    }
}
for (let j = 0; j < dinnerGuests.length; j++) {
    console.log(`Dear ${dinnerGuests[j]}, you are still invited to dinner.`);
}
dinnerGuests.pop();
dinnerGuests.pop();
console.log("Final guest list:", dinnerGuests);
console.log(`You are inviting ${dinnerGuests.length} people to dinner.`);
