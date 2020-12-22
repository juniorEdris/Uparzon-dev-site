import Axios from 'axios';
import {Request} from '../../../PrimarySections/Connections/APILink'
import { FETCH_CATEGORIES } from '../Types';

const fetchCategorySuccess = (category) =>(
    {
        type: FETCH_CATEGORIES,
        category,
    }
)

const fetchSubCategorySuccess = (subCategory) =>(
    {
        type: FETCH_CATEGORIES,
        subCategory,
    }
)

export const fetchCategories = ()=> async (dispatch)=>{
    await Axios.post(Request.Categories)
    .then(res=>{
        console.log('Categories',res.data.data);
        dispatch(fetchCategorySuccess(res.data.data))
    })
}

export const fetchSubCategory=(id)=>async dispatch=>{
    const url = `https://demostore.uparzon.com/api/uparzonapp/get_categories?api_key=4e38d8be3269aa17280d0468b89caa4c7d39a699&subcategory_id=${id}&is_store=1`
    await Axios.post(url)
    .then((res)=>{
        console.log('subcategories',res.data);
        dispatch(fetchSubCategorySuccess(res.data.data))
    })
}