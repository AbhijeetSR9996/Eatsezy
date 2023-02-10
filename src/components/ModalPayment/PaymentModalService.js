import Axios from "axios";
import { Server } from "../../global";

export const applyVoucher = (cartId, voucherId) => Axios.post(`${Server.BASE_URL}/carts/${cartId}/voucherId/${voucherId}`);

export const placeOrder = (myUserId, deliveryType, currencyType) => {
    const postData = {
        paymentMode: "ONLINE",
        deliveryType: deliveryType,
    };
    return Axios.post(`${Server.BASE_URL}/orders/userId/${myUserId}`, postData);
};

export const applyOrderReferral = (orderReferral, myUserId) => Axios.put(`${Server.BASE_URL}/carts/${myUserId}/applyOrderReferralCode/${orderReferral}`);