//Mostra informações do processo que está rodando no node
console.log(process)

//Mostra infos específicas do que está rodando 'argv' caminho do arquivo
console.log(process.argv)

//Manipulando os argumentos de entrada do node
const firstName = process.argv[2]
const lastName = process.argv[3]

console.log(`Seu nome é ${firstName} ${lastName}`)