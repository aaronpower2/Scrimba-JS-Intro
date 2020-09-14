/* Make a unordered list of fruit on the HTML page */

let fruits = ["banana", "orange", "apple", "kiwi", "pear", "peach"];


function fruitList() {
    for (let i = 0; i < fruits.length; i++) {
        let node = document.createElement('li');
        let fruitType = document.createTextNode(fruits[i]);
        node.appendChild(fruitType);
        document.body.appendChild(node);
    }
    return
}

/* Read an array, and push every other item into a new array */

let otherFruit = [];

function everyOtherFruit() {

    let line = document.createElement('hr');
    document.body.appendChild(line);

    for (let i = 0; i < fruits.length; i++) {

        let node = document.createElement('li');

        if (i % 2 === 0) {
            otherFruit.push(fruits[i]);
            let oFr = document.createTextNode(fruits[i]);
            node.appendChild(oFr);
            document.body.appendChild(node);
        }
    }
    return
}

fruitList();
everyOtherFruit();

let peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]

for (let i=0; i < peopleArray.length; i++) {

    console.log(peopleArray[i].name);
}

let names = [];
let occupations = [];

for (let i=0; i < peopleArray.length; i++) {

    names.push(peopleArray[i].name);

    if (i % 2 === 0) {
    occupations.push(peopleArray[i].occupation);
    }
}

console.log(names);
console.log(occupations);