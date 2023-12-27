function criaPessoa(nome, sobrenome, idade) {
    return {
        nome,
        sobrenome,
        idade
    };
}

const pessoa1 = criaPessoa('Eduarda', 'Araújo', '26');
const pessoa2 = criaPessoa('Juliana', 'Cavalcanti', '23');
const pessoa3 = criaPessoa('Bárbara', 'Ponciano', '34');
const pessoa4 = criaPessoa('Thaiane', 'Santiago', '39');
const pessoa5 = criaPessoa('Maria', 'Salgado', '41');

console.log(pessoa2.nome, pessoa4.sobrenome);