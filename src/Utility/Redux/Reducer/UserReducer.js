import { initialState } from '../../Store/Store'
import { USER_ACTIVITY_SUCCESS, USER_ACTIVITY_ERROR, USER_LOGOUT_SUCCESS } from '../Types'

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
            console.log('logoutaskdjhfskldjn',action.payload);
            return{
                ...state,
                user:action.payload
            }
        default:
            return state
    }
}