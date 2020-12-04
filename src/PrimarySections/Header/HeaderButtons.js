import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import { getSubTotal } from '../../Utility/Reducer'
import { useStateValue } from '../../Utility/StateProvider'
import $ from 'jquery'
import './HeaderButton.css'

export default function HeaderButtons() {
    useEffect(() => {
		/*Header Cart
		-----------------------------------*/
		// var headerActionToggle = $('.ha-toggle');
		// var headerActionDropdown = $('.ha-dropdown');
		// Toggle Header Cart
		// headerActionToggle.on("click", function() {
		// 	var $this = $(this);
		// 	headerActionDropdown.slideUp();
		// 	if($this.siblings('.ha-dropdown').is(':hidden')){
		// 		$this.siblings('.ha-dropdown').slideDown();
		// 	} else {
		// 		$this.siblings('.ha-dropdown').slideUp();
		// 	}
		// });
		// // Prevent closing Header Cart upon clicking inside the Header Cart
		// $('.ha-dropdown').on('click', function(e) {
		// 	e.stopPropagation();
		// });
    }, [])

    // Basket counting functionality
    const[{basket,wishList,user,}] = useStateValue()
    // Total Amount (inc vat & eco) 
    const eco_tax = getSubTotal(basket) / 1.51
    const vat_amount = getSubTotal(basket) * 0.20 
    const get_total = getSubTotal(basket) + eco_tax + vat_amount

    return (
        <div className="col-lg-4 col-md-8 col-12 col-sm-8 order-lg-last">
            <div className="mini-cart-option">
            <ul>
                <li className="compare"> 
                    <Link className="ha-toggle" to={`/compare`}><span className="lnr lnr-sync" /></Link>
                </li>
                
                <li className="wishlist">
                <Link className="ha-toggle" to='/wishlist'><span className="lnr lnr-heart" /><span className="count">{ wishList.length || 0 }</span></Link>
                </li>
                <li className="my-cart">
                <Link className="ha-toggle " to="/cart" ><span className="lnr lnr-cart" /><span className="count">{ basket.length || 0 }</span></Link>
                <ul className={`mini-cart-drop-down ha-dropdown`}>
                        {
                            basket.map((prod) => (
                            <li className="mb-30">
                                <div className="cart-img">
                                    <a href="/"><img alt="" src={prod?.img2} /></a>
                                </div>
                                <div className="cart-info">
                                        <h4><a href="/">{prod.name} </a></h4>
                                        <span> <span>{`${prod.count} x` }</span>{`£ ${prod.price}`}</span>
                                </div>
                                <div className="del-icon">
                                    <i className="fa fa-times-circle" />
                                </div>
                            </li>
                                ))
                        }

                    <li>
                    <div className="subtotal-text">Sub-total: </div>
                    <div className="subtotal-price">${getSubTotal(basket).toFixed(2)}</div>
                    </li>
                    <li>
                    <div className="subtotal-text">Eco Tax (-2.00): </div>
                    <div className="subtotal-price">${eco_tax.toFixed(2)}</div>
                    </li>
                    <li>
                    <div className="subtotal-text">Vat (20%): </div>
                    <div className="subtotal-price">${vat_amount.toFixed(2)}</div>
                    </li>
                    <li>
                    <div className="subtotal-text">Total: </div>
                    <div className="subtotal-price"><span>${get_total.toFixed(2)}</span></div>
                    </li>
                    <li className="mt-30">
                    <Link className="cart-button" to="/cart">view cart</Link>
                    </li>
                    <li>
                    <Link className="cart-button" to={!user ? "#": "/checkout"} data-target={!user && "#login_modal"} data-toggle={!user && "modal"}>checkout</Link>
                    </li>
                </ul>
                </li>
                <li className="compare user-cart"> 
                    <Link className="ha-toggle" to={!user ? "#": "/dashboard"} ><span className="lnr lnr-user" /></Link>
                    {
                        user ?
                    <ul className={`box-dropdown ha-dropdown`}>
                        <li><Link to="/dashboard">Dashboard</Link></li>
                        <li><Link to="/">Log out</Link></li>
                    </ul>
                    :
                    <ul className={`box-dropdown ha-dropdown`}>
                        <li><Link to="/register">Register</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
                    
                    }
                </li>
                
            </ul>
            </div>
        </div>
    )
}
