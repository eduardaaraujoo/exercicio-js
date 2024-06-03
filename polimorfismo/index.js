//SuperClass 

function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor){
    if(this.saldo < valor) {
        return;
    }

    this.saldo -= valor;
}

Conta.prototype.depositar = function(valor) {
  this.saldo += valor;
  this.verSaldo();           //pra ver quanto tem na conta 
};

Conta.prototype.verSaldo = function() {
    console.log(
        `Ag/c: ${this.agencia}/${this.conta} |` +
        `Saldo: R$${this.saldo.toFixed(2)}`

    );         //ag = agencia e c = conta
};


const conta1 = new Conta(11, 25, 13);
conta1.depositar(40);