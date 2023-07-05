// let numero1=1;
// let numero2=2;

// let suma1 = numero1+numero2;
// let suma2 = 89+78;
// let suma3 =numero1+100;

//paramatros son los datos que necesita la funcion para ejecutar la accion.
function sumar(numero1, numero2){
    //instruccion de la funcion
    const suma=numero1+numero2;
    console.log(suma);
}

sumar(10,5);
sumar(20,30);


//las funciones pueden o no retornar un resultado
function multiplicar(numero1, numero2){
    //instruccion de la funcion
    const resultado=numero1*numero2;
    return resultado;
}

const res = multiplicar(2,5);
console.log(res/2);