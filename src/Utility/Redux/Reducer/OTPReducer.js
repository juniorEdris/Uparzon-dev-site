import { initialState } from '../../Store/Store'
import { OTP_ERROR, OTP_REQUEST, OTP_SUCCESS } from '../Types';

export const OTPReducer = (state=initialState,action)=>{
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
                OTPConfirmedstatus:action.status,
                OTPConfirmedMessage:action.status,

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