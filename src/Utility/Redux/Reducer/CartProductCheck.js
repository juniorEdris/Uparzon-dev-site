import { initialState } from '../../Store/Store'
import { CART_CHECK_ERROR, CART_CHECK_REQUEST, CART_CHECK_SUCCESS, } from '../Types';

export const CartCheckReducer = (state=initialState,action)=>{
    switch(action.type){
        case CART_CHECK_REQUEST:
            return{    
                ...state,
                loading:true
            }
        case CART_CHECK_SUCCESS:
            return{    
                ...state,
                loading:false,
                cartProducts:action.cart
            }
        case CART_CHECK_ERROR:
            return{    
                ...state,
                loading:false,
                error:action.error,
            }
            default:
                return state
    }
} 