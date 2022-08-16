//Atividade 1 - somar valores do array
/*function somaNums(arr) {
    return arr.reduce(function(prev, current){
        console.log(prev);
        console.log(current);
        return prev + current;
    }, 0);
}

const array = [2, 2];

console.log(somaNums(array));*/

//Atividade 2 - subtrai uma lista de preços do saldo inicial

function calculaSaldo(arr, valor) {
    return arr.reduce(function(prev, current){
        return prev - current.preco;
    }, valor);
}

const arr = [
    {
        nome: 'secador',
        preco: 30
    },
    {
        nome: 'tenis',
        preco: 100
    },
    {
        nome: 'blusa',
        preco: 50
    }
];

const saldo = 300;

console.log(calculaSaldo(arr, saldo));