let nomeCachorro = "Princesa"
let porteCachorro = "grande"
let tempoDisponível = 60

console.log("Nome do cachorro informado:", nomeCachorro);
console.log("Porte do cachorro informado: ", porteCachorro);
console.log("Tempo disponível para atividade: ", tempoDisponível);

function tipoAtividade(porte) {

    let indicaAtividade
    switch (porte) {
        case "pequeno":
            indicaAtividade = `A atividade indicada de acordo com o porte ${porte} é: deve brincar dentro de casa`
            break;

        case "medio":
            indicaAtividade = `A atividade indicada de acordo com o porte ${porte} é: deve caminhar no quarteirão`
            break;

        case "grande":
            indicaAtividade = `A atividade indicada de acordo com o porte ${porte} é: deve correr no parque`
            break;

        default:
            indicaAtividade = "porte inválido"
    }

    return indicaAtividade
}

const atividadeIndicada = (tempo) => {
    if (tempo < 15) {
        console.log(`Atividade rápida: ${tipoAtividade(porteCachorro)}\nTempo indicado: 10 minutos`);
    } else if (tempo >= 15 && tempo <= 30) {
        console.log(`Tempo ideal: ${tipoAtividade(porteCachorro)}\nTempo indicado: 20 a 30 minutos`);
    } else {
        console.log(`Hora da diversão: ${tipoAtividade(porteCachorro)}\nTempo indicado: mais de 30 minutos`);
    }
}

atividadeIndicada(tempoDisponível);
