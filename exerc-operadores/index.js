/*
*valores que retornam false em js
0
'' "" ``
null / undefined 
NaN
*/


/*
const usuario = 'Maria';
const senha = '12345';

const vaiLogar = usuario === 'Maria' || senha === '12345';
console.log(vaiLogar)

*/

/*
const corUsuario = null;
const corPadrao = corUsuario || 'preto';

console.log(corPadrao);
*/

const a = 0;
const b = null;
const c = 'false';
const d = false;
const e = NaN;
 console.log(a || b || c || d || e);