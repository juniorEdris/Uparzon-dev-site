import {API, Request} from '../../../PrimarySections/Connections/APILink'
import { USER_ACTIVITY_SUCCESS,USER_ACTIVITY_ERROR } from "../Types"

const loginRequest=()=>(
    {type: USER_ACTIVITY_SUCCESS}
)
const loginSuccess=(id)=>(
    {type: USER_ACTIVITY_SUCCESS,payload:true,}
)
const loginError=(error)=>(
    {type: USER_ACTIVITY_ERROR,payload:error,}
)
export const LoginAction=(data)=>(dispatch)=>{
    API().post(`${Request.LoginAPI}&mobile=${data.phone}&password=${data.pass}`)
        .then(res=>{
            console.log('res',res.data)
            // dispatch(loginSuccess(res.data))
            res.data.user_id && localStorage.setItem('user_id',JSON.stringify(res.data.user_id))
            res.data.auth_token && localStorage.setItem('user_token',JSON.stringify(res.data.auth_token))
            const active = localStorage.getItem('user_id')
            active && dispatch(loginSuccess(active))
        })
        .catch(err=>{
            console.log('err',err)
            dispatch(loginError(err.message))
        })
}