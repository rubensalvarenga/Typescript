class Movie{
    readonly id: number
    public name: string

    constructor(id:number , name:string){
        this.id = id
        this.name = name
    }
}

let movie1 = new Movie(1,'Rambo')

console.log(movie1)

console.log(movie1.id) // posso acessar não posso alterar

// melhorando o codificação
class MovieNew{
    constructor(
        public readonly id : number,
        public name: string,
        public  _price: number
    ){
        
    }
}

let movie2 = new MovieNew (1,'Dançando na Chuva',20)

console.log(movie2)

// Index Signatures

class HotelRooms {
    [roomNumber : string] : string
}

let room = new HotelRooms()
room.A201 = 'Rubens'
room.A342  = 'João'
room.A23   = 'Maria'

console.log(room)

// Herança

class Pessoa {
    constructor(
        public firstName: string,
        public lastName: string,
        public age: number
    ){}

    get greet(){
        return this.firstName+' '+this.lastName
    }
}

class Clientes extends Pessoa{
    override get greet(){
        return 'Dear, '+ super.greet
    }
}

class Funcionarios extends Pessoa{
    override get greet(){
        return 'Hi, '+ super.greet
    }
}

let cliente1 = new Clientes('Rubens','Alvarenga',51)
let funcionario1 = new Funcionarios('João','Costa',18)

console.log(cliente1.greet)
console.log(funcionario1.greet)