// # Primtive

// 7 types : String , Number, Boolean, Null , undefined, Symbol(identifies unique value), BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 65757463426536576869n

// Reference (Non primitive)

//Array, Objects, Functions

// arrays
const heros = ["shaktiman", "nagraj", "doga"] ;
let myObj = {
    name: "palvi",
    age:22,
}
// Functions
const myFunction = function(){
    console.log("Hello,World");
}
console.log(typeof bigNumber);
console.log(typeof outsideTemp);// if we can check the typeof null then it returns object
console.log(typeof myFunction);

// basically non primitive data types always returns functions 
// function returns called object function
