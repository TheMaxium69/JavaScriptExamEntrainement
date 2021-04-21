"use strict";

let shoes = [
    'Heracles air max ++',
    'Zeus de chantier',
    'Hermes ultra fast',
    'Poseidon étanches',
    'Hadès méga-dark',
];

// Boucle for
for (let i = 0; i < shoes.length; i++) {
    console.log('Element ' + i + ' : ' + shoes[i]);
}

// Boucle for...of
let i = 0;
for (const shoe of shoes) {
    console.log('Element ' + i + ' : ' + shoe);
    i++;
}

// Boucle while
let j = 0;
while (j < shoes.length) {
    console.log('Element ' + j + ' : ' + shoes[j]);
    j++;
}

// Boucle forEach
shoes.forEach(function (shoe, index) {
    console.log('Element ' + index + ' : ' + shoe);
});


// Méthode alternative, avec indexOf()
//
// let possibleValues = [0, 1, 2, 3, 4];
// let userInput = null;
//
// while (isNaN(userInput) || possibleValues.indexOf(parseInt(userInput)) < 0) {
//     userInput = prompt('Écrivez un nombre entre 0 et 4 (inclus)');
// }
// console.log(shoes[userInput]);

let userInput = -1;
while (isNaN(userInput) || userInput < 0 || userInput > 4) {
    userInput = prompt('Écrivez un nombre entre 0 et 4 (inclus)');
}
console.log(shoes[userInput]);