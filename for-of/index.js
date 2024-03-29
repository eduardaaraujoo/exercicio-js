const nomes = ['Eduarda', 'Araújo'];

//FOR IN 
//for (let i in nome){
   // console.log(nome[i]); 
    //vai acessar cada índice de nome
//}

//FOR OF 
for (let valor of nomes){
    console.log(valor);
}

console.log('###')
//FOR EACH
nomes.forEach(function(valor, indice, array){
    console.log(valor, indice, array)
});