// Day 5 - Exercise 1

interface itemFace {
    id:number
    title:string
    variantId?:number
    itemMsg (message:string):void
}

let item : itemFace

item = {
  id : 1,
  title: 'shoes',
  itemMsg (message:string){
    console.log(message)
  }
}

item.itemMsg(`Adding "${item.title}" to cart.`)

