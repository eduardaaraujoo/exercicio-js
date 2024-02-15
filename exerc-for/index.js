const nome = ['Caio', 'Fernando', 'Davi'];

for(let i = 0; i < nome.length; i++){
    console.log(nome[i]);
}

console.log('######')

for(let i in nome){
    console.log(nome[i]);
}

console.log('######')

for (let valor of nome){
    console.log(valor);
}


// For clássico: Geralmente com iteráveis (array ou strings)
// For in: Retorna o índice ou chave (string, array ou objetos)
// For of: Retorna o valor em sí (iteráveis, arrays, strings )