import Axios from 'axios';
import {Request} from '../../../PrimarySections/Connections/APILink'
import { FETCH_CATEGORIES } from '../Types';

const fetchCategorySuccess = (category,subCategory) =>(
    {
        type: FETCH_CATEGORIES,
        category,
        subCategory,
    }
)

// const fetchSubCategorySuccess = (subCategory) =>(
//     {
//         type: FETCH_CATEGORIES,
//         subCategory,
//     }
// )

export const fetchCategories = (id)=> async (dispatch)=>{
    const categories = await Axios.get(Request.Categories)
    .then(res=>{
        return res.data
    }).catch((error)=>{
        console.log(error);
    })
    // Fetch sub categories
    const subCategories= await Axios.get(Request.SubCategory)
    .then((res)=>{
        return res.data
    })
    dispatch(fetchCategorySuccess(categories,subCategories))
}
