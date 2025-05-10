
let qtdVoltasRealizadas = 6;

contadorDeSatisfacao(qtdVoltasRealizadas);

function contadorDeSatisfacao(voltas) {

    while (voltas <= 5) {

        if (voltas < 5) {
            console.log(`O dog está na volta ${voltas} e ainda não está satisfeito com o passeio!`);
        }
        voltas++;
    }

    console.log(`O dog já deu 5 voltas ou mais e está satisfeito com o passeio!`);

}

