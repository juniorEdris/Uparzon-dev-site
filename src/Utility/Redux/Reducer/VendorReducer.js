import { initialState } from '../../Store/Store'
import { FETCH_VENDOR_DETAILS_ERROR, FETCH_VENDOR_DETAILS_REQUEST, FETCH_VENDOR_DETAILS_SUCCESS, FETCH_VENDOR_PRODUCTS_ERROR, FETCH_VENDOR_PRODUCTS_REQUEST, FETCH_VENDOR_PRODUCTS_SUCCESS } from '../Types'

export const VendorReducer = (state=initialState,action)=>{
    switch(action.type){
        case FETCH_VENDOR_PRODUCTS_REQUEST:
            return{
                loading:true,
            }
        case FETCH_VENDOR_PRODUCTS_SUCCESS:
            return{
                loading:false,
                vendorProduct:action.products,
                vendorDetails:action.details,
                vendorCategories:action.categories,
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
export const VendorDetailsReducer = (state=initialState,action)=>{
    switch(action.type){
        case FETCH_VENDOR_DETAILS_REQUEST:
            return{
                loading:true,
            }
        case FETCH_VENDOR_DETAILS_SUCCESS:
            return{
                loading:false,
                vendorDetail:action.details,
                error:'',
            }
        case FETCH_VENDOR_DETAILS_ERROR:
            return{
                loading:true,
                vendorDetail:[],
                error:action.error,
            }
        default:
            return state
    }
}