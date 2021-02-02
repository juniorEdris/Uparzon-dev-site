import Axios from 'axios';
import {Request} from '../../../PrimarySections/Connections/APILink'
import { SEARCH_PRODUCTS_REQUEST, SEARCH_PRODUCTS_SUCCESS,SEARCH_PRODUCTS_ERROR } from '../Types';

const searchProductsRequest = () =>(
    {
        type: SEARCH_PRODUCTS_REQUEST,
        loading:true,
    }
    )
    const searchProductsSuccess = (products) =>(
    {
        type: SEARCH_PRODUCTS_SUCCESS,
        loading:false,
        products:products.data
    }
)
    const searchProductsError = (error) =>(
    {
        type: SEARCH_PRODUCTS_ERROR,
        loading:false,
        error,
    }
)

export const fetchSearchProducts = (category_id=null,keywords=null)=> async (dispatch)=>{
    dispatch(searchProductsRequest())
    const Qry = `${Request.SearchAPI}?keyword=${keywords}&category_id=${category_id}`
    await Axios.get(Qry)
    .then(res=>{
        dispatch(searchProductsSuccess(res.data))
    }).catch((error)=>{
        dispatch(searchProductsError(error))
    })
}