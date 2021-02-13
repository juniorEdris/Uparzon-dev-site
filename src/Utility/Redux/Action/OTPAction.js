import {API, Request} from '../../../PrimarySections/Connections/APILink'
import { OTP_SUCCESS,OTP_ERROR, OTP_REQUEST } from "../Types"

const oneTimePassRequest = ()=>{
    return{
        type: OTP_REQUEST,
        
    }
}
const oneTimePassSuccess = (res)=>{
    return{
        type: OTP_SUCCESS,
        status:res.status,
        message:res.message,
    }
}
const oneTimePassError = (error)=>{
    return{
        type: OTP_ERROR,
        error,
        
    }
}
export const oneTimePassAction = (otp,number)=>async(dispatch)=>{
    dispatch(oneTimePassRequest())
    const url = `${Request.OTPRegister}otp=${otp}&mobile=${0 + number}`
    console.log(url);
    API.post(url)
    .then(res=>{
        console.log('otp',res);
        dispatch(oneTimePassSuccess(res.data))
    }).catch((error)=>{
        console.log(error);
        dispatch(oneTimePassError(error))
    })
}