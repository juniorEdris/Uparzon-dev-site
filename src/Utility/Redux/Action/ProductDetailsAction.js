import { FETCH_PRODUCT_DETAILS_ERROR, FETCH_PRODUCT_DETAILS_REQUEST, FETCH_PRODUCT_DETAILS_SUCCESS } from "../Types";
import {API, Request} from '../../../PrimarySections/Connections/APILink'

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
    const user_id = localStorage.getItem('user_id')
    console.log('>>>> details user',user_id)
    dispatch(showProductDetailsRequest())
    await API().get(`${Request.ProductDetails}${id}&user_id=${user_id}`)
    .then(res=>{
        console.log('>>>> details',res,user_id)
        dispatch(showProductDetailsSuccess(res.data))
    })
    .catch(error=> dispatch(showProductDetailsError(error)))
}