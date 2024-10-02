// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 <= 1);
// console.log(2 == 1);
// console.log(2 != 1);

 console.log("2" > 1);
console.log("02" > 1);// comapare only same datatypes values 

// ------------------- this type of comparsion always creates confusion, so avoid this ----------------

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);// in this operator converts the null into zero, so 0 equals to 0 , the result is true


console.log(undefined == 0);// undefined returns false
console.log(undefined > 0);
console.log(undefined < 0);

// === strict check
console.log("2" === 2);// checks both the data type and also conversion the value 