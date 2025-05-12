import { obterListaDeCaes} from './modularizacao-export.js'

const lista = obterListaDeCaes();

for(let i = 0; i < obterListaDeCaes().length; i++) {
    console.log(`Entregando petisco para ${lista[i]}`);
}