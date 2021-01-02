import React,{useState} from 'react'
import { Link } from 'react-router-dom'

export default function LoginBody() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showValue, setShowValue] = useState(false)

    const showPass = (e)=>{
        e.preventDefault()
        setShowValue(!showValue)
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
                            <h3>Log in to your account</h3>
                            </div>
                        </div>
                        </div> {/* end of row */}
                        <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-6 offset-lg-2 offset-xl-3">
                            <div className="login-form">
                            <form action="#">
                                <div className="form-group row align-items-center mb-4">
                                <label htmlFor="email" className="col-12 col-sm-12 col-md-4 col-form-label">Email address</label>
                                <div className="col-12 col-sm-12 col-md-8">
                                    <input type="text" className="form-control" id="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}  required />
                                </div>
                                </div>
                                <div className="form-group row align-items-center mb-4">
                                <label htmlFor="c-password" className="col-12 col-sm-12 col-md-4 col-form-label">Password</label>
                                <div className="col-12 col-sm-12 col-md-8">
                                    <input type={showValue ? "text" : "password"} className="form-control" id="c-password" placeholder="Password" required value={password} onChange={(e)=>setPassword(e.target.value)} />
                                    <button className="pass-show-btn" type="button" onClick={showPass}>Show</button>
                                </div>
                                </div>
                                <div className="login-box mt-5 text-center">
                                <p><Link to="#">Forgot your password?</Link></p>
                                <button type="submit" className="btn btn-secondary mb-4 mt-4">Sign In</button>
                                </div>
                                <div className="text-center pt-20 top-bordered">
                                <p>No account? <Link to="/register">Create one here</Link>.</p>
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
