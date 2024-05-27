//O método map() é uma ferramenta poderosa em JavaScript para transformar arrays de maneira declarativa e imutável.

const pessoas = [       //Array com 3 objetos
   { id: 3, nome: 'Luiz' },
   { id: 2, nome: 'Maria'},
   { id: 1, nome: 'Helena'},
]; 

const novasPessoas = new Map();  
for (const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas.set(id, { ...pessoa});
}

novasPessoas.delete(3);//para eliminar uma chave

console.log(novasPessoas);