

let pessoa = {
    nome: 'Ivana',
    idade: 25
} 


function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

//console.log(calculaIdade.call(pessoa, 5));
console.log(calculaIdade.apply(pessoa, [10]));
