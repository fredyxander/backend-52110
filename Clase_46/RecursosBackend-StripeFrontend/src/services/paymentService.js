import { getHeaders } from "../utils/http";
import AxiosClient from "./axiosClient";

const {REACT_APP_BASE_URL,REACT_APP_PAYMENT_ENDPOINT} = process.env;

export default class PaymentService {
    constructor() {
        this.client = new AxiosClient();
    }
    createPaymentIntent = ({productId,callbackSuccess,callbackError}) => {
        //http://localhost:8080/api/payments/payment-intents?id=5
        const requestInfo = {url:`${REACT_APP_BASE_URL}${REACT_APP_PAYMENT_ENDPOINT}/payment-intents?id=${productId}`,callbackSuccess,callbackError};
        this.client.makePostRequest(requestInfo);
    }

    pay = ({body,callbackSuccess,callbackError}) => {
        const requestInfo = {url:`${REACT_APP_BASE_URL}${REACT_APP_PAYMENT_ENDPOINT}/checkout`,body,config:getHeaders(),callbackSuccess,callbackError}
        this.client.makePostRequest(requestInfo);
    }
}