import { OrdersService } from "../services/orders.service.js";
import {UsersService} from "../services/users.service.js";
import { BusinessService } from "../services/business.service.js";

export const getOrders = async(req,res)=>{
    try {
        const orders = await OrdersService.getOrders();
        res.json({status:"success", data:orders});
    } catch (error) {
        console.log("getOrders error", error.message);
        res.json({status:"error", message:"No se pudieron obtener las ordenes"})
    }
};

export const getOrderById = async(req,res)=>{
    try {
        res.json({status:"success", message:"get order by id"});
    } catch (error) {
        console.log("getOrderById error", error.message);
        res.json({status:"error", message:"No se pudo obtener la orden"})
    }
};

export const createOrder = async(req,res)=>{
    try {
        const {userId,businessId,products, orderNumber} = req.body;
        const user = await UsersService.getUser(userId);
        const business = await BusinessService.getBusinessById(businessId);
        //obtener los productos del negocio con su id y su precio
        const productsOrder = business.products.filter(product=>products.includes(product.id));
        //calcular el total del pedido
        const total = productsOrder.reduce((acc,i)=>acc = acc +i.price,0);
        const newOrder = {
            orderNumber:orderNumber,
            orderBusiness: businessId,
            orderUser:userId,
            products:products,
            totalPrice:total
        };
        const ordercreated = await OrdersService.createOrder(newOrder);
        res.json({status:"success", data:ordercreated});
    } catch (error) {
        console.log("createOrder error", error.message);
        res.json({status:"error", message:"No se pudo crear la orden"})
    }
};

export const completeOrder = async(req,res)=>{
    try {
        res.json({status:"success", message:"complete order"});
    } catch (error) {
        console.log("completeOrder error", error.message);
        res.json({status:"error", message:"No se pudo procesar la orden"})
    }
};