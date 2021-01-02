import { initialState } from "../../Store/Store";

export const LogInReducer = (state=initialState,action)=>{
    switch(action.type){
        case  'LOG_IN' :
            return{
                ...state
            } 
        default :
            return state
    }
}