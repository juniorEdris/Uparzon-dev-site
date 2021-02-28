import { API, Request } from "../../../PrimarySections/Connections/APILink";
import { SHIPPING_ADDRESS_REQUEST,SHIPPING_ADDRESS_SUCCESS,SHIPPING_ADDRESS_EORROR,SET_SHIPPING_ID_SUCCESS } from "../Types";

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
        type:SET_SHIPPING_ID_SUCCESS,
        address,
    }
}

const user_id = localStorage.getItem('user_id')
export const fetchShippingAddress = () => async (dispatch) => {
    dispatch(shippingAddressLoading())
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
export const deleteAddressItem = (id) =>async (dispatch) => {
    console.log('delete',id);
    await API().post(`${Request.DeleteAddress}&billing_address_id=${id}&user_id=${user_id}`)

}