import Axios from "axios";
import {Request} from '../../../PrimarySections/Connections/APILink'
import { OTP_SUCCESS,OTP_ERROR, OTP_REQUEST } from "../Types"

const oneTimePassRequest = ()=>{
    return{
        type: OTP_REQUEST,
        
    }
}
const oneTimePassSuccess = (res)=>{
    return{
        type: OTP_SUCCESS,
        
    }
}
const oneTimePassError = ()=>{
    return{
        type: OTP_ERROR,
        
    }
}
export const oneTimePassAction = (otp,number)=>async(dispatch)=>{
    dispatch(oneTimePassRequest())
    Axios.post(`${Request.OTPRegister}otp=${otp}&mobile=${number}`)
    .then(res=>{
        console.log('otp',res);
        dispatch(oneTimePassSuccess(res))
    }).catch((error)=>{
        console.log(error);
        dispatch(oneTimePassError(error))
    })
}