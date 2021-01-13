import Axios from 'axios'
import { FETCH_SHOP_PRODUCTS_ERROR, FETCH_SHOP_PRODUCTS_REQUEST, FETCH_SHOP_PRODUCTS_SUCCESS } from '../Types'
import {Request} from '../../../PrimarySections/Connections/APILink'


const fetchShopProdRequset = ()=>{
    return{
        type: FETCH_SHOP_PRODUCTS_REQUEST,
    }
}
const fetchShopProdSuccess = (res)=>{
    return{
        type: FETCH_SHOP_PRODUCTS_SUCCESS,
        product:res.products,
        shopBanner:res.banners[0] //need to be fixed
    }
}
const fetchShopProdError = (error)=>{
    return{
        type: FETCH_SHOP_PRODUCTS_ERROR,
        error,
    }
}

export const fetchShopProds = ()=>async (dispatch)=>{
    dispatch(fetchShopProdRequset())
    await Axios.get(Request.ShopPage1)
    .then(res=>{
        const prod = res.data
        dispatch(fetchShopProdSuccess(prod))
    })
    .catch(err=>{
        dispatch(fetchShopProdError(err.message))
    })
}