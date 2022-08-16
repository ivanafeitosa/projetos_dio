

function getAdmins(map) {
    let admins = [];

    for([key, value] of map) {
        if( value === 'Admin') {
            admins.push(key);
        }
    }
    return admins;
}

//criando o map já com as chaves e valores dentro
const sistema = new Map([
    ['Luiz', 'Admin'],
    ['Leo', 'User'],
    ['Maria', 'Admin'],
    ['Rosa', 'Admin']
]);

//cria o map e depois adiciona-se os conjuntos [chave, valor]
/*
const sistema = new Map();
sistema.get('Luiz', 'Admin');
sistema.get('Leo', 'User');
*/

console.log(getAdmins(sistema));

