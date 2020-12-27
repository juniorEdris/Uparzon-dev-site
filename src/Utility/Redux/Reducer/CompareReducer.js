import { initialState } from '../../Store/Store'
import { ADD_TO_COMPARE, REMOVE_FROM_COMPARE } from '../Types'

export const AddCompareReducer = (state=initialState,action) =>{
    switch(action.type){
        case ADD_TO_COMPARE :
            return {
                compareList:action.payload.product,
            }
        case REMOVE_FROM_COMPARE :
            return {
                ...state,
                compareList:action.payload.product,
            }
        default:
            return state
    }
}