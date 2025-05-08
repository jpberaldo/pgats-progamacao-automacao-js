
console.log(retornaNumeroDeVogais("Joao Pedro"));

function retornaNumeroDeVogais(palavra) {

    palavra = palavra.toLowerCase();
    let contadorVogais = 0;

    for (let i = 0; i < palavra.length; i++) {
        
        let letra = palavra[i];

        if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
            contadorVogais++;
        }
    }

    return `o numero de vogais na palavra "${palavra}" é: ${contadorVogais}`;

}