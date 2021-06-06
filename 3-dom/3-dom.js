//
let titleFirst = document.querySelector('article:first-of-type h2');
titleFirst.innerText = 'Un titre remplacé avec VanillaJS';

let titleSecond = $('article:first-of-type h2');
titleSecond.text(titleSecond.text() + ' et complété avec JQuery');


//
let form = document.getElementById('username');
form.value = "test VanillaJS";

let formJQ = $('input#username');
formJQ.val(formJQ.val() + ' test JQuery');

//
let para = document.querySelectorAll('article p');
para.forEach(function (value){
    value.classList.add("paragraph");
});

//
let sum = $('article p:first-of-type');
sum.addClass('summary');

//

