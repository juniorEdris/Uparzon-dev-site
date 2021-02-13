import {API, Request} from '../../../PrimarySections/Connections/APILink'
import { FETCH_CATEGORIES } from '../Types';

const fetchCategorySuccess = (category) =>(
    {
        type: FETCH_CATEGORIES,
        category,
    }
)


export const fetchCategories = ()=> async (dispatch)=>{
    await API().post(Request.Categories)
    .then(res=>{
        dispatch(fetchCategorySuccess(res.data.data))
    }).catch((error)=>{
        console.log(error.message);
    })
}
