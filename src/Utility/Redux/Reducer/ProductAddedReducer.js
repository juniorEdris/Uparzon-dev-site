import { initialState } from "../../Store/Store";
import { PRODUCT_ADD_CLEAR,PRODUCT_ADD, PRODUCT_ADD_FINISH } from "../Types";

export const CartAnimationReducer=(state=initialState,action)=>{
    switch(action.type){
        case PRODUCT_ADD_CLEAR:
            return{
                ...state,
                productAdded:action.payload,
            }
        case PRODUCT_ADD:
            return{
                ...state,
                productAdded:action.payload,
                tab:action.tab
            }
        case PRODUCT_ADD_FINISH:
            return{
                ...state,
                productAdded:action.payload
            }
        default:
            return state
    }
}