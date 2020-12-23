import React from 'react'
import { Link } from 'react-router-dom'
import { getSubTotal } from '../../Utility/Reducer';
import { useStateValue } from '../../Utility/StateProvider'
import CartAccordion from './CartAccordion';
import CartForm from './CartForm';

export default function CartBody() {
    const [{basket,user}] = useStateValue();
    return (
        <div>
            {/* Start cart Wrapper */}
            <div className="shopping-cart-wrapper pb-70">
            <div className="container-fluid">
                <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                    <main id="primary" className="site-main">
                    <div className="shopping-cart">
                        <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="section-title">
                            <h3>Shopping Cart</h3>
                            </div>
                                <CartForm/>
                                <CartAccordion/>
                            <div className="cart-amount-wrapper">
                            <div className="row">
                                <div className="col-12 col-sm-12 col-md-4 offset-md-8">
                                <table className="table table-bordered">
                                    <tbody>
                                    <tr>
                                        <td><strong>Sub-Total:</strong></td>
                                        <td>&#2547; {getSubTotal(basket).toFixed(2)}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Total:</strong></td>
                                        <td><span className="color-primary">&#2547; {getSubTotal(basket).toFixed(2)}</span></td>
                                    </tr>
                                    </tbody>
                                </table>
                                </div>
                            </div>
                            </div>
                            <div className="cart-button-wrapper d-flex justify-content-between mt-4">
                            <Link to="/shop" className="btn btn-secondary">Continue Shopping</Link>
                            <Link to={!user ? "#": "/checkout"} className="btn btn-secondary dark align-self-end" data-target={!user && "#login_modal"} data-toggle={!user && "modal"}>Checkout</Link>
                            </div>
                        </div>
                        </div>
                    </div> {/* end of shopping-cart */}
                    </main> {/* end of #primary */}
                </div>
                </div> {/* end of row */}
            </div> {/* end of container */}
            </div>
            {/* End cart Wrapper */}

        </div>
    )
}
