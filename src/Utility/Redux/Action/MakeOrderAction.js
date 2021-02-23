import {API, Request} from '../../../PrimarySections/Connections/APILink'
import { MAKE_ORDER_ERROR, MAKE_ORDER_REQUEST, MAKE_ORDER_SUCCESS } from "../Types"

const MakeOrderRequest = ()=>{
    return{
        type: MAKE_ORDER_REQUEST,
        
    }
}
const MakeOrderSuccess = (res)=>{
    return{
        type: MAKE_ORDER_SUCCESS,
        status:res.status,
        message:res.message,
    }
}
const MakeOrderError = (error)=>{
    return{
        type: MAKE_ORDER_ERROR,
        error,
        
    }
}
export const MakeOrderAction = (data)=>async(dispatch)=>{
    dispatch(MakeOrderRequest())
    const url = `${Request.PlaceOrder}`
    // const url = `api/uparzonapp/make_order?cart[72][product_id]=781& cart[72][color]=& total_price=10& shipping_city=Chattogram& shipping_phone=01867301260& total_delivery_charge=120& cart[72][vendor_price]=10& cart[72][size]=& cart[72][price]=10& cart[72][size_qty]=& cart[72][qty]=1& api_key=4e38d8be3269aa17280d0468b89caa4c7d39a699& user_id=1025& packing_cost=0& shipping_email=& cart[72][size_key]=0& rc_adjusted_amount=0.0& shipping_address=kgjcj& shipping_name=Sharif Noor Zisad& payment_method=ssl`
    console.log(url);
    API.post(url)
    .then(res=>{
        console.log('otp',res);
        dispatch(MakeOrderSuccess(res.data))
    }).catch((error)=>{
        console.log(error);
        dispatch(MakeOrderError(error))
    })
}