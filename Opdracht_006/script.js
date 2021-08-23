
//DEEL I Elementen toevoegen aan de DOM 

//1.  Maak een event-listener vast aan de buttons
// 2. Maak een functie die gecalled wordt op het moment dat er op 1 van de buttons wordt geklikt. Check dit met een console.log.
// 3. Zorg dat het click event wordt doorgegeven aan deze functie.
// 4. Zorg dat je toegang hebt tot de waarde (value) van de button waar op is geklikt in deze functie. Check dit met console.log. De uitkomst die je wilt zien in de console wanneer je klikt is: Leopard / Lion / Elephant / Rhino of Buffalo.
// 5. Creëer een nieuw list-item met JavaScript met de bovenstaande waarde (namelijk het dier waar je op hebt geklikt.
// 6. Selecteer het parent-element waar je dit nieuwe list-item aan vast wilt maken (de spotted animals list).
// 7. Maak het nieuwe list-item vast aan het parent-element.

//OPDRACHTEN 

//Click handler - onclick
function clickHandler(event){
    console.log(this.id);

//nieuwe LI aanmaken met de naam van het dier waar op geklikt wordt
let newLi = document.createElement("li");
let spotMenu = document.getElementById("spotted-animals-list");
spotMenu.appendChild(newLi);
newLi.innerHTML = this.id;
};

//Eventlistener toevoegen
const myButton = document.getElementsByClassName("big-five-button");

// For loop om alle knoppen aan te kunnen klikken
for (let i= 0; i < myButton.length; i++){
    myButton[i].addEventListener("click", clickHandler, false);
};



// DEEL 2 - element verwijderen uit de DOM 

// 1. Maak een eventlistener vast aan de button
// 2. Maak een functie vast aan de eventlistener
// 3. In de functie: selecteer de eend (het element)
// 4. selecteer ook de parent
// 5. gebruik parent.removeChild(child).
// 6. Alternatief: Verwijder het element met ChildNode.remove() 

//Click handler - onclick 
function clickRemove(event){
    console.log("button clicked");

    // Selecteren van het eerste element
    let parent = document.getElementById("spotted-animals-list");
    let child = parent.getElementsByTagName("li")[0];

    // Remove the child
    let removed = parent.removeChild(child);
};

// Variabele voor de 'remove first item' knop
const removeButton = document.getElementById("remove-first-item-button");

//Event listener
removeButton.addEventListener("click", clickRemove, false);





//DEEL 3 - meerdere elementen verwijderen uit de DOM  

// 1. Maak een eventlistener vast aan de button
// 2. Maak een functie vast aan de eventlistener
// 3. In de functie: selecteer de parent
// 4. Verwijder alle kinderen van de parent 
// 5. De simpele manier: set de innerHTML van de parent naar een empty string 
// 6.De chique manier: selecteer de parent en gebruik een loop om elk element 1 voor 1 te verwijderen met .remove() of met .removeChild()

// /Click handler - onclick 
function clickRemoveAll(event){
    console.log("button clicked");

    //Variabelen parent en child 
    let parent = document.getElementById("spotted-animals-list");
    let child = parent.getElementsByTagName("li")[0];

    // LI leegmaken
    parent.innerHTML = " ";

};

// Variabele voor de 'remove all knop'
const removeAllButton = document.getElementById("remove-all-button");

//Toevoegen event listener
removeAllButton.addEventListener("click", clickRemoveAll, false);
