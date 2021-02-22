import React,{useState} from 'react'
import { useForm } from "react-hook-form";
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { SignUpAction } from '../../../Utility/Redux/Action/SignUpAction'

function UpdateBody(props) {

    const { register, handleSubmit } = useForm()
    const inputPattern = /^[A-Za-z]+$/i
    const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    const [showNewPass, setShowNewPass] = useState(false)
    const [showConPass, setShowConPass] = useState(false)
    const [value, setValue] = useState({
        gender:'',
        first_name:'',
        last_name:'',
        phone:'',
        email:'',
        password:'',
        new_password:'',
        confirm_password:'',
        birth_date:'',
    })

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
        console.log('signup',value,typeof(value.phone));
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
                            <form action="#" onSubmit={handleSubmit(signUp)}>
                                <div className="login-info mb-20">
                                <p>Already have an account? <Link to="/login">Log in instead!</Link></p>
                                </div>
                                <div className="form-group row align-items-center">
                                <label className="col-12 col-sm-12 col-md-4 col-form-label">Title</label>
                                <div className="col-12 col-sm-12 col-md-8 col-lg-8">
                                    <div className="form-row">
                                    <div className="col-6 col-sm-3">
                                        <div className="custom-radio">
                                        <input className="form-check-input" type="radio" name="gender" value='male' id="male" onChange={handleChange}/>{/*e=>setGender('male') */}
                                        <span className="checkmark" />
                                        <label className="form-check-label" htmlFor="male">Mr.</label>
                                        </div>
                                    </div>
                                    <div className="col-6 col-sm-3">
                                        <div className="custom-radio">
                                        <input className="form-check-input" type="radio" name="gender" value='female' id="female" onChange={handleChange}/>
                                        <span className="checkmark" />
                                        <label className="form-check-label" htmlFor="female">Mrs.</label>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className="form-group row">
                                <label htmlFor="f-name" className="col-12 col-sm-12 col-md-4 col-form-label">First Name</label>
                                <div className="col-12 col-sm-12 col-md-8 col-lg-8">
                                    <input type="text" className="form-control" id="f-name" name='first_name' value={value.first_name}  onChange={handleChange}/>
                                </div>
                                </div>
                                <div className="form-group row">
                                <label htmlFor="l-name" className="col-12 col-sm-12 col-md-4 col-form-label">Last Name</label>
                                <div className="col-12 col-sm-12 col-md-8 col-lg-8">
                                    <input type="text" className="form-control" id="l-name" name='last_name'  value={value.last_name} onChange={handleChange}/>
                                </div>
                                </div>
                                <div className="form-group row">
                                <label htmlFor="email" className="col-12 col-sm-12 col-md-4 col-form-label">Email Address</label>
                                <div className="col-12 col-sm-12 col-md-8 col-lg-8">
                                    <input type="text" className="form-control" id="email" name='email' value={value.email}  onChange={handleChange}  />
                                </div>
                                </div>
                                <div className="form-group row">
                                <label htmlFor="inputpassword" className="col-12 col-sm-12 col-md-4 col-form-label">Phone Number</label>
                                <div className="col-12 col-sm-12 col-md-8 col-lg-8">
                                    <input type="text" className="form-control" name="phone" id="inputnumber" value={value.phone}  onChange={handleChange} />
                                </div>
                                </div>
                                <div className="form-group row">
                                <label htmlFor="newpassword" className="col-12 col-sm-12 col-md-4 col-form-label">New Password</label>
                                <div className="col-12 col-sm-12 col-md-8 col-lg-8">
                                    <input type={showNewPass? "text":"password"} className="form-control" id="newpassword" name="new_password" value={value.new_password} onChange={handleChange} />
                                    <button className="pass-show-btn" type="button" onClick={showPassNew}>Show</button>
                                </div>
                                </div>
                                <div className="form-group row">
                                <label htmlFor="c-password" className="col-12 col-sm-12 col-md-4 col-form-label">Confirm Password</label>
                                <div className="col-12 col-sm-12 col-md-8 col-lg-8">
                                    <input type={showConPass? "text":"password"} className="form-control" id="c-password" name="confirm_password" value={value.confirm_password} onChange={handleChange} />
                                    <button className="pass-show-btn" type="button" onClick={showPassCon}>Show</button>
                                </div>
                                </div>
                                <div className="form-group row">
                                <label htmlFor="birth" className="col-12 col-sm-12 col-md-4 col-form-label">Birthdate (Optional)</label>
                                <div className="col-12 col-sm-12 col-md-8 col-lg-8">
                                    <input type="date" className="form-control" id="birth" name='birth_date' placeholder="MM / DD / YYYY" ref={register({valueAsDate: true,})}  value={value.birth_date} onChange={handleChange} />
                                </div>
                                </div>
                                <div className="form-check row p-0 mt-5">
                                <div className="col-12 col-sm-12 col-md-8 offset-md-4 col-lg-6 offset-lg-4">
                                    <div className="custom-checkbox">
                                    <input className="form-check-input" type="checkbox" id="offer" required/>
                                    <span className="checkmark" />
                                    <label className="form-check-label" htmlFor="offer">Receive offers from our partners</label>
                                    </div>
                                </div>
                                </div>
                                <div className="form-check row p-0 mt-4">
                                <div className="col-12 col-sm-12 col-md-8 offset-md-4 col-lg-8 offset-lg-4">
                                    <div className="custom-checkbox">
                                    <input className="form-check-input" type="checkbox" id="subscribe" required />
                                    <span className="checkmark" />
                                    <label className="form-check-label" htmlFor="subscribe">Sign up for our newsletter<br />Subscribe to our newsletters now and stay up-to-date with new collections, the latest lookbooks and exclusive offers..</label>
                                    </div>
                                </div>
                                </div>
                                <div className="register-box d-flex justify-content-end mt-20">
                                <button type="button" className="btn btn-secondary" onClick={signUp}>Register</button>
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

export default connect(mapStateToProps,mapDispatchToProps)(UpdateBody)