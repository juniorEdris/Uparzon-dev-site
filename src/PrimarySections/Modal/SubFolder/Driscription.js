/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { useStateValue } from '../../../Utility/StateProvider'

export default function Driscription({product}) {
    const[{basket},dispatch]= useStateValue()
    
      // addToCart dispatch 
      const addToCart = () => {   
        let exist = false;
        const basketFull = [...basket]
        basketFull.forEach(x => {
          if (x.id === product.id) {
            x.count++;
            exist = true;
          }
        })
        if (!exist) {dispatch({ type: "ADD_TO_CART", payload: { ...product, count: 1 } })}
      }
    return (
        <div className="col-lg-7">
        <div className="product-details-inner">
            <div className="product-details-contentt">
            <div className="pro-details-name mb-10">
            <h3>{product?.name || 'Product name null'}</h3>
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
                <li><a href="#">{product?.ratings ? `${product?.reviews?.length} Reviews` : '0 Reviews'}</a></li>
                </ul>
            </div>
            <div className="price-box mb-15">
                <span className="regular-price"><span className="special-price"> &#2547; {product?.price}</span></span>
                <span className="old-price"><del>{product?.previous_price ? `${product.previous_price}` : ''}</del></span>
            </div>
            <div className="product-detail-sort-des pb-20">
            <p>{product?.description}</p>
            </div>
            <div className="pro-details-list pt-20">
                <ul>
                <li><span>Availability :</span>{product?.is_grocery ? 'In Stock' : 'Out of Stock'}</li>
                </ul>
            </div>
            <div className="product-availabily-option mt-15 mb-15">
                <h3>Available Options</h3>
                <div className="color-optionn">
                <h4><sup>*</sup>color</h4>
                <ul>
                
                {
                    product?.color.map(color =>{return(
                    <li>
                        <a className="c-black" href="#" title="Black" style={{backgroundColor:`${color}`}} />
                    </li>  
                    )})
                }
                </ul>
                </div>
            </div>
            <div className="pro-quantity-box mb-30">
                <div className="qty-boxx">
                <label>qty :</label>
                <input type="text" className='qty-input' placeholder={0} />
                <button className="btn-cart lg-btn" onClick={()=>addToCart()}>add to cart</button>
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
