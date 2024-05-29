function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve(msg);
    }, tempo);
    });
}

esperaAi('Conexão com o Banco de Dados', rand(1, 3))
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Buscando dados da BASE', rand(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Tratando so dados da BASE', rand(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
    }).then(() => {
        console.log('Exibe dados na tela');
    })
    .catch();

    console.log('Isso daqui será exibido antes de qualquer promise.');


 
