import { ordersDao } from "../dao/index.js";

export class OrdersService{
    static async getOrders(){
        return await ordersDao.getOrders();
    };

    static async getOrderById(id){
        return await ordersDao.getOrderById(id);
    };

    static async createOrder(order){
        return await ordersDao.createOrder(order);
    };

    static async updateOrder(id, order){
        return await ordersDao.updateOrder(id,order);
    };
}