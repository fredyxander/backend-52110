//consigna:realizar una clase “ProductManager” que gestione un conjunto de productos.

//Aspectos a incluir:
// 1. Debe crearse desde su constructor con el elemento products, el cual será un arreglo vacío

// 2.Cada producto que gestione debe contar con las propiedades:
// title (nombre del producto)
// description (descripción del producto)
// price (precio)
// thumbnail (ruta de imagen)
// code (código identificador)
// stock (número de piezas disponibles)

// 3. Debe contar con un método “addProduct” el cual agregará un producto al arreglo de productos inicial.
// Validar que no se repita el campo “code” y que todos los campos sean obligatorios
// Al agregarlo, debe crearse con un id autoincrementable

//4. Debe contar con un método “getProducts” el cual debe devolver el arreglo con todos los productos creados hasta ese momento

//5. Debe contar con un método “getProductById” el cual debe buscar en el arreglo el producto que coincida con el id
// En caso de no coincidir ningún id, mostrar en consola un error “Not found”


class ProductManager{
    constructor(){
        this.products = [];
    }

    addProduct(title, description, price,thumbnail,code,stock){
        if(!title || !description || !price || !thumbnail || !code || !stock){
            return console.log("Todos los campos deben ser obligatorios");
        }
        const codeExists = this.products.some((product)=>product.code === code);
        if(codeExists){
            return console.log("Ya existe un producto con este codigo")
        }
        let newId;
        if(!this.products.length){
            newId=1;
        } else{
            //[1,2,3,4] this.products.length===4-1
            newId = this.products[this.products.length-1].id+1;
        }
        const newProduct = {
            id:newId,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }
        this.products.push(newProduct);
        console.log("nuevo producto agregado", newProduct);
    }

    getProducts(){
        return this.products;
    }

    getProductById(id){
        const productFound = this.products.find((product)=>product.id === id);
        if(!productFound){
            return console.log(`producto no encontrado con el id ${id}`)
        }
        console.log("productFound: ", productFound);
    }
}

const manager1 = new ProductManager();
console.log("manager1: ", manager1);
manager1.addProduct("camisa", "camisa larga", 200,"https://cdn-images.farfetch-contents.com/18/10/83/23/18108323_38660641_1000.jpg","101",50);
manager1.addProduct("camisa 2", "camisa corta", 400,"https://cdn-images.farfetch-contents.com/18/10/83/23/18108323_38660641_1000.jpg","102",100);

manager1.addProduct("abrigo");
manager1.addProduct("camisa 3", "camisa corta", 200,"https://cdn-images.farfetch-contents.com/18/10/83/23/18108323_38660641_1000.jpg","102",70);

console.log("productos manager1: ", manager1.getProducts());

manager1.getProductById(100);
manager1.getProductById(2);