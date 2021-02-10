import { initialState } from '../../Store/Store'
import { NUMBER_AVAILABLE_ERROR, NUMBER_AVAILABLE_REQUEST, NUMBER_AVAILABLE_SUCCESS } from '../Types';

export const HomeReducer = (state=initialState,action)=>{
    switch(action.type){
        case NUMBER_AVAILABLE_REQUEST:
            return{    
                ...state,
                loading:true
            }
        case NUMBER_AVAILABLE_SUCCESS:
            return{    
                ...state,
                loading:false,

            }
        case NUMBER_AVAILABLE_ERROR:
            return{    
                ...state,
                loading:false,
                error:action.error,
            }
            default:
                return state
    }
}