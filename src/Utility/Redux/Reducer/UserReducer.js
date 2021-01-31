import { initialState } from '../../Store/Store'
import { USER_ACTIVITY_SUCCESS, USER_ACTIVITY_ERROR } from '../Types'

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
        default:
            return state
    }
}