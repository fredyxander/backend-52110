
// if(true){
//     var nombre="pepe";
//     console.log("1",nombre);
// }
// console.log("2",nombre);

//scope global
let fruit="pera";
if(true){
    console.log("1", fruit);
}
console.log("2", fruit);

//scope de funcion
function getFruits(){
    let fruit2="manzana";
    if(true){
        console.log(fruit2);
    }
}
getFruits();
console.log("2", fruit2);//output Error


//scope de bloque
let price=00000;
function getFruits(){
    let fruit2="manzana";
    let price=9999999999;
    if(true){
        let price=200;
        console.log(fruit2);
        console.log(price);//scope de bloque o local
    }
    console.log("2", price);//scope de funcion
}
getFruits();
console.log("3", price);//scope global