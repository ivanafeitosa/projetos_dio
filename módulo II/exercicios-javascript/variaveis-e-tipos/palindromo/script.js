//Solução 1

function verificaPalindromo(string) {    
    if(!string) return "digite uma string!";

    let stringReverse = string.split("");
    stringReverse = stringReverse.reverse();
    stringReverse = stringReverse.join("");

    let verifica = (string === stringReverse);
    return verifica;
}

console.log(verificaPalindromo("ama"));

//Solução 2

function verificaPalindromo2(string) {
    if(!string) return "digite uma string!";

    for(let i = 0; i < string.length / 2; i++) {
        if(string[i] !== string[string.length - 1 - i]) {
            return false;
        }        
    }

    return true;
}

console.log(verificaPalindromo2("gato"));



