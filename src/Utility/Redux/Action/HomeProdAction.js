import Axios from 'axios'
import { FETCH_PRODUCTS_ERROR, FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS } from '../Types'
import {Request} from '../../../PrimarySections/Connections/APILink'

const fetchHomeProdsRequest = ()=>{
    return{
        type: FETCH_PRODUCTS_REQUEST,
    }
}
const fetchHomeProdsSuccess = (store,product)=>{
    return{
        type: FETCH_PRODUCTS_SUCCESS,
        store,
        product,


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
    const prods = await Axios.get(Request.HomeProducts)
    const stores = await Axios.get(Request.HomeStores)
        dispatch(fetchHomeProdsSuccess(stores.data.data,prods.data.data))
}