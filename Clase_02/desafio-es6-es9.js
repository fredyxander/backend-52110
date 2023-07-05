const tiendas =  [
	{
		manzanas:3,
		peras:2,
		carne:1,
		jugos:5,
		dulces:2
	},
	{
		manzanas:1,
		sandias:1,
		huevos:6,
		jugos:1,
		panes:4
	}
];

const tienda1 = Object.keys(tiendas[0]);
const tienda2 = Object.keys(tiendas[1]);
const productosTiendas = [...tienda1 , ...tienda2];
// console.log(productosTiendas);
//new SET // crear un coleccion a partir de un arreglo con valores unicos
const productosUnicos = new Set(productosTiendas);
console.log("productosUnicos",productosUnicos);
//convertir una coleccion a un arreglo
const arregloFinal = [...productosUnicos];
console.log("arregloFinal", arregloFinal);




///2. todos los productos vendidos
const tienda1Cantidades = Object.values(tiendas[0]);
const tienda2Cantidades = Object.values(tiendas[1]);
const cantidadesTiendas = [...tienda1Cantidades , ...tienda2Cantidades];
console.log("cantidadesTiendas", cantidadesTiendas);
let resultado=0;
for(let i=0;i<cantidadesTiendas.length;i++){
    resultado +=cantidadesTiendas[i];
}
console.log("resultado", resultado);