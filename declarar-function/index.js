//Declaração de função (Function hoisting)
function falaOi() {
    console.log('Oie');
}
falaOi();

// First-class objects (objetos de primeira classe)

 const jogaDado = function() {
    console.log('Joguei o dado');
 };
 jogaDado();

 //Arrow function
  const funcaoArrow = () => {
    console.log('Aqui está a arrow function');
  }
  funcaoArrow();

  const obj = {
    falar(){
      console.log('I am a developer');
    }
  };
  obj.falar();
  