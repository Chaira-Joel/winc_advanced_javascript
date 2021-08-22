const superheroes = [
    {
    "name": "Batman",
    "publisher": "DC Comics",
    "alter_ego": "Bruce Wayne",
    "first_appearance": "Detective Comics #27",
    "weight": "210"
    },
    {
    "name": "Superman",
    "publisher": "DC Comics",
    "alter_ego": "Kal-El",
    "first_appearance": "Action Comics #1",
    "weight": "220"
    },
    {
    "name": "Flash",
    "publisher": "DC Comics",
    "alter_ego": "Jay Garrick",
    "first_appearance": "Flash Comics #1",
    "weight": "195"
    },
    {
    "name": "Green Lantern",
    "publisher": "DC Comics",
    "alter_ego": "Alan Scott",
    "first_appearance": "All-American Comics #16",
    "weight": "186"
    },
    {
    "name": "Green Arrow",
    "publisher": "DC Comics",
    "alter_ego": "Oliver Queen",
    "first_appearance": "All-American Comics #16",
    "weight": "195"
    },
    {
    "name": "Wonder Woman",
    "publisher": "DC Comics",
    "alter_ego": "Princess Diana",
    "first_appearance": "The Incredible Hulk #180",
    "weight": "165"
    },
    {
    "name": "Blue Beetle",
    "publisher": "DC Comics",
    "alter_ego": "Dan Garret",
    "first_appearance": "Mystery Men Comics #1",
    "weight": "145"
    },
    {
    "name": "Spider Man",
    "publisher": "Marvel Comics",
    "alter_ego": "Peter Parker",
    "first_appearance": "Amazing Fantasy #15",
    "weight": "167"
    },
    {
    "name": "Captain America",
    "publisher": "Marvel Comics",
    "alter_ego": "Steve Rogers",
    "first_appearance": "Captain America Comics #1",
    "weight": "220"
    },
    {
    "name": "Iron Man",
    "publisher": "Marvel Comics",
    "alter_ego": "Tony Stark",
    "first_appearance": "Tales of Suspense #39",
    "weight": "250"
    },
    {
    "name": "Thor",
    "publisher": "Marvel Comics",
    "alter_ego": "Thor Odinson",
    "first_appearance": "Journey into Myster #83",
    "weight": "200"
    },
    {
    "name": "Hulk",
    "publisher": "Marvel Comics",
    "alter_ego": "Bruce Banner",
    "first_appearance": "The Incredible Hulk #1",
    "weight": "1400"
    },
    {
    "name": "Wolverine",
    "publisher": "Marvel Comics",
    "alter_ego": "James Howlett",
    "first_appearance": "The Incredible Hulk #180",
    "weight": "200"
    },
    {
    "name": "Daredevil",
    "publisher": "Marvel Comics",
    "alter_ego": "Matthew Michael Murdock",
    "first_appearance": "Daredevil #1",
    "weight": "200"
    },
    {
    "name": "Silver Surfer",
    "publisher": "Marvel Comics",
    "alter_ego": "Norrin Radd",
    "first_appearance": "The Fantastic Four #48",
    "weight": "unknown"
    }
    ];

    //Opdracht 1 - Maak een array van alle superhelden namen
// superheroes.map((superhero) => {
//     return superhero.name;
// });

    // Opdracht 2 - Maak een array van alle "lichte" superhelden (< 190 pounds)
//   superheroes.filter((superhero) => {
//       return superhero.weight < 190;
//   });

    //Opdracht 3 - Maak een array met de namen van de superhelden die 200 pounds wegen
    // superheroes.filter((superhero) => {
    // return superhero.weight > 200;
    // }).map ((superhero) => {
    //     return superhero.name;
    // });


//opdracht 4 - maak een array met alle comics waar de superhelden hun first appearances hebben gehad
// superheroes.map((superhero) => {
//     return superhero.first_appearance;
// });

//Opdracht 5 - maak een array met alle superhelden van de DC comics en daarna met de superhelden van Marvel Comics
// superheroes.filter((superhero) =>{
//     return superhero.publisher === "DC Comics";
// });

// superheroes.filter((superhero) =>{
//     return superhero.publisher === "Marvel Comics";
// });

// Opdracht 6 - Tel het gewicht van alle superhelden van DC Comics bij elkaar op. 
// const stringArrayDc = superheroes.filter((superhero) => {
//     return superhero.publisher === "DC Comics";
// }).map((superhero) => {
//     return superhero.weight;
// });
// console.log(stringArrayDc); //laat de nummers in string zien

// const numberArrayDc = stringArrayDc.map(Number);
// console.log(numberArrayDc); //de nummer array 

// const reducer = (accumulator, currentValue) => accumulator + currentValue;
// console.log(numberArrayDc.reduce(reducer, 0));

//Opdracht 7 - tel het gewicht van alle superhelden van Marvel Comics bij elkaar op

const stringArrayMc = superheroes.filter((superhero) => {
    return superhero.publisher === "Marvel Comics";
}).map((superhero) => {
    return superhero.weight;
});
console.log(stringArrayMc); //laat de nummers in string zien

stringArrayMc.pop(); //haal het gewicht weg wat onbekend is 

const numberArrayMc = stringArrayMc.map(Number);
console.log(numberArrayMc); //de nummer array 
const reducerTwo = (accumulator, currentValue) => accumulator + currentValue;
console.log(numberArrayMc.reduce(reducerTwo, 0));

