// If cart length is greater than 0 then product will display
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getCartProdTotal, getActiveCartProdSubTotal, Truncate, groupBy,total_deli_charge, rewardCash } from '../../PrimarySections/Essentials/AllFunctions'
import { RemoveFinalProd } from '../../Utility/Redux/Action/FinalCartProduct'
import { MakeOrderAction } from '../../Utility/Redux/Action/MakeOrderAction'
import './CheckOut.css'


function CheckOutOrder(props) {
    const [value,setValue] = useState({
        payment:'ssl'
    })

    let inside_delivery_charge =[]
    let outside_delivery_charge =[]
    let inside 
    let outside 
    let delivery_location_charge
    // All the groupby results are stored in a constant below
    const groupedItems=groupBy(props.finalCart, 'shop_name');
    const finalcartprod = Object.keys(groupedItems).map(function (grooupKey) {
        const prod = groupedItems[grooupKey].[0] 
        inside_delivery_charge.push(prod.vendor_delivery.inside_deli_charge)
        outside_delivery_charge.push(prod.vendor_delivery.outside_deli_charge)
        return <div className='product_box'>
            <div className="shop_name">{grooupKey}</div>
        {
        groupedItems[grooupKey].map(function (product) {
        return <div className="product-list">
        <div className="product-inner media align-items-center" id={product.id}>
            <div className="product-image mr-4 mr-sm-5 mr-md-4 mr-lg-5">
            <Link to={`/productdetails?id=${product.id}`}>
                <img style={{height:'120px',width:'120px',objectFit:'contain'}} src={`https:${product.photo}`} alt={product.name} title={product.name} />
            </Link>
            </div>
            <div className="media-body">
            <h5>{Truncate(product.name,35)}</h5>
            <p className="product-quantity">Qty: {product.qty_request_to_buy}</p>
            <p className="product-final-price">&#2547; { product.price*product.qty_request_to_buy }</p>
            </div>
            <div className='checkout_x' onClick={()=>props.finalProdCheckRemove(product)}><span className="lnr lnr-cross"></span></div>
        </div>
    </div> 
    })}
        <div className='price_holder'>
            <div className="inside_delivery">
                <span className="product-final-price">Inside delivery</span>
                <span className="product-final-price">&#2547; {prod.vendor_delivery.inside_deli_charge}</span>
            </div>
            <div className="outside_delivery">
                <span className="product-final-price">Outnside delivery</span>
                <span className="product-final-price">&#2547; {prod.vendor_delivery.outside_deli_charge}</span>
            </div>
        </div>
    </div>
    })

    //  storing all the API queries in varriables
    let arr=[]
    let adjusted_amount
    let rc_adjusted_amount =[]
    let vendorID =[]
    props.finalCart.forEach(x => {
        const prod = {
            product_id:x.id,
            color: x.color,
            vendor_price: x.vendor_price,
            size : x.size,
            price : x.price,
            size_qty: x.size_qty,
            qty : x.qty_request_to_buy,
            size_key : null,
        }
        arr.push(prod)
        vendorID.push(x.shop_id)
    });
    // rc_adjusted_price
    arr.forEach(x => {
        const amount = x.price - x.vendor_price
        rc_adjusted_amount.push(amount)
    });
    adjusted_amount = rewardCash(rc_adjusted_amount)
    inside = total_deli_charge(inside_delivery_charge)
    outside = total_deli_charge(outside_delivery_charge)
    delivery_location_charge = inside
    const total = getCartProdTotal(getActiveCartProdSubTotal(props.finalCart),delivery_location_charge)
    console.log('====================================');
    console.log('delivery_charge',inside_delivery_charge,outside_delivery_charge,delivery_location_charge);
    console.log('====================================');
    
    const placeOrder = (e)=>{
        e.preventDefault();
        if(!props.shippingId){
            alert('Select atleast one shipping address.')
            return // return if shipping address is not selected
        }
    
        if(rc_adjusted_amount.length !== props.finalCart.length){
            return //return till all prices are adjusted
        }else{
            props.makeOrder(arr,props.shippingId,vendorID,value.payment,adjusted_amount,delivery_location_charge,total);
        }
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
                finalcartprod        
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
                    <td className="text-center"><strong>&#2547; {total.toFixed(2)}</strong></td>
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
    makeOrder:(arr,billId,vendorId,paymentMethod,rc_adjusted_amount,delivery_charge,totalPrice)=>dispatch(MakeOrderAction(arr,billId,vendorId,paymentMethod,rc_adjusted_amount,delivery_charge,totalPrice)),
})
export default connect(mapStateToProps,mapDispatchToProps)(CheckOutOrder)