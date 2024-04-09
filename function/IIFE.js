//IIFE -> immediately invoked function expression
(function() {
    const nome = 'Eduarda';
    console.log(nome);
})();

//não terá conflito entre variáveis, pois o de cima está sendo protegido
const nome = 'Outro nome'