//declarar una variable
var nombre="fredy";
var nombre="pepe";//con var se puede re-declarar variables.
console.log(nombre);

//declaracion con let y const
//con let y const no es posible re-declaracion.
let perro1="tony";
let perro2="toby";
perro1="scooby";
console.log("perro1: ", perro1);

//con const no podemos reasignar
const edadMateo=20;
edadMateo=30;
console.log(edadMateo);