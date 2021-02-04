import { initialState } from '../../Store/Store'
import { SEARCH_PRODUCTS_ERROR, SEARCH_PRODUCTS_REQUEST, SEARCH_PRODUCTS_SUCCESS } from '../Types';

export const SearchReducer = (state=initialState,action)=>{
    switch(action.type){
        case SEARCH_PRODUCTS_REQUEST:
            return{    
                ...state,
                loading:true
            }
        case SEARCH_PRODUCTS_SUCCESS:
            return{    
                ...state,
                loading:false,
                searchedResponse:action.products,
                searchPages:action.pages,
                error:'',
            }
        case SEARCH_PRODUCTS_ERROR:
            return{    
                ...state,
                loading:false,
                error:action.error,
            }
            default:
                return state
    }
}