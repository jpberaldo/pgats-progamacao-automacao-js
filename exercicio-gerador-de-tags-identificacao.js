

const nomeCachorro = "Princesa"
const raca = "viralata"
let peso = 23.5
let idade = 16
let adotado = true


exibirTagDeIdentificacao(nomeCachorro, raca, peso);

function exibirTagDeIdentificacao(nome, raca, peso) { 

    const nomeMaiusculo = nome.toUpperCase();
    console.log(`Nome: ${nomeMaiusculo}`);

    const primeiraLetra = raca.charAt(0).toUpperCase() + raca.slice(1);
    console.log(`Raca: ${primeiraLetra}`);

    console.log(`Peso: ${peso}`);
}
