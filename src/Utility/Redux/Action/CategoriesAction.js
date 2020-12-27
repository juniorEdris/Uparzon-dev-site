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
    console.log('cat action active');
    const categories = await Axios.post(Request.Categories)
    .then(res=>{
        return res.data.data
    }).catch((error)=>{
        console.log(error);
    })
    console.log('catAct',categories);
    
    const url = `https://demostore.uparzon.com/api/uparzonapp/get_categories?api_key=4e38d8be3269aa17280d0468b89caa4c7d39a699&category_id=${id}&is_store=1`
    const subCategories= await Axios.post(url)
    .then((res)=>{
        return res.data.data
    })
    dispatch(fetchCategorySuccess(categories,subCategories))
}

// export const fetchSubCategory=(id=33)=>async dispatch=>{ 
//     console.log('catID',id)
//     const url = `/api/uparzonapp/get_categories?api_key=4e38d8be3269aa17280d0468b89caa4c7d39a699&category_id=${id}&is_store=1`
//     await Axios.post(url)
//     .then((res)=>{
//         console.log('subcategories',res.data);
//         dispatch(fetchSubCategorySuccess(res.data))
//     })
// }