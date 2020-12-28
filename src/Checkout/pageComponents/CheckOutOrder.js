// If cart length is greater than 0 then product will display
import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getSubTotal } from '../../Utility/Reducer'


function CheckOutOrder(props) {


    return (
        <div className="col-12 col-sm-12 col-md-6 col-lg-5">
        <div className="order-summary">
        <div className="section-title left-aligned">
            <h3>Your Order</h3>
        </div>
        <div className="product-container">
            {
                props.basket.length>0 ? 
            
            props.basket?.map(product =>(
            <div className="product-list">
                <div className="product-inner media align-items-center" id={product.id}>
                    <div className="product-image mr-4 mr-sm-5 mr-md-4 mr-lg-5">
                    <Link to={`/productdetails?id=${product.id}`}>
                        <img style={{height:'120px',width:'120px',objectFit:'contain'}} src={`https:${product.photo.replace('demostore', 'store')}`} alt={product.name} title={product.name} />
                    </Link>
                    </div>
                    <div className="media-body">
                    <h5>{product.name}</h5>
                    <p className="product-quantity">{product.count}</p>
                    <p className="product-final-price">&#2547; {product.price}</p>
                    </div>
                </div>
            </div>))
        
        : <div className='choose_product' ><Link to='/' className="btn">Choose Product</Link></div>

        }
        </div> {/* end of product-container */}
            
        <div className="order-review">
            <div className="table-responsive">
            <table className="table table-bordered">
                <tbody>
                <tr className="cart-subtotal">
                    <th>Subtotal</th>
                    <td className="text-center">&#2547; {getSubTotal(props.basket).toFixed(2)}</td>
                </tr>            
                <tr className="order-total">
                    <th>Total</th>
                    <td className="text-center"><strong>&#2547; {getSubTotal(props.basket).toFixed(2)}</strong></td>
                </tr>
                </tbody>
            </table>
            </div>
        </div>
        <div className="checkout-payment">
            <form action="#">
            <div className="form-row">
                <div className="custom-radio">
                <input className="form-check-input" type="radio" name="payment" id="check_payment" defaultValue="check" defaultChecked />
                <span className="checkmark" />
                <label className="form-check-label" htmlFor="check_payment">Check Payments</label>
                <div className="payment-info" id="check_pay">
                    <p>Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
                </div>
                </div>
                <div className="custom-radio">
                <input className="form-check-input" type="radio" name="payment" id="cash_delivery_payment" defaultValue="cash" />
                <span className="checkmark" />
                <label className="form-check-label" htmlFor="cash_delivery_payment">Cash on Delivery</label>
                <div className="payment-info" id="cash_pay">
                    <p>Pay with cash upon delivery.</p>
                </div>
                </div>
                <div className="custom-radio">
                <input className="form-check-input" type="radio" name="payment" id="paypal_payment" defaultValue="paypal" />
                <span className="checkmark" />
                <label className="form-check-label" htmlFor="paypal_payment">PayPal Express Checkout</label>
                <div className="payment-info" id="paypal_pay">
                    <p>Pay via PayPal. You can pay with your credit card if you don’t have a PayPal account.</p>
                </div>
                </div>
            </div>
            <div className="form-row">
                <div className="form-check">
                <div className="custom-checkbox">
                    <input className="form-check-input" type="checkbox" id="terms_acceptance" required />
                    <span className="checkmark" />
                    <label className="form-check-label" htmlFor="terms_acceptance">I agree to the <Link to="#">terms of service</Link> and will adhere to them unconditionally.</label>
                </div>
                </div>
            </div>
            <div className="form-row justify-content-end">
                <input type="submit" className="btn btn-secondary dark" defaultValue="Continue to Payment" />
            </div>
            </form>
        </div> {/* end of checkout-payment */}
        </div> {/* end of order-summary */}
    </div>
    )
}


export default connect(state=>({
    basket:state.basketProd.basket,
}))(CheckOutOrder)