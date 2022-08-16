//Funcao para substituir os números pares e diferentes de zero de um vetor
function substituiPares(array) {  
    if(!array) return "digite um vetor numérico!";
    if(!array.length) return -1;    

    for(let i = 0; i < array.length; i++) {
        if(array[i] % 2 === 0 && array[i] !== 0) {
            //console.log(`Substituindo o ${array[i]} por 0`);
            array[i] = 0;            
        }
    }

    return array;
}

let array = [1, 3, 4, 6, 80, 33, 23, 90];

console.log(substituiPares(array));