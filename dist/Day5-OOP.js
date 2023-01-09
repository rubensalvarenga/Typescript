"use strict";
class Users {
    constructor(n, b) {
        this.balance = 0;
        this.singleTransaction = 0;
        this.name = n;
        this.balance = b;
    }
    addMoney(amount) {
        this.balance += amount;
    }
}
Users.totalTransactions = 0;
const user1 = new Users('Andre', 10);
const user2 = new Users('Marcos', 20);
let product1;
product1 = {
    name: 'Apple',
    price: 2,
    itemPurchased(message) {
        console.log(message + ' ' + this.name);
    }
};
product1.itemPurchased('Voce acabou de comprar ');
