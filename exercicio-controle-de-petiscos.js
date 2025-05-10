
distribuirPetiscos(15, 10);

function distribuirPetiscos(qtdPetisco, limiteParaDogFicarSatisfeito) {
    if (qtdPetisco <= limiteParaDogFicarSatisfeito) {
        for (let i = 0; i < qtdPetisco; i++) {
            console.log(`Dando ${i + 1} petisco para o pet.`);
        }
    } else {
        console.log(`O dog já comeu ${limiteParaDogFicarSatisfeito} petisco(s), o que é suficiente para ficar satisfeito.`);
    }
}
