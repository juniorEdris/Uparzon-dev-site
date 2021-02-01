import Axios from "axios";
import {Request} from '../../../PrimarySections/Connections/APILink'
import { GET_SUB_CATEGORY } from "../Types";


const getSubCat=(subcat)=>({
    type: GET_SUB_CATEGORY,
    payload:subcat,
})



export const GetSubCategory=(id)=>async (dispatch)=>{
    Axios.post(`${Request.SubCategory}${id}`)
    .then(res=>{

        dispatch(getSubCat(res.data.data))
    })
    .catch((error)=>{
        console.log(error.message);
    })
}