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
        product:res.data,
        pages:res.meta
        // shopBanner:res.banners[0] //need to be fixed
    }
}
const fetchShopProdError = (error)=>{
    return{
        type: FETCH_SHOP_PRODUCTS_ERROR,
        error,
    }
}

export const fetchShopProds = (id,page=1)=>async (dispatch)=>{
    dispatch(fetchShopProdRequset())
    const Qry = `${Request.ShopProducts}?page=${page}&per_page=20&category_id=${id}`
    await Axios.get(Qry)
    .then(res=>{
        dispatch(fetchShopProdSuccess(res.data))
    })
    .catch(err=>{
        dispatch(fetchShopProdError(err.message))
    })
}