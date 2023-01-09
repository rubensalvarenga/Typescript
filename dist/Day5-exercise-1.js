"use strict";
let item;
item = {
    id: 1,
    title: 'shoes',
    itemMsg(message) {
        console.log(message);
    }
};
item.itemMsg(`Adding "${item.title}" to cart.`);
