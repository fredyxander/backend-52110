import { productsDao } from "../daos/index.js";

export class ProductsService{
    static async getProducts(){
        return productsDao.getProducts();
    };

    static async getProductById(id){
        return productsDao.getProductById(id);
    };

    static async createProduct(productInfo){
        return productsDao.createProduct(productInfo);
    };
};