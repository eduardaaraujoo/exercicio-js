//Função que recebe dois argumentos, largura e altura de uma imagem e retorna true se a imagem estiver no modo paisagem.

const paisagem = (largura, altura) => {
    return largura > altura ? true : false;
}

console.log(paisagem(1450, 1200));