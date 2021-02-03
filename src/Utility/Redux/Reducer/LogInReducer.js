import { initialState } from "../../Store/Store";
import { USER_ACTIVITY_SUCCESS,USER_ACTIVITY_ERROR, USER_LOGOUT_SUCCESS } from "../Types"

export const LogInReducer = (state=initialState,action)=>{
    switch(action.type){
        case  USER_ACTIVITY_SUCCESS :
            return{
                ...state,
                user:action.payload
            }
            case USER_ACTIVITY_ERROR :
                return{
                    ...state,
                    error:'No User'
                }
            case USER_LOGOUT_SUCCESS :
                return{
                    ...state,
                    user:action.payload,
                } 
        default :
            return state
    }
}