import Axios from 'axios';
import React,{useState} from 'react'
import { useForm } from "react-hook-form";
import { connect } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { SignUpAction } from '../../../Utility/Redux/Action/SignUpAction'

function RegisterBody(props) {

    const { register, handleSubmit } = useForm()
    const inputPattern = /^[A-Za-z]+$/i
    const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    const [showNewPass, setShowNewPass] = useState(false)
    const [showConPass, setShowConPass] = useState(false)
    const [error, setError] = useState({})
    const [value, setValue] = useState({
        oneTimePass:'',
    })
    const numberPattern = new RegExp(/^[0-9\b]+$/)
    const history = useHistory()

    const showPassNew=e=>{
        e.preventDefault()
        setShowNewPass(!showNewPass)
    }
    const showPassCon=e=>{
        e.preventDefault()
        setShowConPass(!showConPass)
    }

    const handleChange = (e)=>{
        setValue({
            ...value,
            [e.target.name]:e.target.value
        })
    }

    const signUp = (e)=>{
        e.preventDefault()
        if(value.oneTimePass !== '' && value.oneTimePass.length === 4){
            if(numberPattern.test(value.oneTimePass)){
            const number = parseInt(value.oneTimePass)
            history.push('/registerinfo')
            console.log('otp',value,typeof(number));
            }else{
                setError({message:'invalid OTP'})
            }
        }
    }
    const resend = Axios.post()
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
                            <h3>Create an Account</h3>
                            </div>
                        </div>
                        </div> {/* end of row */}
                        <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-8 offset-xl-2">
                            <div className="registration-form login-form">
                            <form action="#" onSubmit={handleSubmit(signUp)}>
                                <div className="login-info mb-20">
                                <p>Already have an account? <Link to="/login">Log in instead!</Link></p>
                                </div>
                                <div className="form-group row">
                                <label htmlFor="f-name" className="col-12 col-form-label font-weight-bold">Verify Your Number</label>
                                <div className="col-12 ">
                                    <input type="text" className="form-control" id="f-name" name='oneTimePass' value={value.oneTimePass} autoFocus placeholder='OTP code here' onChange={handleChange}/>
                                </div>
                                </div>
                                <div className="register-box d-flex justify-content-end mt-20">
                                <button type="button" className="btn btn-secondary" onClick={signUp}>Verify</button>
                                <button type="button" className="btn btn-secondary" onClick={resend}>Verify</button>
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

const mapStateToProps = state=>({})
const mapDispatchToProps = dispatch=>({
    registerUser:(user)=>dispatch(SignUpAction(user)),
})

export default connect(mapStateToProps,mapDispatchToProps)(RegisterBody)