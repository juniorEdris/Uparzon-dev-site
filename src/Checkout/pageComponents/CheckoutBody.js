import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import CheckOutForm from './CheckOutForm'
import CheckOutOrder from './CheckOutOrder'
import UserAction from './UserAction'

function CheckoutBody(props) {
    const history = useHistory()
    useEffect(()=>{
        props.finalCart.length === 0  && history.push('/cart')
    },[])
    return (
        <div>
            {/* Start of Checkout Wrapper */}
            <div className="checkout-wrapper pt-10 pb-70">
            <div className="container-fluid">
                <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                    <main id="primary" className="site-main">
                    <UserAction/>
                    <div className="checkout-area">
                        <div className="row">
                            <CheckOutForm/>
                            <CheckOutOrder/>
                        </div> 
                    </div> 
                    </main> 
                </div>
                </div> 
            </div> 
            </div>
            {/* End of Checkout Wrapper */}

        </div>
    )
}

export default connect(state=>({finalCart:state.FinalCart.finalCart,}))(CheckoutBody)