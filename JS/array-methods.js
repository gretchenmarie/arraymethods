const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune", "pluto"]

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/

const body = document.querySelector("body");
const script = document.querySelector("script");
 const mainContent = document.createElement("div");
 body.insertBefore (mainContent, script);
 mainContent.setAttribute("id", "planets");

 const planetEl = document.getElementById("planets")

 
 let newArray = planets.map(function(str){
     let upperCase = str.charAt(0).toUpperCase();
     let restOfWord = str.slice(1);
     return upperCase  + restOfWord;
     
     
    });
console.log (newArray);

newArray.forEach(function(string){
    planetEl.innerHTML +=
    `<h2>${string}</h2>`
   });
    /*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/


/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/


// Use the reduce method to create a sentence from the words in the following array
//const words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"]
