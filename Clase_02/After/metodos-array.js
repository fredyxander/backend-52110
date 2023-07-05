// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

//map: Crea un nuevo arreglo apartir de un arreglo original, donde se agregar los elementos del arreglo original pero modificados
const numeros=[1,2,3,4];
// const numerosDuplicados = numeros.map((numero)=>{return numero*2});
const numerosDuplicados = numeros.map(numero=>numero*2);
console.log("original: ", numeros, "nuevoArreglo: ", numerosDuplicados);
//map:extraemos los valores de los nombre de cada objeto
const people = [{name:"pepe", age:20},{name:"juan", age:40},{name:"ana", age:30}];
const nombres =people.map((person)=>person.name);
console.log("nombres: ", nombres);


//find: me devuelve el primero elemento que cumple una condicion dentro del arreglo.
const numerosB=[1,2,3,4,5,6,7];
const numeroMayor3 = numerosB.find((elm)=>elm>3);
console.log("numeroMayor3: ", numeroMayor3);
const peopleB = [{name:"pepe", age:20},{name:"juan", age:40},{name:"ana", age:35}];
const personaMayorDe30 = peopleB.find((person)=>person.age>30);
console.log("personaMayorDe30: ", personaMayorDe30);


//filter: me devuelve un arreglo con todos los elementos que cumplen una condicion dentro del arreglo
const numerosC=[1,2,3,4,5,6,7];
const numerosMayores3 = numerosC.filter((elm)=>elm>3);
console.log("numerosMayores3: ", numerosMayores3);
const peopleC = [{name:"pepe", age:20},{name:"juan", age:40},{name:"ana", age:35}];
const personasMayoresDe30 = peopleC.filter((person)=>person.age>30);
console.log("personasMayoresDe30: ", personasMayoresDe30);


//reduce:
const arreglo=[1,2,3,4,5,6,7];
// let result=0;
// for(let i=0;i<arreglo.length;i++){
//     result = result + arreglo[i];
//     // result +=arreglo[i];
// }
const result = arreglo.reduce((accumulator, currentValue)=>{accumulator+currentValue},0);
console.log("result: ", result);
//Pruebas de escritorio:
// accumulator:0
// currentValue:1
// resultadoOperacion:1

// accumulator:1
// currentValue:2
// resultadoOperacion:3

// accumulator:3
// currentValue:3
// resultadoOperacion:6