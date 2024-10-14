const name = "palvi"
const repoCount = 10

// console.log(name + repoCount + " Value"); // it's outdated syntax
// this below syntax is used:-
console.log(`Hello My name is ${name} and my repo count is ${repoCount}`);

//  *********************different types of Functions of Strings******************************

const gameName = new String('parvin-der-kaur')

console.log(gameName[8]); // checks in 8 number which Characater is placed
console.log(gameName.__proto__);
console.log(gameName.length); // returns the Length of your string
console.log(gameName.toUpperCase()); // returns the string to UpperCase
console.log(gameName.toLowerCase()); // returns the string to LowerCase
console.log(gameName.charAt(2)); 
console.log(gameName.indexOf('a')); // returns indexing of your characater


const newString = gameName.substring(0, 4)// substring function can't use negative values
console.log(newString);

const anotherString = gameName.slice(-8, 4) // slice string function
console.log(anotherString);

const newStringOne = "     palvi    "
console.log(newStringOne);
console.log(newStringOne.trim()); // Trim removes extra spaces in your string


const url = "https://parvinder.com/parvinder%20kaur" // define variable

console.log(url.replace('%20' , '-')); // '%20' replaces '-' with the help of replace string function

console.log(url.includes('sundar')); // verify any word is available in your string or not . It returns boolean values

console.log(gameName.split('-')); 

// **************************Concat string function*********************
const str1 = 'Hello';
const str2 = 'World';
console.log(str1.concat (' ' ,str2)); 
console.log(str2.concat(' ,' , str1));









