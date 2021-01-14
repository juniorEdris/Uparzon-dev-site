import React,{useState} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getSubTotal } from '../../Utility/Reducer'
import { RemoveBasketProd } from '../../Utility/Redux/Action/BasketAction'
import { useStateValue } from '../../Utility/StateProvider'
import { currToFixed } from '../Essentials/CurrencyFormat'
import './HeaderButton.css'

function HeaderButtons(props) {
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
    const[{user}] = useStateValue()
    // Total Amount (inc vat & eco) 
    const eco_tax = getSubTotal(props.basket) / 1.51
    const vat_amount = getSubTotal(props.basket) / 0.20 
    const get_total = getSubTotal(props.basket) + eco_tax + vat_amount
    return (
        <div className="col-lg-4 col-md-8 col-12 col-sm-8 order-lg-last">
            <div className="mini-cart-option">
            <ul>
                <li className="compare"> 
                    <Link className="ha-toggle" to={`/compare`}><span className="lnr lnr-sync" /></Link>
                </li>
                
                <li className="wishlist">
                <Link className="ha-toggle" to='/wishlist'><span className="lnr lnr-heart" /><span className="count">{ props.wishList.length }</span></Link>
                </li>
                <li className="my-cart">
                <Link className="ha-toggle" to="#" onClick={showCart}><span className="lnr lnr-cart" /><span className="count">{ props.basket.length }</span></Link>
                <ul className={`mini-cart-drop-down ha-dropdown ${isCartActive ? 'active':''}`} onPointerLeave={()=>setCartActive(false)}>
                        {
                            props.basket.length>0 && props.basket.map((prod) => (
                            <li className="mb-30">
                                <div className="cart-img">
                                    {/* <Link to={`/productdetails?id=${prod.id}`}><img alt="" src={`https:${prod.photo.replace('demostore', 'store')}`} /></Link> */}
                                    <Link to={`/productdetails?id=${prod.id}`}><img alt="" src={`https://uparzon.com.bd/assets/img/product/product-4.jpg`} /></Link>
                                </div>
                                <div className="cart-info">
                                        <h4><Link to={`/productdetails?id=${prod.id}`}>{prod.name} </Link></h4>
                                        <span> <span>{`${prod.count} x` }</span>&#2547; {currToFixed(prod.price)}</span>
                                </div>
                                <div className="del-icon">
                                        <i className="fa fa-times-circle" onClick={()=> props.removefromBasket(prod) }/>
                                </div>
                            </li>
                                ))
                        }

                    <li>
                    <div className="subtotal-text">Sub-total: </div>
                    <div className="subtotal-price">&#2547; {currToFixed(getSubTotal(props.basket))}</div>
                    </li>
                    <li>
                    <div className="subtotal-text">Eco Tax (-2.00): </div>
                    <div className="subtotal-price">&#2547; {currToFixed(eco_tax)}</div>
                    </li>
                    <li>
                    <div className="subtotal-text">Vat (20%): </div>
                    <div className="subtotal-price">&#2547; {currToFixed(vat_amount)}</div>
                    </li>
                    <li>
                    <div className="subtotal-text">Total: </div>
                    <div className="subtotal-price"><span>&#2547; {currToFixed(get_total)}</span></div>
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

const mapDistpatchToProps = dispatch => ({
    removefromBasket:(prod)=>dispatch(RemoveBasketProd(prod))
})
export default connect(state=>(
    {
        basket:state.basketProd.basket,
        compare:state.compareListProd.compareList,
        wishList:state.wishListProd.wishList,
    }
),mapDistpatchToProps)(HeaderButtons)