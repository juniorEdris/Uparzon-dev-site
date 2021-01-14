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
        details,
    }
}
const showProductDetailsError = (error)=>(
    {
        type: FETCH_PRODUCT_DETAILS_ERROR,
        error,
    }
)


export const GetProductDetails = (id) => (dispatch,getState)=>{
    dispatch(showProductDetailsRequest())
    const allProducts = getState().homeProducts.ourProduct.slice()
    const details = allProducts.filter(x=>x.id === id)
    console.log('det',details,id);
    
        dispatch(showProductDetailsSuccess(details))
        // dispatch(showProductDetailsError(error))
}