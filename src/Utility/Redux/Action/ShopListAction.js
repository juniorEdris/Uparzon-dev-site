import {API, Request} from '../../../PrimarySections/Connections/APILink'
import { FETCH_SHOP_LIST_REQUEST, FETCH_SHOP_LIST_SUCCESS, FETCH_SHOP_LIST_ERROR} from '../Types'

const fetchShopListRequest= ()=>{
    return {
        type: FETCH_SHOP_LIST_REQUEST
    }
}

const fetchShopListSuccess =(list)=>{
    return{
        type: FETCH_SHOP_LIST_SUCCESS,
        list:list.data,
        pages:list.meta
    }
}

const fetchShopListErorr =(error)=>{
    return{
        type: FETCH_SHOP_LIST_ERROR,
        error,
    }
}


export const fetchShopList = () => async dispatch=>{
    dispatch(fetchShopListRequest())
    await API().get(Request.AllShop)
    .then(res=>{
        const lists = res.data
        dispatch(fetchShopListSuccess(lists))
    })
    .catch(err=>{
        fetchShopListErorr(err.message)
    })
}