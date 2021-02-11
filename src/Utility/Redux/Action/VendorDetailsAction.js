import {API, Request} from '../../../PrimarySections/Connections/APILink'
import { FETCH_VENDOR_DETAILS_ERROR, FETCH_VENDOR_DETAILS_REQUEST, FETCH_VENDOR_DETAILS_SUCCESS } from "../Types";


const fetchVendorProdRequest = ()=>{
    return{
        type: FETCH_VENDOR_DETAILS_REQUEST,
    }
}

const fetchVendorDetailsSuccess = (details)=>{
    return{
        type: FETCH_VENDOR_DETAILS_SUCCESS,
        details,
    }
}

const fetchVendorDetailsError = (error)=>{
    return{
        type: FETCH_VENDOR_DETAILS_ERROR,
        error,
    }
}

export const fetchVendorDetails =(id)=>async dispatch=>{
    dispatch(fetchVendorProdRequest())
    await API.get(`${Request.VendorDetails}/${id}`)
    .then(res=>{
        const details = res.data[0]
        dispatch(fetchVendorDetailsSuccess(details))
    })
    .catch(err=>{
        dispatch(fetchVendorDetailsError(err.message))
    })
}