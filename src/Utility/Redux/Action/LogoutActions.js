import Axios from "axios";
import {Request} from '../../../PrimarySections/Connections/APILink'
import { USER_LOGOUT_SUCCESS,USER_LOGOUT_REQUEST,USER_LOGOUT_ERROR} from "../Types"

// const logoutRequest=()=>(
//     {type: USER_LOGOUT_REQUEST}
// )
const logoutSuccess=()=>(
    {type: USER_LOGOUT_SUCCESS,payload:null,}
)
// const loginError=(error)=>(
//     {type: USER_LOGOUT_ERROR,payload:error,}
// )
export const LogoutAction=()=>(dispatch)=>{
    localStorage.removeItem('user_token')
    console.log('token',!localStorage.getItem('user_token'))
    dispatch(logoutSuccess())
}