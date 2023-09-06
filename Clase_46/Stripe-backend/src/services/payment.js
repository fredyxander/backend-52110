import Stripe from "stripe";

export class PaymentService{
    constructor(){
        this.clientStripe = new Stripe("SECRET STRIPE KEY");
    };

    async createPaymentIntent(paymentInfo){
        const paymentIntent = this.clientStripe.paymentIntents.create(paymentInfo);
        return paymentIntent;
    }
};