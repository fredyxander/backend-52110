import { Router } from "express";
import { PaymentService } from "../services/payment.js";

const router = Router();

const mockCart = [
    { id: 1, name: "papas", price: 1000 },
    { id: 2, name: "queso", price: 500 },
    { id: 3, name: "hamburguesa", price: 1500 },
    { id: 4, name: "soda", price: 1000 },
    { id: 5, name: "golosinas", price: 800 }
];

router.post("/payment-intents", async(req,res)=>{
    try {
        const productId = parseInt(req.query.id);
        const product = mockCart.find(p=>p.id === productId);
        if(!product){
            return res.json({error:"Producto no existe"});
        }
        //generar informacion de la compra
        const paymentInfo = {
            amount:product.price,
            currency:"usd",
            metadata:{
                userId:"ObjectId('$kjsghd98123jhasgd87123')",
                address:JSON.stringify({
                    street:"Avenida siempre viva",
                    number:"200",
                    city:"Miami"
                }, null, 2)
            }
        }
        const service = new PaymentService();
        const paymentIntent = await service.createPaymentIntent(paymentInfo);
        console.log("paymentIntent",paymentIntent);
        res.json({status:"success", payload:paymentIntent});
    } catch (error) {
        res.json({error:error.message});
    }
});

export {router as paymentRouter};