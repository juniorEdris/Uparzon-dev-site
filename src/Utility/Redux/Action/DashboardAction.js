import {API, Request} from '../../../PrimarySections/Connections/APILink'
import { DASHBOARD_DATA_ERROR, DASHBOARD_DATA_LOADING, DASHBOARD_DATA_SUCCESS } from "../Types"

const DashboardRequest = (res)=>{
    return{
        type: DASHBOARD_DATA_LOADING,
    }
}
const DashboardSuccess = (data)=>{
    return{
        type: DASHBOARD_DATA_SUCCESS,
        details:data,
    }
}
const DashboardError = (error)=>{
    return{
        type: DASHBOARD_DATA_ERROR,
        error,
    }
}
export const DashboardAction = ()=>async(dispatch)=>{
    dispatch(DashboardRequest())
    const user_id = localStorage.getItem('user_id')
    await API().post(`${Request.Dashboard}?user_id=${user_id}`)
    .then(res=>{
        console.log('dashboard',res,res.data);
        dispatch(DashboardSuccess(res.data))
    }).catch((error)=>{
        console.log(error);
        dispatch(DashboardError(error))
    })
}