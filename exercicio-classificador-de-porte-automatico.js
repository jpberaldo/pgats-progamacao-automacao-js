let nomeCachorro = "Princesa"
let pesoCachorro = 51

classificadorDePorte(nomeCachorro, pesoCachorro)

function classificadorDePorte(nome, peso) {

    let porteCachorro = peso <= 10 ? "Pequeno" : peso <= 50 ? "Medio" : "Grande";
    console.log(`O nome do seu cachorro é: ${nome}`);
    console.log(`O seu peso atual é: ${peso}kg`);
    console.log(`O porte do seu cachorro é: ${porteCachorro}`);

}