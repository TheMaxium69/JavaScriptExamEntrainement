"use strict";

class Cart {
    constructor() {
        this.customer = "";
        this.products = [];
    }

    addProduct(product) {
        if (!this.products.includes(product)) {
            this.products.push(product);

            product.quantity = product.quantity - 1;
        }

        return this;
    }

    getTotal() {
        let total = 0;
        for (const product of this.products) {
            total += product.price;
        }

        return total;
    }
}