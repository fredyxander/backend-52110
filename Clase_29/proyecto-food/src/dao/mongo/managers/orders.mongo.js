import { ordersModel } from "../models/orders.model.js";

export class OrdersMongo{
    constructor(){
        this.model = ordersModel;
    };

    async getOrders(){
        try {
            const orders = await this.model.find();
            return orders;
        } catch (error) {
            throw error
        }
    };

    async getOrderById(orderId){
        try {
            const order = await this.model.findById(orderId);
            if(!order){
                throw new Error("La orden no existe");
            }
            return order;
        } catch (error) {
            throw error
        }
    };

    async createOrder(orderInfo){
        try {
            const orderCreated = await this.model.create(orderInfo);
            return orderCreated;
        } catch (error) {
            throw error
        }
    };

    async updateOrder(orderId,orderInfo){
        try {
            const orderUpdate = await this.model.findByIdAndUpdate(orderId,orderInfo,{new:true});
            return orderUpdate;
        } catch (error) {
            throw error
        }
    };
}