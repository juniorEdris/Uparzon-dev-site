import Axios from 'axios';
import React,{useState} from 'react'
import { useForm } from "react-hook-form";
import { connect } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { Request } from '../../../PrimarySections/Connections/APILink'
import { numberAvailableAction } from '../../../Utility/Redux/Action/AvailableNumberAction';
import { oneTimePassAction } from '../../../Utility/Redux/Action/OTPAction';

function RegisterBody(props) {

    const { register, handleSubmit } = useForm()
    const [error, setError] = useState({})
    const [value, setValue] = useState({
        oneTimePass:'',
    })
    const numberPattern = new RegExp(/^[0-9\b]+$/)
    const history = useHistory()

    const handleChange = (e)=>{
        setValue({
            ...value,
            [e.target.name]:e.target.value
        })
    }

    const signUp =(e)=>{
        e.preventDefault()
        if(value.oneTimePass !== '' && value.oneTimePass.length === 4){
            if(numberPattern.test(value.oneTimePass)){
            const OTP = parseInt(value.oneTimePass)
            Axios.post(`${Request.OTPRegister}otp=${OTP}&mobile=${props.number}`)
            .then((res)=>{
                res.data.status === true && history.push('/registerinfo')
            })
            }else{
                setError({message:'Input invalid'})
            }
        }
    }
    return (
        <div>
            {/* Start of Login Wrapper */}
            <div className="login-wrapper pb-70">
            <div className="container-fluid">
                <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                    <main id="primary" className="site-main">
                    <div className="user-login">
                        <div className="row">
                        <div className="col-12 col-sm-12 col-md-12">
                            <div className="section-title text-center">
                            <h3>Insert OTP</h3>
                            </div>
                        </div>
                        </div> {/* end of row */}
                        <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-8 offset-xl-2">
                            <div className="registration-form login-form">
                            <form action="#" onSubmit={signUp}>
                                <div className="login-info mb-20">
                                <p>Already have an account? <Link to="/login">Log in instead!</Link></p>
                                </div>
                                <div className="form-group row">
                                <label htmlFor="f-name" className="col-12 col-form-label font-weight-bold">Verify Your Number</label>
                                <div className="col-12 ">
                                    <input type="text" className="form-control" id="f-name" name='oneTimePass' value={value.oneTimePass} autoFocus placeholder='OTP code here' onChange={handleChange}/>
                                </div>
                                <div className="col-12">{props.reponseMsg}</div>
                                <div className="col-12">{error.message}</div>
                                </div>
                                <div className="register-box otp-box d-flex justify-content-end mt-20">
                                <button type="button" className="btn btn-secondary" onClick={signUp}>Verify</button>
                                <button type="button" className="btn btn-secondary" onClick={()=>props.resendOTP(props.number)}>Resend</button>
                                </div>
                            </form>
                            </div>
                        </div>
                        </div>
                    </div> {/* end of user-login */}
                    </main> {/* end of #primary */}
                </div>
                </div> {/* end of row */}
            </div> {/* end of container */}
            </div>
            {/* End of Login Wrapper */}

        </div>
    )
}

const mapStateToProps = state=>({
    loading:state.OTPReducer.loading,
    // status:state.OTPReducer.OTPConfirmedstatus,
    // reponseMsg:state.OTPReducer.OTPConfirmedMessage,
    number:state.AvailableNumber.userNumber,

})
const mapDispatchToProps = dispatch=>({
    confirmOTP:(number,pass)=>dispatch(oneTimePassAction(pass,number)),
    resendOTP:(number)=>dispatch(numberAvailableAction(number)),
})

export default connect(mapStateToProps,mapDispatchToProps)(RegisterBody)