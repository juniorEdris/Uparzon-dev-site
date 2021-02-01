/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */

import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { AddBasketProd } from '../../../Utility/Redux/Action/BasketAction';
import { AddCompareProd } from '../../../Utility/Redux/Action/CompareListAction';
import { productAddAnimation } from '../../../Utility/Redux/Action/ProductAddedAction';
import { AddWishProd } from '../../../Utility/Redux/Action/WishListAction';

function Description(props) {

    return (
        <div className="col-lg-7">
        <div className="product-details-inner">
            <div className="product-details-contentt">
            <div className="pro-details-name mb-10">
            <h3>{props.modalProd?.name || 'Product name null'}</h3>
            </div>
            <div className="pro-details-review mb-20">
                <ul>
                <li>
                    <span><i className="fa fa-star" /></span>
                    <span><i className="fa fa-star" /></span>
                    <span><i className="fa fa-star" /></span>
                    <span><i className="fa fa-star" /></span>
                    <span><i className="fa fa-star" /></span>
                </li>
                <li><Link to="#">{props.modalProd?.ratings ? `${props.modalProd?.reviews?.length} Reviews` : '0 Reviews'}</Link></li>
                </ul>
            </div>
            <div className="price-box mb-15">
                <span className="regular-price"><span className="special-price"> &#2547; {props.modalProd?.price}</span></span>
                <span className="old-price"><del>{props.modalProd?.previous_price ? `${props.modalProd.previous_price}` : ''}</del></span>
            </div>
            <div className="product-detail-sort-des pb-20">
            <p>{props.modalProd?.description}</p>
            </div>
            <div className="pro-details-list pt-20">
                <ul>
                <li><span>Availability :</span>{props.modalProd?.is_grocery ? 'In Stock' : 'Out of Stock'}</li>
                </ul>
            </div>
            <div className="product-availabily-option mt-15 mb-15">
                <h3>Available Options</h3>
                <div className="color-optionn">
                <h4><sup>*</sup>color</h4>
                {/* <ul>
                
                {
                    props.modalProd?.color.map(color =>{return(
                    <li>
                        <a className="c-black" href="#" title="Black" style={{backgroundColor:`${color}`}} />
                    </li>  
                    )})
                }
                </ul> */}
                </div>
            </div>
            <div className="pro-quantity-box mb-30">
                <div className="qty-boxx">
                <label>qty :</label>
                <input type="text" className='qty-input' placeholder={0} />
                <button className="btn-cart lg-btn" onClick={()=>{props.addToBasket(props.modalProd); props.cartAnimation('basket');}}>add to cart</button>
                </div>
            </div>
            <div className="pro-social-sharing">
                <label>share :</label>
                <ul>
                <li className="list-inline-item">
                    <a href="#" className="bg-facebook" title="Facebook">
                    <i className="fa fa-facebook" />
                    <span>like 0</span>
                    </a>
                </li>
                <li className="list-inline-item">
                    <a href="#" className="bg-twitter" title="Twitter">
                    <i className="fa fa-twitter" />
                    <span>tweet</span>
                    </a>
                </li>
                <li className="list-inline-item">
                    <a href="#" className="bg-google" title="Google Plus">
                    <i className="fa fa-google-plus" />
                    <span>google +</span>
                    </a>
                </li>
                </ul>
            </div>
            </div>
        </div>
        </div>
    )
}

const mapStateToProps = state=>({
    modalProd:state.productView.quickView,
})
const mapDispatchToProps=dispatch=>(
    {
    addToBasket: (prod) => dispatch(AddBasketProd(prod)),
    addToCompare:(prod)=>dispatch(AddCompareProd(prod)),
    addToWish:(prod)=>dispatch(AddWishProd(prod)),
    cartAnimation:(x)=>dispatch(productAddAnimation(x)),
    }
)

export default connect(mapStateToProps,mapDispatchToProps)(Description)