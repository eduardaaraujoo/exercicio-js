class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

function Pessoa2(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

const p1 = new Pessoa('Maria', 'Santos');
const p2 = new Pessoa2('Roberto', 'Junior');
console.log(p1, p2);

/**
 método (parâmetro) {

 }
 */
