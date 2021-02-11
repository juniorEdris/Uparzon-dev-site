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
    dispatch(showProductDetailsRequest())
    await API().get(`${Request.ProductDetails}${id}`)
    .then(res=>{
        dispatch(showProductDetailsSuccess(res.data))
    })
    .catch(error=> dispatch(showProductDetailsError(error)))
}