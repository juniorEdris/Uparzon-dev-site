import Axios from "axios";
import { FETCH_PRODUCT_DETAILS_ERROR, FETCH_PRODUCT_DETAILS_REQUEST, FETCH_PRODUCT_DETAILS_SUCCESS } from "../Types";
import {Request} from '../../../PrimarySections/Connections/APILink'

const showProductDetailsRequest = ()=>(
    {
        type: FETCH_PRODUCT_DETAILS_REQUEST,
    }
)

const showProductDetailsSuccess = (details)=>{
    return{
        type: FETCH_PRODUCT_DETAILS_SUCCESS,
        details:details.data,
    }
}
const showProductDetailsError = (error)=>(
    {
        type: FETCH_PRODUCT_DETAILS_ERROR,
        error,
    }
)

export const GetProductDetails = (id) => async dispatch=>{
    dispatch(showProductDetailsRequest())
    const user_id = localStorage.getItem('user_id')
    console.log('====================================');
    console.log('yser',user_id);
    console.log(Request.ProductDetails,id,user_id)
    console.log('====================================');
    await Axios.get(`${Request.ProductDetails}${id}${user_id ?`?user_id=${user_id}` :``}`)
    .then(res=>{
        dispatch(showProductDetailsSuccess(res.data))
    })
    .catch(error=> dispatch(showProductDetailsError(error)))
}