function validarCPF(cfpEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function(){
            return cfpEnviado.replace(/\D+/g, '');
        }
    });
}

validarCPF.prototype.valida = function(){
    if(typeof this.cpfLimpo === 'undefined') return false;
    if(this.cpfLimpo.length !== 11) return false;

    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.criaDigito(cpfParcial);
    return true;
}

validarCPF.prototype.criaDigito = function(cpfParcial){
    const cpfArray = Array.from(cpfParcial);
    
    let regressivo = cpfArray.length + 1;
    const digito = cpfArray.reduce((ac, val) => {  //ac = acumulador
        console.log(regressivo, typeof val, regressivo * val);
        ac += (ac * val);
        regressivo--;
        return ac;
    }, 0);
}


const cpf = new validarCPF('089.985.844-92');
console.log(cpf.valida());