import { initialState } from '../../Store/Store'
import { FETCH_SHOP_PRODUCTS_ERROR, FETCH_SHOP_PRODUCTS_REQUEST, FETCH_SHOP_PRODUCTS_SUCCESS, FILTER_PRODUCTS_BY_PRICE, SHOW_PRODUCTS_BY_NUMBER } from '../Types'

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
            case FILTER_PRODUCTS_BY_PRICE:
            return {
                ...state,
                shopProduct: action.product,
                price:action.price
            }
        case SHOW_PRODUCTS_BY_NUMBER:
            return {
                ...state,
                shopProduct: action.product,
                limit:action.limit
            }

        default:
            return state
    }
}