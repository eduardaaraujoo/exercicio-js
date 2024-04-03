
//Closures é a habilidade que a função tem de acessar o escopo léxico
function retornaFuncao(){
    const nome = 'Eduarda';
    return function(){
        return nome;
    };
}

const funcao = retornaFuncao();
console.log(funcao()); 