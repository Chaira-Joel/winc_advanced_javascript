
//Opdracht A - find method
const superheroes = [
    {name: "Batman", alter_ego: "Bruce Wayne"}, 
    {name: "Superman", alter_ego: "Clark Kent"}, 
    {name: "Spiderman", alter_ego: "Peter Parker"}]
    

// functie checkt bij wie de naam gelijk is aan Spiderman
function findSpiderMan (person){
    return person.name === 'Spiderman';
};

//Find Spiderman
console.log(superheroes.find(findSpiderMan));

//Opdracht B - forEach Method
const numbers = [1,2,3];
numbers.forEach(number =>
    console.log(number * 2 ));

//Opdracht C - Some method
const nummers = [1,2,1,2,1,2];

nummers.some(biggerThan10)
function biggerThan10(num) {
    return num >= 10;
}

//Opdracht D - String array - includes method
function isItalyInTheGreat7(){

const countries = ['Canada', 'France','Germany','Italy','Japan','United Kingdom','United States']
console.log(countries.includes("Italy"));
}

isItalyInTheGreat7(['Canada', 'France','Germany','Italy','Japan','United Kingdom','United States']);

//Opdracht E. - forEach Method
const nummertjes = [1, 4, 3, 6, 9, 7, 11];
function tenfold (nummer, index,arr){
    console.log(nummer * 10);
}
console.log(nummertjes.forEach(tenfold));

//Opdracht F - check alle waardes in array / every method
const isBelow100 = (huidigeWaarde) => huidigeWaarde < 100;

const arr1 = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98 ];

console.log(arr1.every(isBelow100));

//Opdracht G - reduce method
let bigSum = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234].reduce(function (accumulator, currentValue) {
  return accumulator + currentValue
}, 0)
console.log(bigSum);
  


