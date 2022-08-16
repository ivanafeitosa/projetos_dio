
// Solução 1 
/*function alunosAprovados(array, num) {
    if(!array || !num) { return "Digite o velor de alunos/notas e a média final!"}

    let aprovados = [];
    for(let i = 0; i < array.length; i++) {
        if(array[i].nota >= num) {
            aprovados.push(array[i].nome);
        }
    }

    return aprovados;
}

let array = [
    {
        nome: 'João',
        nota: 7
    },
    {
        nome: 'Maria',
        nota: 3
    },
    {
        nome: 'Luana',
        nota: 8
    },
    {
        nome: 'Lucas',
        nota: 5
    }

]

console.log(alunosAprovados(array, 5));*/

// Solução 2 (usando object destructuring)
function alunosAprovados(array, num) {
    if(!array || !num) { return "Digite o velor de alunos/notas e a média final!"}

    let aprovados = [];
    for(let i = 0; i < array.length; i++) {

        const {nome, nota} = array[i];

        if(nota >= num) {
            aprovados.push(nome);
        }
    }

    return aprovados;
}

let array = [
    {
        nome: 'João',
        nota: 7
    },
    {
        nome: 'Maria',
        nota: 3
    },
    {
        nome: 'Luana',
        nota: 8
    },
    {
        nome: 'Lucas',
        nota: 5
    }

]

console.log(alunosAprovados(array, 7));
