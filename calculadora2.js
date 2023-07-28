function calculadora (n1, n2, operacao) {
    if (operacao === 'soma'){
        return n1 + n2
    } else if (operacao === 'subtracao') {
        return n1 - n2
    } else if (operacao === 'multiplicacao') {
        return n1 * n2
    } else if (operacao === 'divisao') {
        return n1 / n2
    } else {
        return 0
    }    
}

console.log(calculadora(4, 2, 'soma'));
console.log(calculadora(4, 2, 'subtracao'));
console.log(calculadora(4, 2, 'multiplicacao'));
console.log(calculadora(4, 2, 'divisao'));
console.log(calculadora(4, 2, 'operacao invalida'));
