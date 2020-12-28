import { initialState } from '../../Store/Store'
import { ADD_TO_WISHLIST,REMOVE_FROM_WISHLIST } from '../Types'

export const AddWishReducer = (state=initialState,action) =>{
    switch(action.type){
        case ADD_TO_WISHLIST :
            return {
                wishList:action.payload.product,
            }
        case REMOVE_FROM_WISHLIST :
            return {
                ...state,
                wishList:action.payload.product,
            }
        default:
            return state
    }
}