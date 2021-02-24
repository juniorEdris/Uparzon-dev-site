import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import './CartForm.css'
import { connect } from 'react-redux';
import { AddBasketProd, RemoveBasketProd, RemoveSingleBasketProd } from '../../Utility/Redux/Action/BasketAction';
import {currToFixed} from '../../PrimarySections/Essentials/CurrencyFormat'
import Saparate  from './Saparate';
import {API, Request}  from '../../PrimarySections/Connections/APILink';
import { Truncate } from '../../PrimarySections/Essentials/AllFunctions';
import { CartProdCheckAction } from '../../Utility/Redux/Action/CartProductCheck';
import { useCallback } from 'react';


function CartForm(props) {
    const [count,setCount] = useState(1)
    const [loading,setLoading] = useState(true)
    const [data,setData] = useState([])

    useEffect(() => {
        let cartProductsId = []
        let cartProductsCount = []
        props.basket.forEach(x=>{
            cartProductsId.push(x.id)
            cartProductsCount.push(x.quantity)
        })
        props.cartCheck(cartProductsId,cartProductsCount)
    }, [props.basket])

    const incCount = useCallback(
        (prod)=>{
        props.addToBasket(prod)
        console.log('increament',prod)
    },
        [props.basKet],
      );
    const decCount = (prod)=>{
        props.removesinglefromBasket(prod)
        console.log('decreament',prod)
    }
    return (
        <div className="">
            {props.loading ? 'loading' :props.cart?.length>0 ?        
                props.cart?.map(prod=>(
                    <form action="#">
                <div className="table-responsive mb-1">
                    <div className="col-12 d-flex flex-column flex-md-row justify-content-between align-items-center vendor__row">
                        <div className="vendor__name left col-6">
                            <h2><Link to='/shop'><span>{prod.products.shop_name}</span></Link></h2>
                            <small className='minimum_order'>Minimum {prod.vendor_delivery.min_order}tk product purchaseable from single Shop</small>
                        </div>
                        <div className="vendor__alt__text left col-6">
                           <h3><Link to='/shop'><span>Inside {prod.vendor_district?prod.vendor_district:'none'}</span></Link></h3>
                            <div>
                                    <p>Delivery Charge:  {prod.vendor_delivery? prod.vendor_delivery.inside_deli_charge : 'none'}</p>
                                    <p>Delivery Time:  {prod.vendor_delivery ?prod.vendor_delivery.inside_deli_time : 'none'}</p>
                            </div>
                        </div>
                        <div className="vendor__alt__text right col-6">
                           <h3><Link to='/shop'><span>Outside {prod.vendor_district?prod.vendor_district:'none'}</span></Link></h3>
                            <div>
                                    <p>Delivery Charge:  {prod.vendor_delivery ?prod.vendor_delivery.outside_deli_charge+'tk' : 'none'}</p>
                                    <p>Delivery Time:  {prod.vendor_delivery ?prod.vendor_delivery.outside_deli_time : 'none'}</p>
                            </div>
                        </div>
                    </div>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                        <td>Image</td>
                        <td>Product Name</td>
                        <td>Model</td>
                        <td>Quantity</td>
                        <td>Unit Price</td>
                        <td>Total</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <Link to={`/productdetails?id=${prod.products.id}`}><img src={`https:${prod.products.photo}`} alt={prod.products.name} title={prod.products.name} className="img-thumbnail" /></Link>
                            </td>
                            <td>
                                <Link to={`/productdetails?id=${prod.products.id}`} title={prod.products.name}>{Truncate(prod.products.name,40)}</Link>
                                {/* <span>Delivery Date: 2019-09-22</span>
                                <span>Color: Brown</span>
                                <span>Reward Points: 300</span> */}
                            </td>
                            <td>3</td>
                            <td>
                                <div className="input-group btn-block">
                                <div className="product-qty mr-3">
                                    <input type="text" readOnly defaultValue={prod.quantity} />
                                    <span class={`dec qtybtn ${prod.quantity===1 && 'disabled'}`} onClick={()=>decCount(prod)}><i className="fa fa-minus"></i></span><span className={`inc qtybtn ${prod.quantity===prod.products.stock && 'disabled'}`} onClick={()=>incCount(prod.products)}><i class="fa fa-plus"></i></span>
                                </div>
                                <span className="input-group-btn">
                                    <button type="submit" className="btn btn-primary"><i className="fa fa-refresh" /></button>
                                                    <button type="button" className="btn btn-danger pull-right" onClick={() =>props.removefromBasket(prod.products)}><i className="fa fa-times-circle" /></button>
                                </span>
                                </div>
                            </td>
                            <td>&#2547; {currToFixed(prod.products.price)}</td>
                            <td>&#2547; {currToFixed(prod.products.price*prod.quantity)}</td>
                        </tr> 
                    </tbody>
                </table>
            </div>
        </form>
                    ))
                    
                    
                    : <div className='choose_product'><Link to='/' className="btn">Choose Product</Link></div>}

                {/* <Saparate/> */}
        </div>
    )
}

const mapStateToProps = state => (
    {
        basket:state.basketProd.basket,
        loading:state.cart.loading,
        cart:state.cart.cartProducts,
    }
)

const mapDispatchToProps = dispatch => (
    {
        addToBasket:(prod)=>dispatch(AddBasketProd(prod)),
        removefromBasket:(prod)=>dispatch(RemoveBasketProd(prod)),
        removesinglefromBasket:(prod)=>dispatch(RemoveSingleBasketProd(prod)),
        cartCheck:(cartProductsId,cartProductsCount)=>dispatch(CartProdCheckAction(cartProductsId,cartProductsCount))
    }
)

export default connect(mapStateToProps,mapDispatchToProps)(React.memo(CartForm))