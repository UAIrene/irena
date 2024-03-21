let globalVar = "I am a global variable";

function myFunc() {
  console.log(globalVar);
}

myFunc();

console.log(globalVar);




function myFunc() {
  let localVar = "I am a local variable";
  console.log(localVar);
}

myFunc();

console.log(localVar);