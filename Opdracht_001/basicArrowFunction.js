
//Deel A 
const ikRockArrowFunctions = function () {
    console.log("Joe, ik rock de arrow functions!");
  };

  let ikRockArrowFunctions2 = () => console.log("Joe, ik rock de arrow functions!")

  ikRockArrowFunctions();
  ikRockArrowFunctions2();

  //Deel B
  const fivePlusSeven = function () {
    return 5 + 7
  };
  fivePlusSeven();

  let fivePlusSeven2 = () => 5+7

  fivePlusSeven2();
//Deel C

let myFunction = (a,b) => a+b
myFunction(3,5);

//Deel D
let addFive = a => a+5
addFive(3);

//Deel E
let createObject = ()=> ({greeting:"hoi"})

createObject();
