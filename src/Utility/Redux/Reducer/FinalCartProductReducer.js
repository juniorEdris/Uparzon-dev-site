import { initialState } from '../../Store/Store'
import { ADD_TO_CHECKOUT } from '../Types';

export const FinalCartReducer = (state=initialState,action)=>{
    switch(action.type){
        
        case ADD_TO_CHECKOUT:
            return{    
                ...state,
                finalCart:action.products,
            }
            default:
                return state
    }
} 