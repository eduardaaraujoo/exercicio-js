function ValidarCPF(cfpEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function(){
            return cfpEnviado.replace(/\D+/g, '');
        }
    });
}

ValidarCPF.prototype.valida = function(){
    if(typeof this.cpfLimpo === 'undefined') return false;
    if(this.cpfLimpo !== 11) return false;
        return true;
}

const cpf = new ValidarCPF('089.985.844-92');
console.log(cpf.valida());