
const listaBrinquedos = [{ brinquedo: "bola", quantidade: 5 },
{ brinquedo: "osso", quantidade: 2 },
{ brinquedo: "corda", quantidade: 20 },
{ brinquedo: "sino", quantidade: 8 }
]

distribuirBrinquedo(listaBrinquedos);

function distribuirBrinquedo(lista) {

    lista.forEach(lista => {
        console.log(`distribuindo ${lista.quantidade} ${lista.brinquedo}(s) `);
    });
}