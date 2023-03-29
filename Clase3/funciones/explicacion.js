//funciones declaradas: crear con function
function nombreFuncion(parametro1, parametro2){
    //las llaves son el bloque de la funcion
    //dentro del bloque van las instrucciones de la funcion
    const resultado = parametro1+parametro2;
    return resultado;
};
nombreFuncion(1,2);


//funciones expresadas: son funciones anonimas que se asignan a una variable
//arrow function
// const variable = function(){}
const variable = (parametro1, parametro2)=>{
    const resultado = parametro1+parametro2;
    return resultado;
}
variable(1,2);
//arrow-function:si en el bloque solo hay una linea de codigo, quitar las llaves
const variable2 = (parametro1, parametro2)=> parametro1+parametro2;
//arrow-function: si la funcion recibe solo un parametro, quitar los parentesis ()
const variable3 = parametro1=> parametro1*2;


//funciones anonimas
const numeros = [1,2,3,4];
numeros.forEach((numero)=>{
    console.log(numero);
});