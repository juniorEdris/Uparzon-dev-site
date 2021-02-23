import { initialState } from '../../Store/Store'
import { USER_ACTIVITY_SUCCESS, USER_ACTIVITY_ERROR, USER_LOGOUT_SUCCESS, USER_REGISTER_SUCCESS } from '../Types'

export const UserReducer = (state=initialState,action) =>{
    switch(action.type){
        case USER_ACTIVITY_SUCCESS :
            return {
                ...state,
                user:true,
            }
        case USER_ACTIVITY_ERROR :
            return {
                ...state,
                user:false,
            }
            case  USER_LOGOUT_SUCCESS :
            return{
                ...state,
                user:action.payload
            }
            case USER_REGISTER_SUCCESS :
                return{
                ...state,
                loading:false,
                user:action.status,
                UserRegisterstatus:action.status,
                userRegMsg:action.message,
            } 
        default:
            return state
    }
}