import { initialState } from '../../Store/Store'
import { SHIPPING_ADDRESS_REQUEST,SHIPPING_ADDRESS_SUCCESS,SHIPPING_ADDRESS_EORROR, SET_SHIPPING_ID_REQUEST,SET_SHIPPING_ID_SUCCESS } from '../Types';

export const BillingAddressReducer = (state=initialState,action)=>{
    switch(action.type){
        case SHIPPING_ADDRESS_REQUEST:
            return{    
                ...state,
                loading:true
            }
        case SHIPPING_ADDRESS_SUCCESS:
            return{    
                ...state,
                loading:false,
                shippingAddresses:action.res,
                error:'',
            }
        case SHIPPING_ADDRESS_EORROR:
            return{    
                ...state,
                loading:false,
                error:action.error,
            }
            case SET_SHIPPING_ID_SUCCESS:
                return{    
                ...state,
                shipping_id:action.address,
            }
            default:
                return state
    }
}