import { initialState } from '../../Store/Store'
import { DASHBOARD_DATA_LOADING,DASHBOARD_DATA_SUCCESS,DASHBOARD_DATA_ERROR } from '../Types';

export const DashboardReducer = (state=initialState,action)=>{
    switch(action.type){
        case DASHBOARD_DATA_LOADING:
            return{    
                ...state,
                loading:true
            }
        case DASHBOARD_DATA_SUCCESS:
            return{    
                ...state,
                loading:false,
                DashBoardData:action.details,
            }
        case DASHBOARD_DATA_ERROR:
            return{    
                ...state,
                loading:false,
                error:action.error,
            }
            default:
                return state
    }
} 