/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

export default function Driscription({product}) {
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
                <li><a href="#">{product?.ratings ? `${product?.ratings?.length} Reviews` : '0 Reviews'}</a></li>
                </ul>
            </div>
            <div className="price-box mb-15">
                <span className="regular-price"><span className="special-price">{`$${product?.price}`}</span></span>
                <span className="old-price"><del>{product?.oldPrice ? `£${product.oldPrice}` : ''}</del></span>
            </div>
            <div className="product-detail-sort-des pb-20">
            <p>{product?.description}</p>
            </div>
            <div className="pro-details-list pt-20">
                <ul>
                <li><span>Availability :</span>{product?.isStock ? 'In Stock' : 'Out of Stock'}</li>
                </ul>
            </div>
            <div className="product-availabily-option mt-15 mb-15">
                <h3>Available Options</h3>
                <div className="color-optionn">
                <h4><sup>*</sup>color</h4>
                <ul>
                
                {
                    product?.colors.map(color =>{return(
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
                <input type="text" placeholder={0} />
                <button className="btn-cart lg-btn">add to cart</button>
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
