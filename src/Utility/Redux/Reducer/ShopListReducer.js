import { initialState } from '../../Store/Store'
import { FETCH_SHOP_LIST_ERROR, FETCH_SHOP_LIST_REQUEST, FETCH_SHOP_LIST_SUCCESS } from '../Types';

export const ShopListReducer = (state=initialState,action)=>{
    switch(action.type){
        case FETCH_SHOP_LIST_REQUEST:
            return{    
                ...state,
                loading:true
            }
        case FETCH_SHOP_LIST_SUCCESS:
            return{    
                ...state,
                loading:false,
                shopList:action.list,
                shopListPages:action.pages,
                error:'',
            }
        case FETCH_SHOP_LIST_ERROR:
            return{    
                ...state,
                loading:true,
                shopList:[],
                error:action.error,
            }
            default:
                return state
    }
}