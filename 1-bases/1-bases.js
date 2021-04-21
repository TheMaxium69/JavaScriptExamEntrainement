"use strict";

let tableau = [
    'test',
    42,
    0.0
];

tableau.push('second test');

console.log(tableau);

console.log(tableau.indexOf('test'));

function multiply(x, y) {
    if (isNaN(x) || isNaN(y)) {
        return 0;
    }

    return x * y;
}

console.log(multiply(2, 3));

function affine(x, y) {
    if (isNaN(x) || isNaN(y)) {
        return 0;
    }

    if (x > 8) {
        return (4 * x) + (3 * y) + 6;
    } else if (y <= 4) {
        return (3 * x) - (2 * y) + 12
    }

    return (2 * x) + (2 * y) + 2;
}

console.log(affine(9, 4)); // Résultat attendu 54
console.log(affine(7, 4)); // Résultat attendu 25
console.log(affine(7, 5)); // Résultat attendu 26

