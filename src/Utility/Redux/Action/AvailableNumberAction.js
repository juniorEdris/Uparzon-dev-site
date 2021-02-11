import Axios from "axios";
import {Request} from '../../../PrimarySections/Connections/APILink'
import { NUMBER_AVAILABLE_REQUEST,NUMBER_AVAILABLE_SUCCESS,NUMBER_AVAILABLE_ERROR } from "../Types"

const numberAvailableRequest = (res)=>{
    return{
        type: NUMBER_AVAILABLE_REQUEST,
        
    }
}
const numberAvailableSuccess = (number)=>{
    return{
        type: NUMBER_AVAILABLE_SUCCESS,
        number:number,
        // status:res.status,
    }
}
const numberAvailableError = (error)=>{
    return{
        type: NUMBER_AVAILABLE_ERROR,
        error,
    }
}
export const numberAvailableAction = (number)=>async(dispatch)=>{
    dispatch(numberAvailableRequest())
    dispatch(numberAvailableSuccess(number))
    // await Axios.post(`${Request.RegisterNumber}?mobile=${number}&type=1`)
    // .then(res=>{
    //     console.log('otp',res);
    // }).catch((error)=>{
    //     console.log(error);
    //     dispatch(numberAvailableError(error))
    // })
}