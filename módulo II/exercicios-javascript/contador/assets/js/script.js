
//Usando on + nome do evento
/*var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}*/

//Usando condicionais (desabilita o botão de incremento se for maior que 10)
var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;


function increment() {
    if (currentNumber >= 10) {
        currentNumberWrapper.setAttribute('disabled', 'disabled');
    } else {
        currentNumber = currentNumber + 1;
        if (currentNumber >= 0) {
            currentNumberWrapper.style.color = "black";
            currentNumberWrapper.innerHTML = currentNumber;
        } else {
            currentNumberWrapper.innerHTML = currentNumber;
        }
    }
}

function decrement() {
    currentNumber = currentNumber - 1;
    if (currentNumber < 0) {
        currentNumberWrapper.innerHTML = currentNumber;
        currentNumberWrapper.style.color = "red";
    } else {
        currentNumberWrapper.innerHTML = currentNumber;
    }

}

const adic = document.querySelector('.adicionar');
adic.addEventListener('click', increment);

const decr = document.querySelector('.subtrair');
decr.addEventListener('click', decrement);