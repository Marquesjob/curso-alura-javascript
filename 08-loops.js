console.log('\n*************** LOOPS ***************');

const idade = 15;
let passagem = false;
let companhia = true;
const destino = 'salvador';
const venda = idade >= 18 || companhia == true;

const listaDeDestinos = new Array (
   `salvador`,
   `curitiba`,
   `rio de janeiro`
);

let destinoExiste = false;
let contador = 0; 
  
while ( contador < 3 ) {

    let verificacao = listaDeDestinos[contador] == destino;
    
    if( verificacao ){
        console.log(`O destino ${destino} existe, embarcar no portão 3`);
        break; 
    }
    contador += 1;

}

console.log('\n*************** USANDO O FOR ***************');

for (let i = 0;  i > 3 ; i++) {

    if(listaDeDestinos[i] == destino) {
        destinoExiste = true;
    }
  
}