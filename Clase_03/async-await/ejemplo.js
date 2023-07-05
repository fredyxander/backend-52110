const dividir = (dividendo, divisor)=>{
    return new Promise((resolve,reject)=>{
        if(divisor === 0){
            //rechazar la operacion, porque no es posbile dividir por 0
            reject("no es posbile dividir por 0");
        } else {
            //poder cumplir la promesa, hacer la division
            resolve(dividendo/divisor);
        }
    })
};

// const funcionAsincronica = async()=>{
//     const resultadoDivision = await dividir(10,2);
//     console.log(resultadoDivision);
//     const multiplacion = resultadoDivision*2;
//     console.log(multiplacion);
// }

// funcionAsincronica()


//manejo errores con async-await
const funcionAsincronica = async()=>{
    try{
        const resultadoDivision = await dividir(10,0);
        console.log(resultadoDivision);
        const multiplacion = resultadoDivision*2;
        console.log(multiplacion);
    }catch(error){
        console.log(error)
    }
}

funcionAsincronica()