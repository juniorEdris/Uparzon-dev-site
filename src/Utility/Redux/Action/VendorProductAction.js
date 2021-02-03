import Axios from 'axios'
import { FETCH_VENDOR_PRODUCTS_ERROR, FETCH_VENDOR_PRODUCTS_REQUEST, FETCH_VENDOR_PRODUCTS_SUCCESS } from '../Types'
import {Request} from '../../../PrimarySections/Connections/APILink'


const fetchVendorProdRequest = ()=>{
    return{
        type: FETCH_VENDOR_PRODUCTS_REQUEST,
    }
}
const fetchVendorProdSuccess = (res)=>{
    return{
        type: FETCH_VENDOR_PRODUCTS_SUCCESS,
        products:res.products.data,
        categories:res.categories,
        details:res.vendor
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
    await Axios.get(`${Request.SingleVendor}?vendor_id=${id}&per_page=10`)
    .then(res=>{
        const prod = res.data
        console.log('=====================Vendor===============');
        console.log(prod);
        console.log('====================================');
        dispatch(fetchVendorProdSuccess(prod))
    })
    .catch(err=>{
        dispatch(fetchVendorProdError(err.message))
    })
}

