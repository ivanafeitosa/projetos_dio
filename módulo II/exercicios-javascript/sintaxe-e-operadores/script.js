
function soma(a, b) {
    if (!a || !b) {
        return "Defina dois números!";
    }

    var total = 0;
    total = a + b;
    var numIguais

    (a == b) ? numIguais = 1 : numIguais = 0


    if (total > 10 && numIguais == 0) {
        if (total > 20) {
            return `Os números ${a} e ${b} não são iguais. Sua soma é ${total}, que é maior que 10 e maior que 20.`
        } else if (total == 20) {
            return `Os números ${a} e ${b} não são iguais. Sua soma é ${total}, que é maior que 10 e igual 20.`
        } else {
            return `Os números ${a} e ${b} não são iguais. Sua soma é ${total}, que é maior que 10 e menor que 20.`
        }
    } else if (total == 10 && numIguais == 0) {
        return `Os números ${a} e ${b} não são iguais. Sua soma é ${total}, que é igual a 10 e menor que 20.`
    } else if (total < 10 && numIguais == 0) {
        return `Os números ${a} e ${b} não são iguais. Sua soma é ${total}, que é menor que 10 e menor que 20.`
    }

    if (total > 10 && numIguais == 1) {
        if (total > 20) {
            return `Os números ${a} e ${b} são iguais. Sua soma é ${total}, que é maior que 10 e maior que 20.`
        } else if (total == 20) {
            return `Os números ${a} e ${b} são iguais. Sua soma é ${total}, que é maior que 10 e igual 20.`
        } else {
            return `Os números ${a} e ${b} são iguais. Sua soma é ${total}, que é maior que 10 e menor que 20.`
        }
    } else if (total == 10 && numIguais == 1) {
        return `Os números ${a} e ${b} são iguais. Sua soma é ${total}, que é igual a 10 e menor que 20.`
    } else if (total < 10 && numIguais == 1) {
        return `Os números ${a} e ${b} são iguais. Sua soma é ${total}, que é menor que 10 e menor que 20.`
    }
}

console.log(soma(2, 3));
