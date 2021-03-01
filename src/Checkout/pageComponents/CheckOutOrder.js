// If cart length is greater than 0 then product will display
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getActiveCartProdTotal, getActiveCartProdSubTotal, Truncate } from '../../PrimarySections/Essentials/AllFunctions'
import { RemoveFinalProd } from '../../Utility/Redux/Action/FinalCartProduct'
import { MakeOrderAction } from '../../Utility/Redux/Action/MakeOrderAction'
import './CheckOut.css'


function CheckOutOrder(props) {
    const [value,setValue] = useState({
        payment:'ssl'
    })
    
    const placeOrder = (e)=>{
        e.preventDefault();
        if(!props.shippingId){
            alert('Select atleast one shipping address.')
            return // return if shipping address is not selected
        }

        let arr=[]
        props.finalCart.forEach(x => {
            const prod = {
                product_id:x.products.id,
                color: x.products.color,
                vendor_price: x.products.vendor_price,
                size : x.products.size,
                price : x.products.price,
                size_qty: x.products.size_qty,
                qty : x.quantity,
                size_key : null,
            }
            arr.push(prod)
            let vendorID =[]
            props.finalCart.forEach(x => {
                vendorID.push(x.products.shop_id)
            });
            let adjusted_amount
            let rc_adjusted_amount =[]
            arr.forEach(x => {
                const amount = x.price - x.vendor_price
                rc_adjusted_amount.push(amount)
            });
            adjusted_amount = rc_adjusted_amount.reduce((a, b) => a + b * 50 /100, 0)
            if(rc_adjusted_amount.length !== props.finalCart.length){
                return //return till final cart prices are adjusted
            }else{
                props.makeOrder(arr,props.shippingId,vendorID,value.payment,adjusted_amount);
            }

        });
    } 

    const handleChange=(e)=>{
        setValue({
            ...value,
            [e.target.name]:e.target.value
        })
    }
    return (
        <div className="col-12 col-sm-12 col-md-6 col-lg-4">
        <div className="order-summary">
        <div className="section-title left-aligned">
            <h3>Your Order</h3>
        </div>
        <div className="product-container">
            {
                props.finalCart.length>0 ? 
            
            props.finalCart?.map(product =>(
            <div className="product-list">
                <div className="product-inner media align-items-center" id={product.products.id}>
                    <div className="product-image mr-4 mr-sm-5 mr-md-4 mr-lg-5">
                    <Link to={`/productdetails?id=${product.products.id}`}>
                        <img style={{height:'120px',width:'120px',objectFit:'contain'}} src={`https:${product.products.photo}`} alt={product.products.name} title={product.products.name} />
                    </Link>
                    </div>
                    <div className="media-body">
                    <h5>{Truncate(product.products.name,35)}</h5>
                    <p className="product-quantity">Qty: {product.quantity}</p>
                    <p className="product-final-price">&#2547; { product.products.price }</p>
                    {/* <p className="product-final-price">&#2547; {product.price}</p> */}
                    </div>
                    <div className='checkout_x' onClick={()=>props.finalProdCheckRemove(product)}><span className="lnr lnr-cross"></span></div>
                </div>
            </div>))
        
        : <div className='choose_product' ><Link to='/cart' className="btn">Choose Product</Link></div>

        }
        </div> {/* end of product-container */}
            
        <div className="order-review">
            <div className="table-responsive">
            <table className="table table-bordered">
                <tbody>
                <tr className="cart-subtotal">
                    <th>Subtotal</th>
                    <td className="text-center">&#2547; {getActiveCartProdSubTotal(props.finalCart).toFixed(2)}</td>
                </tr>            
                <tr className="order-total">
                    <th>Total</th>
                    <td className="text-center"><strong>&#2547; {getActiveCartProdTotal(props.finalCart).toFixed(2)}</strong></td>
                </tr>
                </tbody>
            </table>
            </div>
        </div>
        <div className="checkout-payment">
            <form action="#" onSubmit={placeOrder}>
            <div className="form-row">
                <div className="custom-radio">
                    <input className="form-check-input" type="radio" name="payment" id="check_payment"  value="ssl" defaultChecked onChange={handleChange}/>
                    <span className="checkmark" />
                    <label className="form-check-label" htmlFor="check_payment">SSL payment.</label>
                    <div className="payment-info" id="check_pay">
                        <p>Pay with SSL method.</p>
                    </div>
                </div>
                <div className="custom-radio">
                    <input className="form-check-input" type="radio" name="payment" id="cash_delivery_payment" value="ub" onChange={handleChange}/>
                    <span className="checkmark" />
                    <label className="form-check-label" htmlFor="cash_delivery_payment">Pay with uparzon balance.</label>
                    <div className="payment-info" id="cash_pay">
                        <p>Pay with uparzon balance.</p>
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
                <button type="submit" className="btn btn-secondary dark" > Continue to Payment</button>
            </div>
            </form>
        </div> {/* end of checkout-payment */}
        </div> {/* end of order-summary */}
    </div>
    )
}

const mapStateToProps = state=>({
    basket:state.basketProd.basket,
    finalCart:state.FinalCart.finalCart,
    shippingId:state.billingAdrress.shipping_id,
    
}) 
const mapDispatchToProps=dispatch=>({
    finalProdCheckRemove:(product)=>dispatch(RemoveFinalProd(product)),
    makeOrder:(arr,billId,vendorId,paymentMethod,rc_adjusted_amount)=>dispatch(MakeOrderAction(arr,billId,vendorId,paymentMethod,rc_adjusted_amount)),
})
export default connect(mapStateToProps,mapDispatchToProps)(CheckOutOrder)