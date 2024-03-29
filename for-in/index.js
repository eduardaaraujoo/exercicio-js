//For in ler os indices ou chaves do objeto
//  ARRAYS        0         1         2
const frutas = ['Maçã', 'Laranja', 'Manga'];

   // for (let i = 0; i < frutas.length; i++) {
     //   console.log(frutas[i]);
   // }


 //  for (let i in frutas) {
  //  console.log(frutas [i]);
  // }

//OBJETO
const pessoa = {
    nome: 'Eduarda',
    sobrenome: 'Araújo',
    idade: 26
};

for (let chave in pessoa){
    console.log(chave);
  // console.log(pessoa[chave])

    //caso queira acessar apenas uma chave
    //console.log(pessoa.idade);
}


