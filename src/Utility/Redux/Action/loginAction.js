import Axios from "axios";
import {Request} from '../../../PrimarySections/Connections/APILink'
import { USER_ACTIVITY_SUCCESS,USER_ACTIVITY_ERROR } from "../Types"

const loginRequest=()=>(
    {type: USER_ACTIVITY_SUCCESS}
)
const loginSuccess=()=>(
    {type: USER_ACTIVITY_SUCCESS,payload:true,}
)
const loginError=(error)=>(
    {type: USER_ACTIVITY_ERROR,payload:error,}
)
export const LoginAction=(data)=>(dispatch)=>{
    Axios.post(`${Request.LoginAPI}&mobile=${data.phone}&password=${data.pass}`)
        .then(res=>{
            console.log('res',res.data)
            // dispatch(loginSuccess(res.data))
            localStorage.setItem('user',JSON.stringify({user_id:res.data.user_id,status:res.data.status}))
            localStorage.setItem('user_token',JSON.stringify(res.data.auth_token))
        })
        .catch(err=>{
            console.log('err',err)
            dispatch(loginError(err))
        })
}