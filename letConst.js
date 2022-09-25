//console.log(b); // output undefined
//console.log(a); // refrence error can not access before initialization
// var let and const all are hoisted but there is no temporal dead zone for var

// let and const are in temporal dead zone before it value is assigned
let a = 10;
const c = 100; // let and const are block scoped
var b = 100; // var is function scoped

if (true) {
  var varVariable = "This is true";
}

console.log(varVariable);

if (true) {
  let letVariable = "This is true";
}

// console.log(letVariable); //unCaught ReferenceError letVariable is not defined since it is block scoped only can be accessed inside the block
