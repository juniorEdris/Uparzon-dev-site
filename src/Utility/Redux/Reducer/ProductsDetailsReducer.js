import { initialState } from "../../Store/Store";
import { FETCH_PRODUCT_DETAILS_ERROR, FETCH_PRODUCT_DETAILS_REQUEST, FETCH_PRODUCT_DETAILS_SUCCESS } from "../Types";

export const ProductDetailsReducer=(state=initialState,action)=>{
    switch(action.type){
        case FETCH_PRODUCT_DETAILS_REQUEST:
            return{
                ...state,
                loading:true,
                product:[],
            }
            case FETCH_PRODUCT_DETAILS_SUCCESS:
                return{
                    ...state,
                    loading:false,
                    product:action.details,
            }
            case FETCH_PRODUCT_DETAILS_ERROR:
                return{
                    ...state,
                    loading:true,
                    product:[],
            }
        default:
            return state
    }
}