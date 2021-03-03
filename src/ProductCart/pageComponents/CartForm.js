import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import './CartForm.css'
import { connect } from 'react-redux';
import { AddBasketProd, RemoveBasketProd, RemoveSingleCartProd } from '../../Utility/Redux/Action/BasketAction';
import {currToFixed} from '../../PrimarySections/Essentials/CurrencyFormat'
import { groupBy, Truncate } from '../../PrimarySections/Essentials/AllFunctions';
import { CartProdCheckAction } from '../../Utility/Redux/Action/CartProductCheck';
import { AddFinalProd, RemoveFinalProd } from '../../Utility/Redux/Action/FinalCartProduct';


function CartForm(props) {
    
    useEffect(() => {
        let cartProductsId = []
        let cartProductsCount = []
        props.basket.forEach(x=>{
            cartProductsId.push(x.id)
            cartProductsCount.push(x.quantity)
        })
        props.cartCheck(cartProductsId,cartProductsCount)
    }, [props.basket])
    useEffect(() => {
        props.finalProdCheckRemove();
    }, [])

    const incCount = (prod)=>{
        props.addToBasket(prod)
    }
    const decCount = (prod)=>{
        props.removesinglefromBasket(prod)
    }
    const checkoutProd=(e,prod)=>{
        const hasAttr = e.target.hasAttribute("data-active")
        hasAttr ?e.target.removeAttribute("data-active"): e.target.setAttribute("data-active",true)
        const DataAttr = e.target.hasAttribute("data-active")
        if(DataAttr){
            props.finalProdCheck(prod);
        }else if(!DataAttr){
            props.finalProdCheckRemove(prod);
        }
    }



    // All the groupby results are stored in a constant below
    const groupedItems=groupBy(props.cart, 'shop_name');

    const cartprod = Object.keys(groupedItems).map(function (grooupKey) {
        const prod = groupedItems[grooupKey].[0] 
        return <div className="">
            <form action="#">
                <div className="table-responsive mb-0">
                    <div className="col-12 d-flex flex-column flex-md-row justify-content-between align-items-center vendor__row">
                        <div className="vendor__name left col-6">
                            <h2><Link to='/shop'><span>{prod.shop_name}</span></Link></h2>
                            <small className='minimum_order'>Minimum {prod.vendor_delivery.min_order}tk product purchaseable from single Shop</small>
                        </div>
                        <div className="vendor__alt__text left col-6">
                           <h3><Link to='/shop'><span>Inside {prod.vendor_delivery ?prod.vendor_delivery.vendor_district:'none'}</span></Link></h3>
                            <div>
                                    <p>Delivery Charge:  {prod.vendor_delivery? prod.vendor_delivery.inside_deli_charge : 'none'}</p>
                                    <p>Delivery Time:  {prod.vendor_delivery ?prod.vendor_delivery.inside_deli_time : 'none'}</p>
                            </div>
                        </div>
                        <div className="vendor__alt__text right col-6">
                           <h3><Link to='/shop'><span>Outside {prod.vendor_delivery ?prod.vendor_delivery.vendor_district:'none'}</span></Link></h3>
                            <div>
                                    <p>Delivery Charge:  {prod.vendor_delivery ?prod.vendor_delivery.outside_deli_charge+'tk' : 'none'}</p>
                                    <p>Delivery Time:  {prod.vendor_delivery ?prod.vendor_delivery.outside_deli_time : 'none'}</p>
                            </div>
                        </div>
                    </div>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                        <td>Select</td>
                        <td>Image</td>
                        <td>Product Name</td>
                        <td>Model</td>
                        <td>Quantity</td>
                        <td>Unit Price</td>
                        <td>Total</td>
                        </tr>
                    </thead>
                    {
                    groupedItems[grooupKey].map(function (prod) {
                        return <tbody>
                        <tr>
                            <td>
                                <div><input type='checkbox'  className='cart-select' name="cart-select" onChange={(e)=>checkoutProd(e,prod)}/></div>
                            </td>
                            <td>
                                <Link to={`/productdetails?id=${prod.id}`}><img src={`https:${prod.photo}`} alt={prod.name} title={prod.name} className="img-thumbnail" /></Link>
                            </td>
                            <td>
                                <Link to={`/productdetails?id=${prod.id}`} title={prod.name}>{Truncate(prod.name,40)}</Link>
                                {/* <span>Delivery Date: 2019-09-22</span>
                                <span>Color: Brown</span>
                            <span>Reward Points: 300</span> */}
                            </td>
                            <td>3</td>
                            <td>
                                <div className="input-group btn-block">
                                <div className="product-qty mr-3">
                                    <input type="text" readOnly defaultValue={prod.qty_request_to_buy} />
                                    <span class={`dec qtybtn ${prod.qty_request_to_buy===1 && 'disabled'}`} onClick={()=>decCount(prod)}><i className="fa fa-minus"></i></span><span className={`inc qtybtn ${prod.qty_request_to_buy===prod.stock && 'disabled'}`} onClick={()=>incCount(prod)}><i class="fa fa-plus"></i></span>
                                </div>
                                <span className="input-group-btn">
                                    <button type="submit" className="btn btn-primary"><i className="fa fa-refresh" /></button>
                                    <button type="button" className="btn btn-danger pull-right" onClick={() =>props.removefromBasket(prod)}><i className="fa fa-times-circle" /></button>
                                </span>
                                </div>
                            </td>
                            <td>&#2547; {currToFixed(prod.price)}</td>
                            <td>&#2547; {currToFixed(prod.price*prod.qty_request_to_buy)}</td>
                        </tr> 
                    </tbody>
                    })
                }
                </table>
            </div>
        </form>
                
            </div>
     });

    return (
        <div className="">
            {props.loading ?
            <div className="cart_loader">
                    <div><h1><img src="./assets/img/uparzon_placeholder.jpg" alt=""/></h1></div>
            </div> :
            props.cart?.length>0 ? cartprod : <div className='choose_product'><Link to='/' className="btn">Choose Product</Link></div>}
        </div>
    )
}

const mapStateToProps = state => (
    {
        basket:state.basketProd.basket,
        loading:state.cart.loading,
        cart: state.cart.cartProducts,
        finalCart:state.FinalCart.finalCart,
    }
)

const mapDispatchToProps = dispatch => (
    {
        addToBasket:(prod)=>dispatch(AddBasketProd(prod)),
        removefromBasket:(prod)=>dispatch(RemoveBasketProd(prod)),
        removesinglefromBasket:(prod)=>dispatch(RemoveSingleCartProd(prod)),
        cartCheck:(cartProductsId,cartProductsCount)=>dispatch(CartProdCheckAction(cartProductsId,cartProductsCount)),
        finalProdCheck:(product)=>dispatch(AddFinalProd(product)),
        finalProdCheckRemove:(product)=>dispatch(RemoveFinalProd(product)),
    }
)

export default connect(mapStateToProps,mapDispatchToProps)(React.memo(CartForm))