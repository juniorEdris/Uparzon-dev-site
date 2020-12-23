import React from 'react'
import CheckOutForm from './CheckOutForm'
import CheckOutOrder from './CheckOutOrder'
import UserAction from './UserAction'

export default function CheckoutBody() {
    
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
