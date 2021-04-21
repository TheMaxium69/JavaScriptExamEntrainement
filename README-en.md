# Javascript - Final exam

In order to work on this project, you can either:
- Create a fork of [this project on Github](https://github.com/Dreeckan/js-exam) and send it to me (by creating a Pull Request on my projet/send me a zip file)
- [Download this projet on Github](https://github.com/Dreeckan/js-exam/archive/refs/heads/main.zip) and send me a zip file when you are done

## Important information 

- The exam lasts 3 hours
- If you are late to send the file, you can lose points (-1 point if you send after 18h00, -2 points if after 20h00)

## List of exercises

1. Language's basics (3 points)
2. Conditions et boucles (3 points)
3. DOM, événement et JQuery (5 points)
4. AJAX (5 points)
5. POO (4 points)

## 1. Language's basics (3 points)

For this part, work in `1-bases/1-bases.html` and `1-bases/1-bases.js`. Don't forget to update the HTML file to get the necessary JS file.

### 1.1. Use Arrays (1 point)

- Create an array, with those values: `'test'`, `42`, `0.0` and put it in a variable
- Then, add a new value at the end of the array: `'second test'`
- Return the index `'test'` with an array's method we saw (and display this index in the console)

### 1.2. Fonctions (2 points)

- Write a `multiply` function:
  - Using 2 parameters `x` and `y`
  - If any of these parameters is not a number, return 0
  - Else, return the result of this operation ``x * y``
- Call this function, with arguments of your choices, and display its result in the console

- Write a `affine` function:
  - Using 2 parameters `x` and `y`
  - If any of these parameters is not a number, return 0
  - Else
    - If `x` is greater than 8, return the result of `4x + 3y + 6`
    - Else, if `y` is less or equal than 4, return the result of `3x - 2y + 12`
    - Else, return the result of `2x + 2y + 2`
- Call this function 3 times, with different parameters, to show every 3 cases. Display the results in the console

## 2. Conditions et boucles (3 points)

For this part, work in `2-loops/2-loops.html` and `2-loops/2-loops.js`. Don't forget to update the HTML file to get the necessary JS file.

### 2.1. Loops (1.5 points)

- Use 3 different types of loops to display the content of the array named `shoes` (already present in `loops/2-loops.js`). Display values in the console for each iteration.

### 2.2. Use `prompt()` (1.5 points)

- Ask the user (using the `prompt()` function) a number, between 0 and 4 (0 and 4 are included)
- While the user enters anything out of these values (use `isNaN()`), keep asking for a correct number.
- With `console.log()` get corresponding value in the array (`shoes`) (get the shoe with the user input as an index)

## 3. DOM, événements et JQuery (5 points)

For this part, work in `3-dom/3-dom.html` and `3-dom/3-dom.js`. Don't forget to update the HTML file to get the necessary JS file.

You need JQuery for this part, download it and add a `script` node in your HTML or add a `script` node with a CDN link.

### 3.2. Target and change content (2 points)

- Target the title of the first article (`h2` node) with VanillaJS
  - Replace its text with `Un titre remplacé avec VanillaJS`
  
- Target the same title with JQuery
  - Add this text ` et complété avec JQuery`
  
- Target the form field with an id `username` and change its value
  - With VanillaJS, replace it with `test VanillaJS`
  - With JQuery, replace it with `test Jquery`

### 3.3. Target and change classes (1 point)

- Target every articles' paragraphs (`p` node)
  - With VanillaJS, add a class `paragraph`

- Target every articles' first paragraph (first `p` node of each article)
  - With JQuery, add a class `summary`
  
### 3.4. Event listeners (2 points)

- With VanillaJS, when clicking on `.more` links: 
  - prevent the page from reloading / changing
  - Display this message in the console `Récupéré avec VanillaJS`

- Add an event listener on form submission (`submit` event) 
  - prevent the page from reloading / changing
    - With VanillaJS **and** Jquery, display the content of `username` and `password` fields in the console

## 4. AJAX (5 points)

For this part, work in `4-ajax/4-ajax.html` and `4-ajax/4-ajax.js`. Don't forget to update the HTML file to get the necessary JS file.

You may need JQuery for this part, download it and add a `script` node in your HTML or add a `script` node with a CDN link.

The HTML file already has some HTML: 
```html
<div id="content">
    <h1 id="title"></h1>
    <img src="" id="image">
    <p id="desc"></p>
</div>
```

We will [get some data from this API](https://fakerapi.it/en) and insert them into our HTML. Every data will look like this:

```json
{
    "status": "OK",
    "code": 200,
    "total": 1,
    "data": [
        {
            "title": "Consequatur et nihil nihil.",
            "description": "Consequatur optio harum accusantium ut vel et. Sit voluptate eaque consequatur possimus nobis fugiat. Beatae est nihil qui.",
            "url": "http://placeimg.com/640/480/any"
        }
    ]
}
```

- With `$.ajax()` or `fetch()`
  - Get data from [https://fakerapi.it/api/v1/images?_quantity=1](https://fakerapi.it/api/v1/images?_quantity=1)
  - Once collected, add the content from the `data` property into our HTML:
    - `data[0].title` in the node with `title` id attribute
    - `data[0].description` in the node with `desc` id attribute
    - `data[0].url` in the node with `image` id attribute (update the `src` attribute)
  
- With `$.ajax()` or `fetch()`
  - Get data from [https://fakerapi.it/api/v1/images?_quantity=10](https://fakerapi.it/api/v1/images?_quantity=10)
  - Once collected, add the content from the `data` property into our HTML:
    - This time, create a node for every line of the `data` array:
      - `line.title` in the `h1` node
      - `line.description` in the `p` node
      - `line.url` in the `img` node (update the `src` attribute)
    - Add this node into the `div` with id `content-multiple`
```html
    <h1></h1>
    <img src="">
    <p id="desc"></p>
```

## 5. POO (4 points)

For this part, work in `5-poo/5-poo.html` and `5-poo/5-poo.js`. Don't forget to update the HTML file to get the necessary JS file.

In `5-poo/5-poo.js`, some variables are already created, and methods called. Use it to test your code.

- Create a new class `Product` with these properties:
  - `name` (string) the product's name
  - `quantity` (integer) quantity of available products
  - `price` (floating number) price of a product in euros

- Create a new class `Cart` with these properties:
  - `customer` (string) the customer's name
  - `products` (array) products added in the cart

- In `Cart`, write these methods:
  - `addProduct()` adding a `Product` in the `products` array
    - A product can only appear once in the array (use `this.products.includes(product)` to check if the product is already in the cart). 
    - when a product is added using this method, decrease `quantity` in the product by 1
  - `getTotal()` returns the total amount of the products in the cart (sum of the prices of every product in the cart)