import { initialState } from '../../Store/Store'
import { FETCH_VENDOR_PRODUCTS_ERROR, FETCH_VENDOR_PRODUCTS_REQUEST, FETCH_VENDOR_PRODUCTS_SUCCESS } from '../Types'

export const VendorReducer = (state=initialState,action)=>{
    switch(action.type){
        case FETCH_VENDOR_PRODUCTS_REQUEST:
            return{
                loading:true,
            }
        case FETCH_VENDOR_PRODUCTS_SUCCESS:
            return{
                loading:false,
                vendorProduct:action.product,
                error:'',
            }
        case FETCH_VENDOR_PRODUCTS_ERROR:
            return{
                loading:true,
                vendorProduct:[],
                error:action.error,
            }
        default:
            return state
    }
}