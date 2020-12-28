import { initialState } from '../../Store/Store'
import { REMOVE_QUICK_DES, SHOW_QUICK_DES } from '../Types'

export const QuickViewReducer=(state=initialState,action)=>{
    switch(action.type){
        case SHOW_QUICK_DES :
            return {
                ...state,
                quickView:action.payload.product,
            }
        default:
            return state
    }
}