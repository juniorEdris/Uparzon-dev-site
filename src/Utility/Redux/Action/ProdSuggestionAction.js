import Axios from "axios";
import { FAILED_PRODUCT_SUGGETIONS, GET_PRODUCT_SUGGETIONS } from "../Types";
import {Request} from '../../../PrimarySections/Connections/APILink'

const getProductSuggest=(suggestions)=>({
    type: GET_PRODUCT_SUGGETIONS,
    suggestions,
})

const getProductSuggestfailed=(error)=>({
    type: FAILED_PRODUCT_SUGGETIONS,
    error,
})

export const FetchProductSuggetions=()=>dispatch=>{
    Axios.get(Request.AllProducts)
        .then(res=>{
            dispatch(getProductSuggest(res.data.data))
        })
        .catch(err=>{
            dispatch(getProductSuggestfailed(err))
        })
}