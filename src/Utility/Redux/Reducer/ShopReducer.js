import { initialState } from '../../Store/Store'
import { FETCH_SHOP_PRODUCTS_ERROR, FETCH_SHOP_PRODUCTS_REQUEST, FETCH_SHOP_PRODUCTS_SUCCESS } from '../Types'

export const ShopReducer = (state=initialState,action)=>{
    switch(action.type){
        case FETCH_SHOP_PRODUCTS_REQUEST:
            return{
                loading:true,
            }
        case FETCH_SHOP_PRODUCTS_SUCCESS:
            return{
                loading:false,
                shopProduct:action.product,
                error:'',
            }
        case FETCH_SHOP_PRODUCTS_ERROR:
            return{
                loading:true,
                shopProduct:[],
                error:action.error,
            }
        default:
            return state
    }
}