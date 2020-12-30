import Axios from 'axios'
import { FETCH_VENDOR_PRODUCTS_ERROR, FETCH_VENDOR_PRODUCTS_REQUEST, FETCH_VENDOR_PRODUCTS_SUCCESS } from '../Types'
import {Request} from '../../../PrimarySections/Connections/APILink'


const fetchVendorProdRequest = ()=>{
    return{
        type: FETCH_VENDOR_PRODUCTS_REQUEST,
    }
}
const fetchVendorProdSuccess = (product)=>{
    return{
        type: FETCH_VENDOR_PRODUCTS_SUCCESS,
        product,
    }
}
const fetchVendorProdError = (error)=>{
    return{
        type: FETCH_VENDOR_PRODUCTS_ERROR,
        error,
    }
}


export const fetchVendorProds = (id)=>async (dispatch)=>{
    dispatch(fetchVendorProdRequest())
    // /api/uparzon_store_react/vendordetails/:id
    await Axios.get(`${Request.VendorProducts}/${id}`)
    .then(res=>{
        const prod = res.data
        dispatch(fetchVendorProdSuccess(prod))
    })
    .catch(err=>{
        dispatch(fetchVendorProdError(err.message))
    })
}

