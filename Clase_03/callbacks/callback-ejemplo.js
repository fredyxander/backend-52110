//definir los callbacks
const sumar =(num1,num2)=>num1+num2; // const sumar = (num1, num2)=>{return num1+num2}
const multiplicar = (num1,num2)=>num1*num2;
const restar = (num1,num2)=>num1-num2;

//funcion receptora
const operaciones = (numero1, numero2, callback)=>{
    const resultado = callback(numero1,numero2);
    console.log("resultado: ", resultado);
};

operaciones(2,5,sumar);
operaciones(2,8,multiplicar);
operaciones(10,6,restar);