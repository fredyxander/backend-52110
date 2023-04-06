// id (se debe incrementar automáticamente, no enviarse desde el cuerpo)
// title (nombre del producto)
// description (descripción del producto)
// price (precio)
// thumbnail (ruta de imagen)
// code (código identificador)
// stock (número de piezas disponibles)

const fs = require("fs");

class ProductManager{
    constructor(pathName){
        this.path=pathName;
    }

    fileExists(){
        return fs.existsSync(this.path);
    };

    generateId(products){
        let newId;
        if(!products.length){
            newId=1;
        } else{
            newId=products[products.length-1].id+1;
        }
        return newId;
    }

    async addProduct(product){
        try {
            if(this.fileExists()){
                const content = await fs.promises.readFile(this.path,"utf-8");
                const products = JSON.parse(content);
                const productId = this.generateId(products);
                product.id = productId;
                // console.log("product: ", product);
                products.push(product);
                await fs.promises.writeFile(this.path,JSON.stringify(products,null,2));
                return product;
            } else {
                const productId = this.generateId([]);
                product.id = productId;
                // console.log("product: ", product);
                await fs.promises.writeFile(this.path,JSON.stringify([product],null,2));
                return product;
            }
        } catch (error) {
            // console.log(error.message);
            throw new Error(error.message);
        }
    };

    async getProducts(){};

    async getProductById(id){
        try {
            if(this.fileExists()){
                const content = await fs.promises.readFile(this.path,"utf-8");
                const products = JSON.parse(content);
                const product = products.find(item=>item.id === id);
                if(product){
                    return product;
                } else {
                    throw new Error(`El producto con el id ${id} no existe`);
                }
            } else {
                throw new Error("El archivo no existe");
            }
        } catch (error) {
            // console.log(error.message);
            throw new Error(error.message);
        }
    };

    async updateProduct(id,product){
        try {
            if(this.fileExists()){
                const content = await fs.promises.readFile(this.path,"utf-8");
                const products = JSON.parse(content);
                const productIndex = products.findIndex(item=>item.id === id);
                if(productIndex>=0){
                    products[productIndex]={
                        ...products[productIndex],
                        ...product
                    }
                    await fs.promises.writeFile(this.path,JSON.stringify(products,null,2));
                    return `El producto con el id ${id} fue modificado`;
                } else {
                    throw new Error(`El producto con el id ${id} no existe`);
                }
            } else {
                throw new Error("El archivo no existe");
            }
        } catch (error) {
            // console.log(error.message);
            throw new Error(error.message);
        }
    };

    async deleteProduct(id){};
}

//utilizar la clase
const manager = new ProductManager("./products.json");

const funcionPrincipal=async()=>{
    try {
        // const productAdded = await manager.addProduct({title:"nevera",price:1000});
        // console.log("productAdded: ", productAdded);
        // const product1 = await manager.getProductById(5);
        // console.log("product1: ", product1);
        const product2 = await manager.getProductById(2);
        console.log("product2: ", product2);
        const resultado = await manager.updateProduct(2,{price:1600});
        console.log("resultado: ", resultado);
    } catch (error) {
        console.log(error.message);
    }
}
funcionPrincipal();