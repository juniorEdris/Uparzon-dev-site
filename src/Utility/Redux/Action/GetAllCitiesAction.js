import { API, Request } from "../../../PrimarySections/Connections/APILink";
import { DISTRICTS_ADD_SUCCESS,THANA_ADD_SUCCESS,UNION_ADD_SUCCESS } from "../Types";

const districtFetchSuccess =(districts)=>{
    return{
        type: DISTRICTS_ADD_SUCCESS,
        districts,
    }
}
const thanaFetchSuccess =(thana)=>{
    return{
        type: THANA_ADD_SUCCESS,
        thana,
    }
}
const unionFetchSuccess =(union)=>{
    return{
        type: UNION_ADD_SUCCESS,
        union,
    }
}

export const fetchAllCities = (thana,union) => async (dispatch,getState) => {

    if(!thana && !union){
        await API().post(Request.CityFetch)
        .then(res=>{
            dispatch(districtFetchSuccess(res.data.data))
        })
    }
    
    if(thana){
        const allThana = getState().allCities.allDistricts.slice().filter(x=>x.id === parseInt(thana))
        dispatch(thanaFetchSuccess(allThana[0].upazilas))
    }
    
    if(union){
        const allUnion = getState().allCities.allThana.slice().filter(x=>x.id===parseInt(union))
        dispatch(unionFetchSuccess(allUnion[0].Unions))
    }
}
export const fetchAllThana = (thana,union) => (dispatch, getState) => {

}
