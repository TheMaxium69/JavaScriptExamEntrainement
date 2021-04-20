"use strict";

let beanie = new Product();
beanie.name = "Un bonnet bien chaud";
beanie.quantity = 2;
beanie.price = 19.99;

let short = new Product();
short.name = "Un short de sport";
short.quantity = 15;
short.price = 29.98;

let tShirt = new Product();
tShirt.name = "Un T-shirt";
tShirt.quantity = 176;
tShirt.price = 9.89;

let cart = new Cart();
cart.customer = "Moi";
cart.addProduct(beanie);
cart.addProduct(tShirt);

console.log(cart.getTotal());