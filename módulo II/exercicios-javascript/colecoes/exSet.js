const myArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(array) {
    const newValues = new Set(array);

    return [...newValues];
}

console.log(valoresUnicos(myArray));
