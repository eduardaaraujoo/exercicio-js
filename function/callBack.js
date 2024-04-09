function rand(min= 1000, max= 3000){
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}

function f1(callback){
    setTimeout(function() { //permite que você execute um trecho de código (neste caso, uma função anônima) após um determinado intervalo de tempo.
        console.log('f1');
    }, rand());  
}

function f2(callback){
    setTimeout(function() { 
        console.log('f2');
    }, rand()); 
}

function f3(callback){
    setTimeout(function() { 
        console.log('f3');
    }, RadioNodeList
     ), rand(); 
}

f1();
f2();
f3();
console.log('Olá Mundo');