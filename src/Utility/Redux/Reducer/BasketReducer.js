import { initialState } from '../../Store/Store'
import { ADD_TO_BASKET } from '../Types'

export const AddBasketReducer = (state=initialState,action) =>{
    switch(action.type){
        case ADD_TO_BASKET :
            console.log('action',action.subCategory);
            return {
                ...state,
                basket:[...state.basket,action.product],
            }
        default:
            return state
    }
}