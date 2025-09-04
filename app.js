console.log("Hello world!");
// the above is simply checking your console is working as it should

//selecting an element using document.querySelector and assigning it a variable
const body = document.querySelector("body");
console.log(body); // body

//repeat
//const h1 = document.querySelector("h1");
//console.log(h1); // h1

// create new element that isn't in .html file and add it to the body with body.appendChild
const h1 = document.createElement("h1");
h1.textContent = "This is a heading!";
body.appendChild(h1); // a new h1 is added saying "This is a heading!"

//the command below modifies elements using the textContent property
//h1.textContent = "Hello  earth!"; // the h1 in the viewport has changed from "Heading" to "Hello earth!"

// create new list element as Bananas
const li = document.createElement("li");
li.textContent = "Bananas";

const ol = document.querySelector("ol");
ol.appendChild(li);

// remove an element, note this only removes one h1. this will normal delete the first h1 element in your code (or the one added via js earlier)
const h1 = document.querySelector("h1");
h1.remove(); // removes "This is a heading!" but the first h1 created remains
//  all h1s in this example can be removed but that would be using an array (too complex for now)
