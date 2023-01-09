"use strict";
function userInput(input1, input2) {
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        return input1 + input2;
    }
    else {
        return input1.toString() + input2.toString();
    }
}
const inputValor = userInput(10, 35);
const inputProduto = userInput('maca ', ' ovo');
let produtoPreco;
let produtoTamanho;
produtoPreco = 10;
produtoTamanho = 'P';
var Setor;
(function (Setor) {
    Setor[Setor["administrativo"] = 1] = "administrativo";
    Setor[Setor["TI"] = 2] = "TI";
    Setor[Setor["secretaria"] = 3] = "secretaria";
    Setor[Setor["tesouraria"] = 4] = "tesouraria";
})(Setor || (Setor = {}));
const f1 = {
    nome: 'Rubens',
    idade: 50,
    filhos: 2,
    setor: Setor.tesouraria,
    tempoCasa: 2
};
console.log(f1);
