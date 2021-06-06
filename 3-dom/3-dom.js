
let titleFirst = document.querySelector('article:first-of-type h2');
titleFirst.innerText = 'Un titre remplacé avec VanillaJS';

let titleSecond = $('article:first-of-type h2');
titleSecond.text(titleSecond.text() + ' et complété avec JQuery');
