"use strict";
class Movie {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
let movie1 = new Movie(1, 'Rambo');
console.log(movie1);
console.log(movie1.id);
class MovieNew {
    constructor(id, name, _price) {
        this.id = id;
        this.name = name;
        this._price = _price;
    }
}
let movie2 = new MovieNew(1, 'Dançando na Chuva', 20);
console.log(movie2);
class HotelRooms {
}
let room = new HotelRooms();
room.A201 = 'Rubens';
room.A342 = 'João';
room.A23 = 'Maria';
console.log(room);
class Pessoa {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get greet() {
        return this.firstName + ' ' + this.lastName;
    }
}
class Clientes extends Pessoa {
    get greet() {
        return 'Dear, ' + super.greet;
    }
}
class Funcionarios extends Pessoa {
    get greet() {
        return 'Hi, ' + super.greet;
    }
}
let cliente1 = new Clientes('Rubens', 'Alvarenga', 51);
let funcionario1 = new Funcionarios('João', 'Costa', 18);
console.log(cliente1.greet);
console.log(funcionario1.greet);
