//crear la funcion sumar
const sumar = (num1,num2)=>{
    if(!num1 || !num2) return 0;
    if(typeof num1 !== 'number' || typeof num2 !== 'number') return null;
    return num1+num2;
};

//1.
console.log('1. La función debe devolver null si algún parámetro no es numérico.');
let resultado = sumar(1,"2");
if(resultado === null){
    console.log('--> Test1 paso');
} else {
    console.log('-->Test1 no paso, se esperaba un resultado null');
};

//2.
console.log('2. La función debe devolver 0 si no se pasó ningún parámetro');
let resultado2 = sumar();
if(resultado2 === 0){
    console.log('--> Test2 paso');
} else {
    console.log('-->Test2 no paso, se esperaba un resultado igual a 0');
};

//3.
console.log('3. La función debe poder realizar la suma correctamente.');
let resultado3 = sumar(5,4);
if(resultado3 === 9){
    console.log('--> Test3 paso');
} else {
    console.log('-->Test3 no paso, se esperaba un resultado igual a 9');
};