const prompt = require('prompt-sync')();
const calc = require('./calculadora');

console.log("=== Calculadora Node.js ===");

console.log("Escolha a operação:");
console.log("1 - Somar");
console.log("2 - Subtrair");
console.log("3 - Multiplicar");
console.log("4 - Dividir");
console.log("5 - Ao Quadrado");
console.log("6 - Raiz Quadrada");

let op = prompt("Digite o número da operação desejada: ");

let resultado;

if (op === "5") {
  let num = Number(prompt("Digite um número: "));
  resultado = calc.aoQuadrado(num);
} else if (op === "6") {
  let num = Number(prompt("Digite um número: "));
  resultado = calc.raizQuadrada(num);
} else {
  let num1 = Number(prompt("Digite o primeiro número: "));
  let num2 = Number(prompt("Digite o segundo número: "));
  switch (op) {
    case "1":
      resultado = calc.somar(num1, num2);
      break;
    case "2":
      resultado = calc.subtrair(num1, num2);
      break;
    case "3":
      resultado = calc.multiplicar(num1, num2);
      break;
    case "4":
      resultado = calc.dividir(num1, num2);
      break;
    default:
      console.log("Operação inválida!");
  }
}

if (resultado !== undefined) {
  console.log("Resultado:", resultado);
}
