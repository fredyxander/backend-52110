// const numeroAleatorio = Math.ceil(Math.random()*20);//1-20
// console.log("numeroAleatorio: ", numeroAleatorio);

//Formas de verificar si una clave dentro de un objeto.
let obj = {1:10,2:30};
//1 forma: obj.hasOwnProperty(3)
// if(obj[3]){
//     console.log("la clave ya existe");
// } else {
//     console.log("la clave no existe");
// }

//Formas de asignar propiedades a un objeto
// let objeto2={};
// objeto2.propiedad="soy una propiedad";
// objeto2['otraPropiedad']="soy otra propiedad";
// console.log("objeto2: ",objeto2);

// {
//     5:200,
//     2:100,
//     13:450,
//     17:300,
// }

let aleatorios={};
for(let i=0;i<10000;i++){
    const numeroAleatorio = Math.ceil(Math.random()*20);//1,4,13,20
    if(aleatorios[numeroAleatorio]){
        aleatorios[numeroAleatorio] +=1;
    }else{
        aleatorios[numeroAleatorio]=1;
    }
};
console.log("aleatorios: ", aleatorios);
console.log(Object.values(aleatorios).reduce((acc,i)=>acc+i,0));