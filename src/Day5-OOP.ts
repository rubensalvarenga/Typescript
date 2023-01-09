class Users{
    name: string
    balance: number = 0
    singleTransaction: number = 0
    static totalTransactions: number = 0 


    constructor(n: string, b:number){
        this.name = n
        this.balance = b
    }

    addMoney(amount:number){
        this.balance+= amount
    }

}

const user1 = new Users('Andre',10)
const user2 = new Users('Marcos',20)


interface Item{
    name: string
    price: number
    itemPurchased(message:string):void
}

    let product1: Item

    product1 = {
        name: 'Apple',
        price: 2,
        itemPurchased(message:string){
                console.log(message+' '+this.name)
        }
    }


product1.itemPurchased('Voce acabou de comprar ')




