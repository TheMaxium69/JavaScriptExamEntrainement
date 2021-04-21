"use strict";

$.ajax({
    url: "https://fakerapi.it/api/v1/images?_quantity=1",
    dataType: "json",
    success: function (response) {
        let data = response.data[0];

        $('#title').html(data.title);
        $('#desc').html(data.description);
        $('#image').attr('src', data.url);
    }
});

fetch('https://fakerapi.it/api/v1/images?_quantity=10')
    .then(function(rawData) {
        return rawData.json();
    })
    .then(function (response) {
        let images = response.data;
        let contentMultiple = document.querySelector('#content-multiple');

        for (const image of images) {
            let h1Node = document.createElement('h1');
            h1Node.innerHTML = image.title;

            let imgNode = document.createElement('img');
            imgNode.setAttribute('src', image.url);

            let descNode = document.createElement('p');
            descNode.innerHTML = image.description;

            contentMultiple.appendChild(h1Node);
            contentMultiple.appendChild(imgNode);
            contentMultiple.appendChild(descNode);
        }
    })
    .catch(function (error) {
        console.log(error);
    });