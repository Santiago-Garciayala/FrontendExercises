//number
let num = 2435;
console.log("Number is " + num);
//boolean
let bool = false;
console.log("Bool is " + bool);
//string
let s = "Bogos Binted";
console.log("String is " + s);
//object?
let o = { bogos: 17 };
console.log("Object is " + o);
//array?
let a = [1, 2, 3, 4];
console.log("Array is " + a);
//looping thru array with foreach
a.forEach((val) => { console.log("Value is: " + val); });
//bigint
let big = 1234567890987654321n; //must target es2020 or later
console.log("Big int is " + big);
//generic type
let unknown = "????????????";
console.log("unknown is " + unknown + " and its type is " + typeof unknown);
