import Axios from "axios";
import {Request} from '../../../PrimarySections/Connections/APILink'
import { GET_CHILD_CATEGORY } from "../Types";


const getChildCat=(childcat)=>({
    type: GET_CHILD_CATEGORY,
    payload:childcat,
})



export const GetChildCategory=(id)=>async (dispatch)=>{
    Axios.post(`${Request.ChildCategory}${id}`)
    .then(res=>{
        dispatch(getChildCat(res.data.data))
    })
    .catch((error)=>{
        console.log(error.message);
    })
}