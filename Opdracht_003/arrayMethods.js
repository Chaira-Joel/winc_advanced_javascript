//Opdracht A
const words = ["nice", "awesome", "tof"]
words.push('cool');
console.log(words);

//Opdracht B - functie die het aantal elementen in een array retourneert
const fruit = ["appels", "peren", "citroenen"]
const amountOfElementsInArray = () => fruit.length
console.log(amountOfElementsInArray(['appels', 'peren', 'citroenen'])); 

//Opdracht C. - Pak het eerste element uit de array
const landen = ["Belgie", "Nederland", "Luxemburg"]
const selectBelgiumFromBenelux = () => landen[0]
console.log(selectBelgiumFromBenelux(["Belgie", "Nederland", "Luxemburg"])); 

//Opdracht D. - pak het laatste element uit de array
const dieren = ["Haas", "Cavia", "Kip", "Schildpad"]
const lastElementInArray = () => dieren[dieren.length -1]
console.log(lastElementInArray(["Haas", "Cavia", "Kip", "Schildpad"])); 


//Opdracht E. Haal het eerste element uit de array en retourneer het restant. Gebruik slice en splice
const presidents = ["Trump", "Obama", "Bush", "Clinton"] 
const impeachTrumpSlice = () => presidents.slice(1,4)
console.log(impeachTrumpSlice(presidents)); // ["Obama", "Bush", "Clinton"]

const impeachTrumpSplice = () => presidents.splice(1)
console.log(impeachTrumpSplice(presidents)); // ["Obama", "Bush", "Clinton"]




//Opdracht F. Wrtie a simple JavaScript program to join all elements of the following array into a string with spaces
const woorden = ['Winc', 'Academy', 'is', 'leuk', ';-}']

const stringsTogether = () => woorden.join(" ")
console.log(stringsTogether(['Winc', 'Academy', 'is', 'leuk', ';-}'])) 
//resultaat: "Winc Academy is leuk ;-}"

//Opdracht G. combineer 2 arrays tot 1 array 
const array1 =[1,2,3]
const array2 = [4,5,6]

const combineArrays = () => array1.concat(array2);
console.log(combineArrays());




