import { API,Request } from "../../../PrimarySections/Connections/APILink";
import {CART_CHECK_REQUEST, CART_CHECK_SUCCESS, CART_CHECK_ERROR } from "../Types";

const cartCheckRequest = ()=>(
    {
        type: CART_CHECK_REQUEST,
    }
)
const cartCheckSuccess = (cart)=>(
    {
        type: CART_CHECK_SUCCESS,
        cart,
    }
)

const cartCheckError = (error)=>(
    {
        type: CART_CHECK_ERROR,
        error,
    }
)

export const CartProdCheckAction = (cartProductsId,cartProductsCount)=>async dispatch=>{
    dispatch(cartCheckRequest())
    const Url = `${Request.CartAPI}product_ids=${JSON.stringify(cartProductsId)}&product_quantities=${JSON.stringify(cartProductsCount)}`
    await API().post(Url)
    .then(res=>{
        dispatch(cartCheckSuccess(res.data))
    })
    .catch(err=>{
        console.log(err.response)
        dispatch(cartCheckError())
    })
}