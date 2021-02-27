import { initialState } from '../../Store/Store'
import { DISTRICTS_ADD_SUCCESS, THANA_ADD_SUCCESS, UNION_ADD_SUCCESS } from '../Types';

export const AllCitiesReducer = (state=initialState,action)=>{
    switch(action.type){
        case DISTRICTS_ADD_SUCCESS:
            return{    
                ...state,
                loading:false,
                allDistricts:action.districts
            }
            case THANA_ADD_SUCCESS:
                return{    
                ...state,
                allThana:action.thana
            }
            case UNION_ADD_SUCCESS:
                return{    
                ...state,
                allUnion:action.union
            }
            default:
                return state
    }
} 