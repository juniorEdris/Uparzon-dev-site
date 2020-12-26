import { initialState } from "../../Store/Store";
import { FAILED_PRODUCT_SUGGETIONS, GET_PRODUCT_SUGGETIONS } from "../Types";

export const ProdSuggestionReducer=(state=initialState,action)=>{
    switch(action.type){
        case GET_PRODUCT_SUGGETIONS:
            return{
                ...state,
                suggestion:action.suggestions
            }
        case FAILED_PRODUCT_SUGGETIONS:
            return{
                ...state,
                suggestionError:action.error
            }
        default:
            return state
    }
}