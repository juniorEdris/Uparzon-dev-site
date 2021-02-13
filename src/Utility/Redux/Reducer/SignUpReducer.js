import { initialState } from "../../Store/Store";
import { SIGN_UP_REQUEST, SIGN_UP_SUCCESS,SIGN_UP_ERROR } from "../Types";

export const SignUpReducer = (state=initialState,action)=>{
    switch(action.type){
        case  SIGN_UP_REQUEST :
            return{
                ...state,
                loading:true,
            } 
            // case  SIGN_UP_SUCCESS :
            //     return{
            //     ...state,
            //     loading:false,
            //     user:action.status,
            // } 
            case  SIGN_UP_ERROR :
                return{
                ...state,
                loading:false,
                UserRegisterstatus:''
            } 
        default :
            return state
    }
}