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
export const MakeOrderAction = (arr,billId,vendorId,paymentMethod,rc_adjusted_amount)=>async(dispatch)=>{
    dispatch(MakeOrderRequest())
    console.log('MakeOrderAction',arr,billId,vendorId,paymentMethod,rc_adjusted_amount);
    const user_id = localStorage.getItem('user_id')
    const url = `${Request.MakeOrder} user_id=${user_id}&shipping_name=${billId.name}&shipping_phone=${billId.phone}&shipping_country=${null}&shipping_district_id=${billId.district_id}&shipping_upazilla_id=${billId.upazila_id}&shipping_union_id=${billId.union_id}&shipping_city=${null}&shipping_zip=${null}&billing_address_id=${billId.id}&coupon_discount=${null}&rc_adjusted_amount=${rc_adjusted_amount}&shipping_email=${billId.email}&payment_method=${paymentMethod}&tax=${null}&packing_cost=${null}&coupon_id=${null}&cart=${JSON.stringify(arr)}&total_delivery_charge=${120}`
    // ========
    // address: "Talukdar bari,Battali,Maddam Madarsha"
    // district: "Bogura"
    // district_id: 14
    // email: null
    // id: 7
    // name: "Rizia Begum"
    // note: null
    // phone: "01846029691"
    // union: "Nasaratpur"
    // union_id: 1154
    // upazila: "Adamdighi"
    // upazila_id: 127
    // user_id: 6318
    // =======
    console.log(url);
    // API.post(url)
    // .then(res=>{
    //     console.log('otp',res);
    //     dispatch(MakeOrderSuccess(res.data))
    // }).catch((error)=>{
    //     console.log(error);
    //     dispatch(MakeOrderError(error))
    // })
}