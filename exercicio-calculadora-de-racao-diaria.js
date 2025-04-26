let nomeCachorro = "Princesa"
let pesoCachorro = 10
let estoqueAtualDeRacao = 5000

let gramasPorDia = pesoCachorro * 30
let duracaoEstoque = Math.floor(estoqueAtualDeRacao / gramasPorDia)

console.log(`O nome do seu cachorro é: ${nomeCachorro}`);
console.log(`O seu peso atual é: ${pesoCachorro}kg`);
console.log(`O seu cachorro deve comer: ${gramasPorDia}g por dia`);
console.log(`E o seu estoque atual vai durar: ${duracaoEstoque} dias`); 