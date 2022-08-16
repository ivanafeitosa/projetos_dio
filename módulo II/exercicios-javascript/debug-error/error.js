
function validaErro(arr, num) {
    if(!arr || !num) throw new ReferenceError("Envie os parâmetros");
    if(typeof arr !== 'object' || typeof num != 'number') throw new TypeError("Envie um array do tipo objeto e o numero");
    if(arr.length !== num) throw new RangeError("O array tem tamanho diferente do enviado");
    
    return arr;
}

function tryCatch(arr, num) {
    try {
        return validaErro(arr, num)
    }
    catch(e) {
        if(e instanceof ReferenceError) {
            console.log("Este erro é um ReferenceError!");
            console.log(e.message);
        } else if(e instanceof TypeError) {
            console.log("Este erro é um TypeError!");
            console.log(e.message);
        } else if(e instanceof RangeError) {
            console.log("Este erro é um RangeError!");
            console.log(e.message);
        } else {
            console.log("Tipo de erro inesperado:" + e);
        }
    }
}

const num = 2;
const arr = [1, 2];


console.log(tryCatch(arr, num));

//console.log(validaErro(arr, num));
