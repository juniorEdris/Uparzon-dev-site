/* 

    CONNECTED TO USERREDUCER.JS FILE

*/
import { API, Request } from "../../../PrimarySections/Connections/APILink"
import { SIGN_UP_ERROR, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, USER_REGISTER_SUCCESS } from "../Types"

const SignupRequest=()=>(
    {type: SIGN_UP_REQUEST}
)
const SignupSuccess=(res)=>(
    {
        type: USER_REGISTER_SUCCESS,
        status:res.status,
        message:res.message
    }
)
const SignupError=(err)=>(
    {
        type: SIGN_UP_ERROR,
        error:err,
    }
)
export const SignUpAction=(data)=>(dispatch)=>{
    dispatch(SignupRequest)
    API().post(`${Request.UserRegister}?mobile=${data.phone}&password=${data.new_password}&first_name=${data.first_name}&last_name=${data.last_name}`)
        .then(res=>{
            console.log(res)
            res.data.user_id && localStorage.setItem('user_id',JSON.stringify(res.data.user_id))
            res.data.auth_token && localStorage.setItem('user_token',JSON.stringify(res.data.auth_token))
            dispatch(SignupSuccess(res.data))
        })
        .catch(err=>{
            console.log(err)
            dispatch(SignupError(err))
        })
}
