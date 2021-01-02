import Axios from "axios";
import { SIGN_UP_REQUEST, SIGN_UP_SUCCESS } from "../Types"

const SignupRequest=()=>(
    {type: SIGN_UP_REQUEST}
)
const SignupSuccess=()=>(
    {type: SIGN_UP_SUCCESS,payload:'You are now part of this community'}
)
export const SignUpAction=(data)=>(dispatch)=>{
    Axios.post('/api/uparzon_store_react/signup',data)
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
}
