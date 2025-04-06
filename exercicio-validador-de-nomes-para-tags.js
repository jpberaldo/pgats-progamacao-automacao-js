const nomeCachorro = "Princesa";

validadorNome(nomeCachorro);

const nomeCachorroDois = "Snop Dog";
validadorNome(nomeCachorroDois);

function validadorNome(nome) {

 let espaco = " ";
 let nomeOriginal = nome;

 console.log("O nome original, como foi previamente cadastrado é", nomeOriginal);

if(nomeOriginal.includes(espaco)) {
    console.log("O nome do cachorro na identificação não pode ser composto, ou seja entrada inválida");
} else {
    let nomeFormatado = nomeOriginal.toUpperCase();
    console.log("O nome formatado para um novo padrão que será: o nome será convertido para maiusculo");
    console.log("Nome convertido: ", nomeFormatado);
}

}
