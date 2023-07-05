//destructuring-objetos
const userPepe = {
    name:"pepe",
    lastname:"perez",
    age:20,
    city:"Miami"
};

// const cityPepe = userPepe.city;
// const agePepe = userPepe.age;

const {age, city} = userPepe;
console.log("age", age);
console.log("city", city);


//spread-operator
const pepeData={
    // name:userPepe.name,
    // age:userPepe.age,
    ...userPepe,
    course:"javascript",
    level:"intermedio",
    grade:4.8
}
console.log("pepeData", pepeData);



//spread-operator-arreglos
const numerosA=[1,2,3,4];
const numerosB=[5,6,7,8];
const arregloCompleto = [...numerosA, ...numerosB,10,12,34];
console.log("arregloCompleto", arregloCompleto);
