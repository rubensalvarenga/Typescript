"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.name = name;
        this.age = age;
    }
    doWork() {
        console.log(`${this.name} is ${this.age} years old.`);
    }
}
const jane = new Person('Jane', 31);
jane.doWork();
