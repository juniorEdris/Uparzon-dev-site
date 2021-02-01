import { initialState } from "../../Store/Store";
import { GET_CHILD_CATEGORY } from "../Types";

export const childCategoryReducer=(state=initialState,action)=>{
    switch(action.type){
        case GET_CHILD_CATEGORY:
            return{
                ...state,
                childCategoryList:action.payload
            }
        default:
            return state
    }
}