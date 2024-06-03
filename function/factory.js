//retornam objeto
//Factory function
//Constructor function
function criaPessoa(nome, sobrenome, a, p) {
    return{
        nome, 
        sobrenome,
        fala(assunto) {
            return `${nome} está ${assunto}.`;
        },
        altura: a,
        peso: p,
        imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2); 
        }
    };
}

const p1 = criaPessoa('Eduarda', 'Araújo', 1.6, 62);
console.log(p1.imc());
const p2 = criaPessoa('Roberto', 'Silva', 1.7, 80);
console.log(p1.fala('falando sobre JS'));
