const name = "palvi"
const repoCount = 10

// console.log(name + repoCount + " Value"); // it's outdated syntax
// this below syntax is used 
console.log(`Hello My name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('parvi-nder')

// Functions of Strings
console.log(gameName[8]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('a'));


const newString = gameName.substring(0, 4)// substring can't use negative values
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "     palvi    "
console.log(newStringOne);
console.log(newStringOne.trim()); // Trim removes extra spaces in your string









