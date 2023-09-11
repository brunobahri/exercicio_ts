"use strict";
function multiplicar(a, b) {
    return a * b;
}
function saudacao(nome) {
    return `Olá, ${nome}!`;
}
const resultadoMultiplicacao = multiplicar(5, 3);
const mensagemSaudacao = saudacao("João");
console.log(`Resultado da multiplicação: ${resultadoMultiplicacao}`);
console.log(mensagemSaudacao);
