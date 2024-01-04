const form = document.querySelector('#formulario');

form.addEventListener('submit', function (evento){
    evento.preventDefault();
    console.log('Evento previnido');
    setResultado('Olá mundo!')
});

function setResultado (msg) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = msg;
}