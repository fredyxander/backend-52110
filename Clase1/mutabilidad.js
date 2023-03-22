//mutabilidad con objetos
const person = {
    name:"fredy",
    city:"Bogota"
};

//cons const no se puede reasignar
// person={name:"Laura"};
// console.log(person);

//Es posible mutar la variable,es decir cambiar sus porpiedades internas
person.city="Buenos aires";
console.log(person);



//mutabilidad con arreglos
const numeros =[1,2,3];
// numeros=[4,5,6];
// console.log(numeros);

numeros[0]=100;
console.log(numeros);