function userInput(input1:number | string, input2:number | string){
    if(typeof input1 === 'number' && typeof input2 === 'number'){
        return input1+input2
    }else
    {
        return input1.toString()+input2.toString()
    }
}

const inputValor = userInput( 10,35)
const inputProduto = userInput ('maca ',' ovo')

//console.log(inputProduto,inputValor)

// Literal

let produtoPreco : 10 | 20 | 30
let produtoTamanho: 'P' | 'M' | 'G'

produtoPreco = 10
produtoTamanho = 'P'

//Interseção
type user = {
    nome:string,
    idade:number,
    filhos:number
}

enum Setor {administrativo = 1, TI = 2,secretaria = 3, tesouraria = 4}
type Job = {
    setor : number,
    tempoCasa : number
}


type funcionario = user & Job

const f1: funcionario = {
    nome :'Rubens',
    idade : 50,
    filhos : 2,
    setor : Setor.tesouraria,
    tempoCasa : 2
}


console.log (f1)


