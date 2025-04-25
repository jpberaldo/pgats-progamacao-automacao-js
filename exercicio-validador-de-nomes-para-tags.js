const nomeCachorro = "Princesa";
validadorNome(nomeCachorro);

const nomeCachorroDois = "Snop Dog";
validadorNome(nomeCachorroDois);

function validadorNome(nome) {

    let espaco = " ";
    let nomeOriginal = nome;

    console.log("Nome cadastrado: ", nomeOriginal);

    if (nomeOriginal.includes(espaco)) {
        console.log("O nome do cachorro na identificação não pode ser composto, ou seja entrada inválida");
    } else {
        let nomeFormatado = nomeOriginal.toUpperCase();
        console.log("O nome será formatado convertido para maiusculo");
        console.log("Nome formatado: ", nomeFormatado);
    }

}
