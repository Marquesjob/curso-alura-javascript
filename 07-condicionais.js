const listaDeDestinos = new Array(
    'Rio de Janeiro',
    'São Paulo',
    'Salvador'
);
const listaDeOperadores = new Array(
    '<',
    '>',
    '<=',
    '>=',
    '='
);

console.log("");

console.log("**************** ARRAY DE DESTINOS ****************");
console.log(listaDeDestinos);
console.log("");

console.log("**************** ADICIONANDO NOVO ELEMENTO NA LISTA COM MÉTODO PUSH ****************")
listaDeDestinos.push('Curitiba');

console.log(listaDeDestinos);
console.log("");

listaDeDestinos.splice(1, 1);

console.log("**************** REMOVENDO UM ELEMENTO DO ARRAY COM O A FUNÇÃO SPLICE ****************")
console.log(listaDeDestinos);
console.log("");

console.log("**************** OPERADORES LÓGICOS ****************")
console.log(listaDeOperadores);
console.log("");


console.log("**************** EXIBINDO UM ELEMENTO ESPECIFICO DO ARRAY ****************")
console.log('- O indice indicado corresponde ao elemento: ' + listaDeDestinos[1]);
console.log("");

console.log("**************** ADICIONANDO CONDICIONAL E PIPE || ****************")

let idadeComprador = 18;
let companhia = true;
let passagem = true;

if (idadeComprador >= 18 || companhia == true) {

    console.log("Comprador maior de idade ou acompanhado, venda liberada");

} else {
    console.log("Comprador menor de idade sem companhia, não vender");
}
console.log("");

console.log("*************** OPERADOR LÓGICO && ***************");
if ( passagem && idadeComprador >= 18) {
    console.log("Embarque liberado");
} else {
    console.log("Para o embarque, é necessário ser maior de idade ou uma companhia +18");
}
console.log("");
