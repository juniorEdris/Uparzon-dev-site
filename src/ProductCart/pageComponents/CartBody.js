import React from 'react'
import { Link } from 'react-router-dom'
import { getActiveCartProdTotal, getfinalSubTotal, getSubTotal } from '../../PrimarySections/Essentials/AllFunctions';
import CartAccordion from './CartAccordion';
import CartForm from './CartForm';
import {currToFixed} from '../../PrimarySections/Essentials/CurrencyFormat'
import { connect } from 'react-redux';
import Saparate  from './Saparate';

function CartBody(props) {

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
                                        <td>&#2547; {currToFixed(getfinalSubTotal(props.cart))}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Total:</strong></td>
                                        <td><span className="color-primary">&#2547; {currToFixed(getActiveCartProdTotal(props.cart))}</span></td>
                                    </tr>
                                    </tbody>
                                </table>
                                </div>
                            </div>
                            </div>
                            <div className="cart-button-wrapper d-flex justify-content-between mt-4">
                            <Link to="/shop" onClick className="btn btn-secondary">Continue Shopping</Link>
                            <Link to={!props.user ? "#": "/checkout"} className="btn btn-secondary dark align-self-end" data-target={!props.user && "#login_modal"} data-toggle={!props.user && "modal"}>Checkout</Link>
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
            {/* <Saparate/> */}

        </div>
    )
}
const mapStateToProps = state => (
    {
        basket:state.basketProd.basket,
        user:state.Users.user,
        loading:state.cart.loading,
        cart:state.cart.cartProducts,
        finalCart:state.FinalCart.finalCart,
    }
)

const mapDispatchToProps = dispatch => ({
    getToCheckout:()=>dispatch(),
})
export default connect(mapStateToProps,mapDispatchToProps)(CartBody)