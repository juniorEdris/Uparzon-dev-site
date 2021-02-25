import { initialState } from '../../Store/Store'
import { ADD_TO_BASKET, REMOVE_FROM_BASKET } from '../Types'

export const AddBasketReducer = (state=initialState,action) =>{
    switch(action.type){
        case ADD_TO_BASKET :
            console.log('basket reducer',action.payload.product);
            return {
                basket:action.payload.product,
            }
        case REMOVE_FROM_BASKET :
            return {
                ...state,
                basket:action.payload.product,
            }
        default:
            return state
    }
}