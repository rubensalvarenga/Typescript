"use strict";
class Furniture {
    constructor(manufacturer = 'IKEA') {
        this.manufacturer = manufacturer;
    }
}
class Desk extends Furniture {
    kind() {
        console.log(`This is a desk made by ${this.manufacturer}`);
    }
}
class Chair extends Furniture {
    kind() {
        console.log(`This is a chair made by ${this.manufacturer}`);
    }
}
const desk = new Desk();
desk.kind();
const chair = new Chair();
chair.kind();
