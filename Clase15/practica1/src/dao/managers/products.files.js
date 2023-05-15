import {__dirname} from "../../utils.js";
import {options} from "../../config/options.js";
import path from "path";

export class ProductsFiles{
    constructor(){
        this.path = path.join(__dirname,`/dao/files/${options.filesystem.products}`)
    };

    async getProducts(){
        return []
    };
    async getProductById(id){};
    async createProduct(product){};
    async updateProduct(id,product){};
    async deleteProduct(id){};
}