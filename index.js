//a(); // it works
//b(); // thorws error coz its just a variable till it is hitting the line of declaration there only it comes to know as function

//Function Statement
function a() {
  console.log("a called");
}

// Function Expression
var b = function () {
  console.log("b called");
};

// Function Declaration
//Function statement and function delaration all are same

// Anonymous Function
//anonymous functions are used when functions are used as values

// Named Function Expression
var c = function xyz() {
  console.log(
    "function expression with a named function is named function expression "
  );
  console.log(xyz);
};
//xyz() calling the above function like this throws error
// you can call the function xyz inside the same function

c(); // this way xyz function can be executed

// Difference between Parameters and Arguments
//function name(param1,param2){
//}
// name(arg1,arg2)

//First Class Functions
// Ability of assinging a function to a variable  and passing function as argument to another function and function returned from function
//passing function inide a function and returning function from a function

// Arrow Functions
