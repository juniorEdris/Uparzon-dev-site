// Our Product,Hot Collection,Brand Sale,Shop(short-cirtuit evaluation to show grid and list view) product component

import React from 'react'
import { Link } from 'react-router-dom';
import {  Truncate } from '../../../Data';
import './product.css'
import { connect } from 'react-redux';
import {AddBasketProd} from '../../../Utility/Redux/Action/BasketAction'
import { AddCompareProd } from '../../../Utility/Redux/Action/CompareListAction';
import { AddWishProd } from '../../../Utility/Redux/Action/WishListAction';
import { ShowQuickDes } from '../../../Utility/Redux/Action/QuickViewAction';
import { productAddAnimation } from '../../../Utility/Redux/Action/ProductAddedAction';
import { currToFixed } from '../../../PrimarySections/Essentials/CurrencyFormat';

function Product(props) {
  const {isList,product,isGrid} = props
  return (
        <div>
          {
          isList ?  
            <div className="sinrato-list-item mb-30" id={product.id}>
              
            <div className="sinrato-thumb">
            {product.photo === null ? 
            <Link to={`/productdetails?id=${product.id}`} >
              <img  src='./assets/img/uparzon_placeholder.jpg' className="" alt={product.name} />
            </Link> 
            :
            <Link to={`/productdetails?id=${product.id}`} >
              <img  src={`https:${product.photo}`} className="pri-img" alt={product.name} />
              <img  src={`https:${product.thumbnail}`} className="sec-img" alt={product.name} />
            </Link>
            }
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
                <span><Link to={`/vendor?id=${product.shop_id}`}>{Truncate(product.shop_name,15)}</Link></span>
            </div>
            <div className="sinrato-product-name">
                <h4><Link to={`/productdetails?id=${product.id}`} title={product.name}>{Truncate(product.name)}</Link></h4>
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
                <span className="regular-price"><span className={` ${product.special && 'special-price'}`}>&#2547;{currToFixed(product.price)}</span></span>
                {product.previous_price && <span className="old-price"><del>&#2547;{currToFixed(product.previous_price)}</del></span>}
            </div>
            {/* <button className="btn-cart" type="button" onClick={(e)=> {props.addToBasket(product); props.cartAnimation('basket');}} data-target="#cart_modal" data-toggle="modal">add to cart</button> */}
            <Link to={`/productdetails?id=${product.id}`} className="btn-cart" type="button">Product details</Link>
            <div className="action-links sinrat-list-icon">
                <Link to='#' title="Wishlist" onClick={()=> {props.addToWish(product); props.cartAnimation('wish list');}}><i className="lnr lnr-heart" /></Link>
                <Link to='#' title="Compare" onClick={()=>{props.addToCompare(product); props.cartAnimation('product compare');}}><i className="lnr lnr-sync" /></Link>
                <Link to='#' title="Quick view" onClick={()=>props.showProductDes(product)} data-target="#quickk_view" data-toggle="modal"><i className="lnr lnr-magnifier" /></Link>
            </div>
            </div>
        </div>
            :
            <div className={`product-item ${isGrid && 'mb-30'}`} id={product.id}>
                  <div className="product-thumb product">
                    {product.photo ===null ? 
                    <Link to={`/productdetails?id=${product.id}`} >
                      <img  src='./assets/img/uparzon_placeholder.jpg' className="" alt={product.name} />
                    </Link> 
                    :
                    <Link to={`/productdetails?id=${product.id}`} >
                      <img  src={`https:${product.photo}`} className="pri-img" alt={product.name} />
                      <img  src={`https:${product.thumbnail}`} className="sec-img" alt={product.name} />
                    </Link>
                    }
                    <div className="box-label">
                      <div className="label-product label_new">
                        <span>{product.latest ? 'new': ''}</span>
                      </div>
                      <div className="label-product label_sale">
                        <span>{product.sale ? `-${product.sale}%` : '' }</span>
                      </div>
                    </div>
                    <div className="action-links">
                      <Link to="#" title="Wishlist" onClick={()=>{ props.addToWish(product); props.cartAnimation('wish list');}}><i className="lnr lnr-heart" /></Link>
                      <Link to="#" title="Compare" onClick={()=>{props.addToCompare(product); props.cartAnimation('product compare');}}><i className="lnr lnr-sync" /></Link>
                      <Link to="#" title="Quick view" onClick={()=>{props.showProductDes(product);}} data-target="#quickk_view" data-toggle="modal"><i className="lnr lnr-magnifier" /></Link>
                    </div> 
                  </div>
                  <div className="product-caption">
                    <div className="manufacture-product">
                      <p><Link to={`/vendor?id=${product.shop_id}`}>{Truncate(product.shop_name,15)}</Link></p>
                    </div>
                    <div className="product-name">
                      <h4><Link to={`/productdetails?id=${product.id}`} title={product.name}>{Truncate(product.name,25) }</Link></h4>
                    </div>
                    <div className="ratings">
                      <span className="purple"><i className="lnr lnr-star" /></span>
                      <span className="purple"><i className="lnr lnr-star" /></span>
                      <span className="purple"><i className="lnr lnr-star" /></span>
                      <span className="purple"><i className="lnr lnr-star" /></span>
                      <span><i className="lnr lnr-star" /></span>
                    </div>
                    <div className="price-box">
                      <span className="regular-price"><span className={` ${product.special && 'special-price'}`}> &#2547;{product.price.toFixed(2)}</span></span>
                      { product.previous_price && <span className="old-price"><del>&#2547;{product.previous_price.toFixed(2)}</del></span>}
                    </div>
                    {/* <button className="btn-cart" onClick={(e)=> {props.addToBasket(product); props.cartAnimation('basket');}} type="button">add to cart</button> */}
                    <Link to={`/productdetails?id=${product.id}`} className="btn-cart" type="button">Product details</Link>
                  </div>
                
                </div>
          }

        </div>
    )
}

const mapStateToProps =state=>(
  {
    basket:state.basketProd.basket,
  }
)
const mapDispatchToProps =dispatch=>(
  {
    addToBasket: (prod) => dispatch(AddBasketProd(prod)),
    addToCompare:(prod)=>dispatch(AddCompareProd(prod)),
    addToWish:(prod)=>dispatch(AddWishProd(prod)),
    showProductDes:(prod)=>dispatch(ShowQuickDes(prod)),
    cartAnimation:(x)=>dispatch(productAddAnimation(x)),
  }
)

export default connect(mapStateToProps,mapDispatchToProps)(React.memo(Product))