//Função que recebe dois argumentos, largura e altura de uma imagem e retorna true se a imagem estiver no modo paisagem.

const paisagem = (largura, altura) => {
    return largura > altura ? true : false;
}

console.log(paisagem(1450, 1200));


//Escreva uma função que recebe um número e retorne o seguinte:
//Número divisível por 3 = Fizz
//Número divisível por 5 = Buzz
//Número divisível por 3 e 5 = FizzBuzz
//Número NÃO é divisível por 3 e 5 = Retorna o próprio número
//Checar se o número é realmente um número  = Retorna o próprio número 
//Use a função com números de 0 a 100

const FizzBuzz = (numero) => {
    if (typeof numero !== 'number') return NaN;
    if (numero % 3 === 0) return 'Fizz';
    if (numero % 5 === 0) return 'Buzz';
    if (numero % 3 === 0 && n % 5 === 0) return 'FizzBuzz';
    return numero;
}