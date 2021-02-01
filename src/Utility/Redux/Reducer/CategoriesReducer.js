import { initialState } from '../../Store/Store'
import { FETCH_CATEGORIES } from '../Types'

export const CategoriesReducer = (state=initialState,action) =>{
    switch(action.type){
        case FETCH_CATEGORIES :
            return {
                ...state,
                categoryList:action.category,
            }
        default:
            return state
    }
}
