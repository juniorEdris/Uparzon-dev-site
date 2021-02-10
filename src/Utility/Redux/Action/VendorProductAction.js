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
        details:res.vendor,
        pages:res.meta,
    }
}
const fetchVendorProdError = (error)=>{
    return{
        type: FETCH_VENDOR_PRODUCTS_ERROR,
        error,
    }
}


export const fetchVendorProds = (id,page,cat_id,subcat_id,childcat_id)=>async (dispatch)=>{
    console.log('=====================Vendor===============');
    console.log(id,page,cat_id,subcat_id,childcat_id);
    console.log('====================================');
    dispatch(fetchVendorProdRequest())
    await Axios.get(`${Request.SingleVendor}?page=${page}&per_page=10&category_id=${cat_id}&subcategory_id=${subcat_id}&childcategory_id=${childcat_id}&vendor_id=${id}`)
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

