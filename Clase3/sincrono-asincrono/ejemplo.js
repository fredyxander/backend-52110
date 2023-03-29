//dos personas, el primero hace una order con una ensalada, una pasta y un jugo, y la segunda persona hace su orden con una ensalada, una carne, y un jugo
// ensalada = 15 min
// pasta = 30min
// carne=50min
// jugo=10min

//sincrono
// console.log("ensalada lista"); //15
// console.log("pasta lista"); //30
// console.log("jugo listo");//10
// console.log("ensalada lista");//15
// console.log("carne lista");//50
// console.log("jugo listo");//10 ->130 minutos para poder tener el jugo el segundo usuario.


//asincrona
setTimeout(() => {
    console.log("ensalada lista");
}, 1500);

setTimeout(() => {
    console.log("pasta lista");
}, 3000);

setTimeout(() => {
    console.log("jugo lista");
}, 1000);

setTimeout(() => {
    console.log("ensalada lista");
}, 1500);

setTimeout(() => {
    console.log("carne lista");
}, 5000);

setTimeout(() => {
    console.log("jugo lista");
}, 1000);