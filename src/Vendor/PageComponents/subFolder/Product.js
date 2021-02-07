// Vendor products(short-cirtuit evaluation to show grid and list view) product component

import React,{useEffect} from 'react'
import { Link } from 'react-router-dom';
import {  Truncate } from '../../../Data';
import $ from 'jquery'

export default function Product(product) {

  useEffect(() => {
    $('.action-links a').on('click', function (event) {
      event.preventDefault();
    });
  }, [])
  


    return (
        <div>


          {
            product.isList ?  
            <div className="sinrato-list-item mb-30" id={product.id}>
            <div className="sinrato-thumb">
            <Link to={`/productdetails?id=${product.id}`} >
                {/* <img  src={`https:${product.photo.replace('demostore', 'store')}`} className="pri-img" alt={product.name} /> */}
                <img  src='https://uparzon.com.bd/assets/img/product/product-2.jpg' className="pri-img" alt={product.name} />
            </Link>
            <div className="box-label">
                <div className="label-product label_new">
                    <span>{product.latest ? 'new': ''}</span>
                </div>
                <div className="label-product label_sale">
                    <span>{product.sale ? `-${product.sale}%` : '' }</span>
                </div>
            </div>
            </div>
            <div className="sinrato-list-item-content">
            <div className="manufacture-product">
                <span><Link to='/'>{product.brand}</Link></span>
            </div>
            <div className="sinrato-product-name">
                <h4><Link to={`/productdetails?id=${product.id}`} title={product.product_name}>{Truncate(product.name)}</Link></h4>
            </div>
            <div className="sinrato-ratings mb-15">
                <span><i className="fa fa-star" /></span>
                <span><i className="fa fa-star" /></span>
                <span><i className="fa fa-star" /></span>
                <span><i className="fa fa-star" /></span>
                <span><i className="fa fa-star" /></span>
            </div> 
            <div className="sinrato-product-des">
                <p> {product.description || ''}</p>
            </div>
            </div>
            <div className="sinrato-box-action">
            <div className="price-box">
                <span className="regular-price"><span className={` ${product.special && 'special-price'}`}>£{product.price}</span></span>
                <span className="old-price"><del>{product.previous_price ? `£${product.previous_price}` : ''}</del></span>
            </div>
            <button className="btn-cart" type="button"  data-target="#cart_modal" data-toggle="modal">add to cart</button>
            <div className="action-links sinrat-list-icon">
                <Link to='#' title="Wishlist" ><i className="lnr lnr-heart" /></Link>
                <Link to='#' title="Compare" ><i className="lnr lnr-sync" /></Link>
                <Link to='#' title="Quick view" data-target="#quickk_view" data-toggle="modal"><i className="lnr lnr-magnifier" /></Link>
            </div>
            </div>
        </div>
            :
            <div className={`product-item ${product.isGrid && 'mb-30'}`} id={product.id}>
                  <div className="product-thumb">
                    <Link to={`/productdetails?id=${product.id}`} >
                      {/* <img src={`https:${product.photo.replace('demostore', 'store')}`} className="pri-img" alt={product.name} /> */}
                      <img src={product.photo} className="pri-img" alt={product.name} />
                    </Link>
                    
                    <div className="box-label">
                      <div className="label-product label_new">
                        <span>{product.latest ? 'new': ''}</span>
                      </div>
                      <div className="label-product label_sale">
                        <span>{product.sale ? `-${product.sale}%` : '' }</span>
                      </div>
                    </div>
                    <div className="action-links">
                      <Link to="#" title="Edit details" ><i className="lnr lnr-heart" /></Link>
                      <Link to="#" title="Mark as sold" ><i className="lnr lnr-sync" /></Link>
                      <Link to="#" title="Quick view" data-target="#quickk_view" data-toggle="modal"><i className="lnr lnr-magnifier" /></Link>
                    </div> 
                  </div>
                  <div className="product-caption">
                    <div className="manufacture-product">
                      <p><Link to="/">{product.shop_name}</Link></p>
                    </div>
                    <div className="product-name">
                      <h4><Link to={`/productdetails?id=${product.id}`} title={product.product_name}>{Truncate(product.product_name,25) }</Link></h4>
                    </div>
                    <div className="ratings">
                      <span className="purple"><i className="lnr lnr-star" /></span>
                      <span className="purple"><i className="lnr lnr-star" /></span>
                      <span className="purple"><i className="lnr lnr-star" /></span>
                      <span className="purple"><i className="lnr lnr-star" /></span>
                      <span><i className="lnr lnr-star" /></span>
                    </div>
                    <div className="price-box">
                      <span className="regular-price"><span className={` ${product.special && 'special-price'}`}>£{product.price}</span></span>
                      <span className="old-price"><del>{product.previous_price ? `£${product.previous_price}` : ''}</del></span>
                    </div>
                    <button className="btn-cart"  type="button">out of Stock</button>
                  </div>
                
                </div>
          }

        </div>
    )
}
