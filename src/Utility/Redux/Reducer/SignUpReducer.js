import { initialState } from "../../Store/Store";

export const SignUpReducer = (state=initialState,action)=>{
    switch(action.type){
        case  'SIGN_UP' :
            return{
                ...state
            } 
        default :
            return state
    }
}