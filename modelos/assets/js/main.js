const form = document.querySelector('#formulario');

form.addEventListener('submit', function (evento){
    evento.preventDefault();
    const inputPeso = evento.target
});

function criaP (className) {
    const p = document.createElement('p');
    return p;
}

function setResultado (msg) {
    const resultado = document.querySelector('#resultado');

    resultado.innerHTML = ''; 
    const p = criaP()
}{

    resultado.innerHTML = msg;
}



