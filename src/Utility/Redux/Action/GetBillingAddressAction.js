import { API, Request } from "../../../PrimarySections/Connections/APILink";
import { SHIPPING_ADDRESS_REQUEST,SHIPPING_ADDRESS_SUCCESS,SHIPPING_ADDRESS_EORROR,SET_SHIPPING_ID } from "../Types";

const shippingAddressLoading =()=>{
    return{
        type: SHIPPING_ADDRESS_REQUEST,
        }
}
const shippingAddressSuccess =(res)=>{
    return{
        type: SHIPPING_ADDRESS_SUCCESS,
        res,
    }
}
const shippingAddressError =(error)=>{
    return{
        type: SHIPPING_ADDRESS_EORROR,
        error,
    }
}

const setShippingId =(address)=>{
    return{
        type:SET_SHIPPING_ID,
        address,
    }
}

export const fetchShippingAddress = () => async (dispatch) => {
    dispatch(shippingAddressLoading())
    const user_id = localStorage.getItem('user_id')
    await API().get(`${Request.GetShippingAddress}&user_id=${user_id}`)
    .then(res=>{
        dispatch(shippingAddressSuccess(res.data.data))
    }).catch(error=>{
        console.log(error.Response);
        dispatch(shippingAddressError(error.Response))
    })
}

export const setShippingAddress = (address) =>(dispatch) => {
    dispatch(setShippingId(address))
}