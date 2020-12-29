import { GET_SUB_CATEGORY } from "../Types";


const getSubCat=(subcat)=>({
    type: GET_SUB_CATEGORY,
    payload:subcat,
})



export const GetSubCategory=(id)=>async (dispatch,getState)=>{
    const subcat = getState().categories.subCategory.slice().filter(x =>x.category_id === id)
    dispatch(getSubCat(subcat))
}