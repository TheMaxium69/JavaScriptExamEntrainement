"use strict";

// 3.1.
let h2Node = document.querySelector('article:first-of-type h2');

// console.log(h2Node);

h2Node.innerText = 'Un titre remplacé avec VanillaJS';

let h2NodeJQ = $('article:first-of-type h2');

// console.log(h2NodeJQ);

h2NodeJQ.text(h2NodeJQ.text() + ' et complété avec JQuery');

// VanillaJS
let formField = document.getElementById('username');
formField.value = "test VanillaJS";

// JQuery
let formFieldJQ = $('input#username');
formFieldJQ.val('test Jquery');

// 3.2.

// VanillaJS
let paragraphs = document.querySelectorAll('article p');
paragraphs.forEach(function(paragraph) {
    paragraph.classList.add('paragraph');
});

// JQuery
let summaries = $('article p:first-of-type');
summaries.addClass('summary');

// 3.3.
let links = document.querySelectorAll('a.more');
links.forEach(function(link) {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        console.log(event.target);
        console.log('Récupéré avec VanillaJS');
    });
});

// VanillaJS
let form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    let usernameField = document.querySelector('#username');
    console.log(usernameField.value);

    let passwordField = document.querySelector('#password');
    console.log(passwordField.value);
});

// Jquery
let formJQ = $('form');
formJQ.on('click', function(event) {
    event.preventDefault();
    let usernameField = $('form input#username');
    // let usernameField = formJQ.find('#username');
    console.log(usernameField.val());

    let passwordField = $('form input#password');
    // let passwordField = formJQ.find('#password');
    console.log(passwordField.val());
});