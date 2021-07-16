console.log(`Trabalhando com listas`);

const listaDeDestinos = new Array(
    'Rio de Janeiro',
    'São Paulo',
    'Salvador'
);

console.log(" ");

console.log("**************** ARRAY DE DESTINOS ****************");
console.log(listaDeDestinos);
console.log(" ");

console.log("**************** ADICIONANDO NOVO ELEMENTO NA LISTA COM MÉTODO PUSH ****************")
listaDeDestinos.push('Curitiba');

console.log(listaDeDestinos);
console.log(" ");

listaDeDestinos.splice(1,1); 

console.log("**************** REMOVENDO UM ELEMENTO DO ARRAY COM O A FUNÇÃO SPLICE ****************")
console.log(listaDeDestinos);
console.log(" ");

console.log("**************** EXIBINDO UM ELEMENTO ESPECIFICO DO ARRAY ****************")
console.log('- O indice indicado corresponde ao elemento: ' + listaDeDestinos[1]);
console.log(" ");