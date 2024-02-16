const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

for(let numero of numeros){
    if(numero === 2){
        console.log('Pulei o número 2')
        continue;
    }

    if(numero === 7){
        break;
    }

    console.log(numero);
}