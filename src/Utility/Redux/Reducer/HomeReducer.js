import { initialState } from '../../Store/Store'
import { FETCH_PRODUCTS_ERROR, FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS } from '../Types';

export const HomeReducer = (state=initialState,action)=>{
    switch(action.type){
        case FETCH_PRODUCTS_REQUEST:
            return{    
                ...state,
                loading:true
            }
        case FETCH_PRODUCTS_SUCCESS:
            return{    
                ...state,
                loading:false,
                homeBanner:action.banner,
                ourProduct:action.product,
                homeStores:action.store,
                error:'',
            }
        case FETCH_PRODUCTS_ERROR:
            console.log(action.error);
            return{    
                ...state,
                loading:false,
                product:[],
                homeStores:[],
                error:action.error,
            }
            default:
                return state
    }
}