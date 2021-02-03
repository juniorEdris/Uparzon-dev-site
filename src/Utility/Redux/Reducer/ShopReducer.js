import { initialState } from '../../Store/Store'
import { FETCH_SHOP_PRODUCTS_ERROR, FETCH_SHOP_PRODUCTS_REQUEST, FETCH_SHOP_PRODUCTS_SUCCESS, FILTER_PRODUCTS_BY_PRICE, SHOW_PRODUCTS_BY_NUMBER } from '../Types'

export const ShopReducer = (state=initialState,action)=>{
    switch(action.type){
        
        case FETCH_SHOP_PRODUCTS_REQUEST:
            return{
                ...state,
                loading:true,
            }
            case FETCH_SHOP_PRODUCTS_SUCCESS:
                return{
                ...state,
                loading:false,
                shopProduct:action.product,
                shopProductsPages:action.pages,
                error:'',
            }
            case FETCH_SHOP_PRODUCTS_ERROR:
                return{
                ...state,
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