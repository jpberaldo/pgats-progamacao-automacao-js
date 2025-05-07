let lista = [1, "Teste", 5, "4856"];

function retornarListaComApenasInteiros(converteLista) {

    let novaLista = [];

    for (let i = 0; i < converteLista.length; i++) {

        if (typeof converteLista[i] === "number") {
            novaLista.push(converteLista[i]);
        }
    }

    return novaLista;

}

console.log("Iniciando execucao ===================");
console.log("Lista original: ", lista); //Retornar a lista original: 1, "Teste", 5, "4856"
console.log("Nova lista, sem as strings: ", retornarListaComApenasInteiros(lista)); // Retornar a lista apenas com os inteiros: 1, 5


