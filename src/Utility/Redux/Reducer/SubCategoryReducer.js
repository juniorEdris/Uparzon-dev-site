import { initialState } from "../../Store/Store";
import { GET_SUB_CATEGORY } from "../Types";

export const subcategoryReducer=(state=initialState,action)=>{
    switch(action.type){
        case GET_SUB_CATEGORY:
            return{
                ...state,
                subCategoryList:action.payload
            }
        default:
            return state
    }
}