import assert from 'node:assert';

import { distribuirPetiscos } from '../exercicio-controle-de-petiscos.js';

describe('Testes para validar workflows - Disciplina: Integração continua para Automação de Testes', () => {

    it('Quando informar a qtd de petisco e a qtd para ficar satisfeito', () => {
        assert.strictEqual(distribuirPetiscos(9, 10), 'Dando 1 petisco para o pet.');
    });

    it('Quando informar a qtd de petisco maior e o dog ja estar satisfeito exibe mensagem de satisfeito', () => {
        assert.strictEqual(distribuirPetiscos(11, 10), 'O dog já comeu 10 petisco(s), o que é suficiente para ficar satisfeito.');
    });
})