// sintaxis del closure
// function funcionPadre(){
//     let variable1;
//     return function(){
//         return resultado;
//     }
// }

// function ahorroBanco(abono){
//     let ahorro=0;
//     ahorro=ahorro+abono;
//     console.log(ahorro);
// };
// ahorroBanco(500);
// ahorroBanco(1000);
// ahorroBanco(1000);

//closures
function ahorroBanco(){
    let ahorro=0;
    return function(abono){
        ahorro=ahorro+abono;
        console.log(ahorro);
    }
};

let ahorroPePe = ahorroBanco();
ahorroPePe(500);
ahorroPePe(500);
ahorroPePe(500);

let ahorroMaria = ahorroBanco();
ahorroMaria(1000);
ahorroMaria(1000);
ahorroMaria(1000);
