import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import { useStateValue } from '../../Utility/StateProvider';
import $ from 'jquery'
import './CartForm.css'
import {DelItem} from '../../Utility/PageAction'

export default function CartForm() {
    const [{basket}] = useStateValue();   

    useEffect(() => {
        //Product Quantity 
		$('.product-qty').append('<span class="dec qtybtn"><i class="fa fa-minus"></i></span><span class="inc qtybtn"><i class="fa fa-plus"></i></span>');
		$('.qtybtn').on('click', function() {
            var $button = $(this);
            var oldValue = $button.parent().find('input').val();
            let newVal;
		    if ($button.hasClass('inc')) {
                newVal = parseFloat(oldValue) + 1;
		    } else {
                // Don't allow decrementing below zero
		        if (oldValue > 0) {
                    newVal = parseFloat(oldValue) - 1;
		        } else {
                    newVal = 0;
		        }
		    }
            $button.parent().find('input').val(newVal);
		});
    }, [])

    return (
        <div className="">
            {basket.length>0 ?        
                basket.map(prod=>(
                <form action="#">
                <div className="table-responsive mb-1">
                    <div className="col-12 d-flex flex-column flex-md-row justify-content-between align-items-center vendor__row">
                        <div className="vendor__name">
                           <h3>Shop:  <Link to='/shop'><span>{prod.shop_name}</span></Link></h3>
                           <p>Phone:  {prod.phone || 'none'}</p>
                           <p>Address:  {prod.shop_address || 'none'}</p>
                        </div>
                        <div className="vendor__alt__text">
                            <small className='text-muted'>Minimum 500tk product purchaseable from single Shop</small>
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
                                <Link to="/productdetails"><img src={`https:${prod.photo.replace('demostore','store')}`} alt={prod.name} title={prod.name} className="img-thumbnail" /></Link>
                            </td>
                            <td>
                                <Link to="/productdetails">{prod.name}</Link>
                                <span>Delivery Date: 2019-09-22</span>
                                <span>Color: Brown</span>
                                <span>Reward Points: 300</span>
                            </td>
                            <td>3</td>
                            <td>
                                <div className="input-group btn-block">
                                <div className="product-qty mr-3">
                                    <input type="text" defaultValue={prod.count} />
                                </div>
                                <span className="input-group-btn">
                                    <button type="submit" className="btn btn-primary"><i className="fa fa-refresh" /></button>
                                    <button type="button" className="btn btn-danger pull-right" onClick={()=>DelItem(prod,basket,'Cart List')}><i className="fa fa-times-circle" /></button>
                                </span>
                                </div>
                            </td>
                            <td>&#2547; {prod.price}</td>
                            <td>&#2547; {(prod.price*prod.count).toFixed(2)}</td>
                        </tr> 
                    </tbody>
                </table>
            </div>
        </form>
                    ))
                    
                    
                    : <div className='choose_product'><Link to='/' className="btn">Choose Product</Link></div>}
                
        </div>
    )
}
