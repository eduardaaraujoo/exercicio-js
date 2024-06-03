function criaCalculadora() {
    return {

        display: document.querySelector('.display'),

        clearDisplay(){
            this.display.value = '';
        },

        inicia() {
            this.cliqueBotoes(); //THIS -> é a calculadora
        },

        cliqueBotoes() {
            document.addEventListener('click', (e) => {
                const el = e.target; 

                if(el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }
            });
        },

        btnParaDisplay(valor){
            this.display.innerText = valor;
        }

    };
    return calculadora;
}

const calculadora = criaCalculadora();
calculadora.inicia();