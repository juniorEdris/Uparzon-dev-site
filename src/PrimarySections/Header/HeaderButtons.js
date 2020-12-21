import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import { getSubTotal } from '../../Utility/Reducer'
import { useStateValue } from '../../Utility/StateProvider'
import './HeaderButton.css'

export default function HeaderButtons() {
    //mycart menu dropdown
    const [isCartActive, setCartActive] = useState(false)
    const showCart = (e)=>{
        e.preventDefault()
        setCartActive(!isCartActive)
        setIsAccActive(false)
    }
    // User btn active
    const [isAccActive, setIsAccActive] = useState(false);
    const AccBtn = (e) =>{
        e.preventDefault();
        setIsAccActive(!isAccActive);
        setCartActive(false);
    }
    const[{basket,wishList,user,}] = useStateValue()
    // Total Amount (inc vat & eco) 
    const eco_tax = getSubTotal(basket) / 1.51
    const vat_amount = getSubTotal(basket) / 0.20 
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
                <Link className="ha-toggle" to="#" onClick={showCart}><span className="lnr lnr-cart" /><span className="count">{ basket.length || 0 }</span></Link>
                <ul className={`mini-cart-drop-down ha-dropdown ${isCartActive ? 'active':''}`} onPointerLeave={()=>setCartActive(false)}>
                        {
                            basket.map((prod) => (
                            <li className="mb-30">
                                <div className="cart-img">
                                    <Link to={`/productdetails?id=${prod.id}`}><img alt="" src={`https:${prod.photo.replace('demostore', 'store')}`} /></Link>
                                </div>
                                <div className="cart-info">
                                        <h4><Link to={`/productdetails?id=${prod.id}`}>{prod.name} </Link></h4>
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
                    <Link onClick={AccBtn} className="ha-toggle" to={!user ? "#": "/dashboard"} ><span className="lnr lnr-user" /></Link>
                    {
                        user ?
                    <ul className={`box-dropdown ha-dropdown ${isAccActive ? 'active':''}`} onPointerLeave={()=>setIsAccActive(false)}>
                        <li><Link to="/dashboard">Dashboard</Link></li>
                        <li><Link to="/vendor">My store</Link></li>
                        <li><Link to="/">Log out</Link></li>
                    </ul>
                    :
                    <ul className={`box-dropdown ha-dropdown ${isAccActive ? 'active':''}`} onPointerLeave={()=>setIsAccActive(false)}>
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
