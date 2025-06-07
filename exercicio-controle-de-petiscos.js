
console.log(distribuirPetiscos(9, 10));

function distribuirPetiscos(qtdPetisco, limiteParaDogFicarSatisfeito) {
    if (qtdPetisco <= limiteParaDogFicarSatisfeito) {
        for (let i = 0; i < qtdPetisco; i++) {
            return `Dando ${i + 1} petisco para o pet.`;
        }
        
    } else {
        return `O dog já comeu ${limiteParaDogFicarSatisfeito} petisco(s), o que é suficiente para ficar satisfeito.`;
    }
}

export {
    distribuirPetiscos
}