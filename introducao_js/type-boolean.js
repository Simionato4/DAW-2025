const value1 = true;
const value2 = false;

//thrusty//Falsy -> Variáveis vazias ou com valor 0, se bubmeter
//a um teste lógico, ficam boolean.

if (value1) {
    console.log('Verdadeiro');
}else{
    console.log('Falso');
}
// verdadeiro

if (!value1) {
    console.log('Verdadeiro');
}else{
    console.log('Falso');
}
// falso

const value3 = '';
if (value3) {
    console.log('Verdadeiro');
}else{
    console.log('Falso');
}
// falso

//operador ternario
(Logica) ? (entao) : (senao)

const resultado = value3 ? 'Verdadeiro' : 'Falso';
console.log(resultado);
// falso
