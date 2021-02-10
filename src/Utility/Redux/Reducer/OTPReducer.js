import { initialState } from '../../Store/Store'
import { OTP_ERROR, OTP_REQUEST, OTP_SUCCESS } from '../Types';

export const HomeReducer = (state=initialState,action)=>{
    switch(action.type){
        case OTP_REQUEST:
            return{    
                ...state,
                loading:true
            }
        case OTP_SUCCESS:
            return{    
                ...state,
                loading:false,

            }
        case OTP_ERROR:
            return{    
                ...state,
                loading:false,
                error:action.error,
            }
            default:
                return state
    }
}