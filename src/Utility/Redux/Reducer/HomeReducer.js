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
                homeSliders:action.slider,
                homeStores:action.store,
                ourProduct:action.ourProduct,
                hotCollection:action.hotCollection,
                featuredProduct:action.featuredProduct,
                brandProduct:action.brandProduct,
                error:'',
            }
        case FETCH_PRODUCTS_ERROR:
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