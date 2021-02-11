import { FAILED_PRODUCT_SUGGETIONS, GET_PRODUCT_SUGGETIONS } from "../Types";
import {API, Request} from '../../../PrimarySections/Connections/APILink'

const getProductSuggest=(suggestions)=>({
    type: GET_PRODUCT_SUGGETIONS,
    suggestions,
})

const getProductSuggestfailed=(error)=>({
    type: FAILED_PRODUCT_SUGGETIONS,
    error,
})

export const FetchProductSuggetions=(id)=>dispatch=>{
    API().get(`${Request.ProductSuggest}${id}`)
        .then(res=>{
            dispatch(getProductSuggest(res.data.data))
        })
        .catch(err=>{
            dispatch(getProductSuggestfailed(err))
        })
}