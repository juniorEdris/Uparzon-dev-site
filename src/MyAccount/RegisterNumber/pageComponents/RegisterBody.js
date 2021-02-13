import Axios from 'axios';
import React,{useState} from 'react'
import { useForm } from "react-hook-form";
import { connect } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { SignUpAction } from '../../../Utility/Redux/Action/SignUpAction'
import { Request } from '../../../PrimarySections/Connections/APILink'
import { numberAvailableAction } from '../../../Utility/Redux/Action/AvailableNumberAction';

function RegisterBody(props) {
    
    const history = useHistory()
    
    const { register, handleSubmit } = useForm()
    const numberPattern = new RegExp(/^[0-9\b]+$/)

    const [value, setValue] = useState({
        phone:'',
    })
    const [error, setError] = useState({})

    const handleChange = (e)=>{
        setValue({
            ...value,
            [e.target.name]:e.target.value
        })
    }

    const signUp = (e)=>{
        e.preventDefault()
        // let isValid;
        if(value.phone !== ''){
            if(value.phone.length >= 11){
                setError({message:'Phone number is incorrect.'})
            }else{
                        const number = parseInt(value.phone)
                    if(!numberPattern.test(number)){
                        setError({message:'Invalid number'})
                    }else{
                        Axios.post(`${Request.RegisterNumber}?mobile=${number}`)
                        .then(res=>{
                            console.log('phone register',res);
                            props.registerNumber(number)
                            res.data.status === true && history.push('/onetimepassword')
                        }).catch(err=>{
                            console.log(err);
                        })
                }
            }
            
    }
    

        // if (!pattern.test(input["phone"])) {

        //     isValid = false;
        
        //     errors["phone"] = "Please enter only number.";
        
        //   }else if(input["phone"].length != 10){
        
        //     isValid = false;
        
        //     errors["phone"] = "Please enter valid phone number.";
        
        //   }
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
                            <h3>Create an Account</h3>
                            </div>
                        </div>
                        </div> {/* end of row */}
                        <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-8 offset-xl-2">
                            <div className="registration-form login-form">
                            <form action="#" onSubmit={signUp}>
                                <div className="login-info mb-20 text-center">
                                <p>Already have an account? <Link to="/login">Log in instead!</Link></p>
                                </div>
                                <div className="form-group row">
                                <label htmlFor="inputpassword" className="col-12 col-form-label ">Phone Number</label>
                                <div className="col-12">
                                    <input type="text" className="form-control" name="phone" id="inputnumber" value={value.phone}  onChange={handleChange} placeholder='Type your phone number'/>
                                </div>
                                <div className="text-danger">
                                    {error.message}
                                </div>
                                </div>
                                <div className="register-box d-flex justify-content-end mt-20">
                                <button type="button" className="btn btn-secondary" onClick={signUp}>Continue</button>
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
    loading:state.AvailableNumber.loading,
    // status:state.AvailableNumber.numberCheckStatus,
    number:state.AvailableNumber.userNumber,
})
const mapDispatchToProps = dispatch=>({
    registerNumber:(number)=>dispatch(numberAvailableAction(number)),
})

export default connect(mapStateToProps,mapDispatchToProps)(RegisterBody)