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

export const fetchSearchProducts = (keywords)=> async (dispatch)=>{
    dispatch(searchProductsRequest())
    const Qry = `${Request.SearchAPI}${keywords}`
    await Axios.get(Qry)
    .then(res=>{
        console.log('===========Search Action=========================');
        console.log(res);
        console.log('====================================');
        dispatch(searchProductsSuccess(res.data))
    }).catch((error)=>{
        dispatch(searchProductsError(error))
    })
}