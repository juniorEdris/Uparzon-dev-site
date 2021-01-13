import Axios from 'axios'
import { FETCH_PRODUCTS_ERROR, FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS } from '../Types'
import {Request} from '../../../PrimarySections/Connections/APILink'

const fetchHomeProdsRequest = ()=>{
    return{
        type: FETCH_PRODUCTS_REQUEST,
    }
}
const fetchHomeProdsSuccess = (res)=>{
    return{
        type: FETCH_PRODUCTS_SUCCESS,
        category:res.categories,
        banner:res.slider,
        store:res.store,
        ourProduct:res.ourProducts,
        featuredProduct:res.featuredProducts,
    }
}
const fetchHomeProdsError = (error)=>{
    return{
        type: FETCH_PRODUCTS_ERROR,
        error,
    }
}


export const fetchHomeProds = ()=>async(dispatch)=>{
    dispatch(fetchHomeProdsRequest())
    await Axios.get(Request.Homepage)
        .then(res=>{
            console.log('Action fist',res.data);
            dispatch(fetchHomeProdsSuccess(res.data))  
        }).catch(err=>{
            dispatch(fetchHomeProdsError(err))  
        })
}