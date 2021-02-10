import Axios from "axios";
import {Request} from '../../../PrimarySections/Connections/APILink'
import { NUMBER_AVAILABLE_REQUEST,NUMBER_AVAILABLE_SUCCESS,NUMBER_AVAILABLE_ERROR } from "../Types"

const numberAvailableRequest = (res)=>{
    return{
        type: NUMBER_AVAILABLE_REQUEST,
        
    }
}
const numberAvailableSuccess = (res)=>{
    return{
        type: NUMBER_AVAILABLE_SUCCESS,
        
    }
}
const numberAvailableError = ()=>{
    return{
        type: NUMBER_AVAILABLE_ERROR,
        
    }
}
export const numberAvailableAction = (otp,number)=>async(dispatch)=>{
    dispatch(numberAvailableRequest())
    Axios.post(`${Request.OTPRegister}otp=${otp}&mobile=${number}`)
    .then(res=>{
        console.log('otp',res);
        dispatch(numberAvailableSuccess(res))
    }).catch((error)=>{
        console.log(error);
        dispatch(numberAvailableError(error))
    })
}