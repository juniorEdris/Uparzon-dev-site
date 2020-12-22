// Our Product,Hot Collection,Brand Sale,Shop(short-cirtuit evaluation to show grid and list view) product component

import React,{useEffect} from 'react'
import { Link } from 'react-router-dom';
import {  Truncate } from '../../../Data';
import { useStateValue } from '../../../Utility/StateProvider';
import $ from 'jquery'

function Product(product) {
  const [{ wishList, basket, compareList }, dispatch] = useStateValue()
  useEffect(() => {
    $('.action-links a').on('click', function (event) {
      event.preventDefault();
    });
  }, [])

  useEffect(() => {
    //Add every item to localStorage on every item click
    localStorage.setItem('Wish List', JSON.stringify(wishList))
    localStorage.setItem('Cart List', JSON.stringify(basket))
    localStorage.setItem('Compare List', JSON.stringify(compareList))
    
  }, [wishList, basket, compareList])
   
  const quickView = () => {
    dispatch({ type: "QUICK_VIEW", payload: product })
  }
  
  const addToCompare = () => {
    let exist = false
    const compare =[...compareList]
    compare.forEach(x => {
      if (x.id === product.id) {
        exist = true;
        return
      }
    })
    if (!exist) {
      dispatch({ type: "COMPARE_PRODUCTS", payload: product })
    }

  }

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

  const addToWishList= ()=>{
    let exist = false
    const wish =[...wishList]
    wish.forEach(x => {
      if (x.id === product.id) {
        exist = true;
        return
      }
    })
    if(!exist){
      dispatch({type:"ADD_TO_WISH_LIST",payload:product})
    }
  }

  return (
        <div>


          {
            product.isList ?  
            <div className="sinrato-list-item mb-30" id={product.id}>
            <div className="sinrato-thumb">
            <Link to={`/productdetails?id=${product.id}`} >
                <img  src={`https:${product.photo.replace('demostore', 'store')}`} className="pri-img" alt={product.name} />
                <img  src={`https:${product.photo.replace('demostore', 'store')}`} className="sec-img" alt={product.name} />
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
                <span className="regular-price"><span className={` ${product.special && 'special-price'}`}>£{product.price}</span></span>
                <span className="old-price"><del>{product.previous_price ? ` &#2547;${product.previous_price}` : ''}</del></span>
            </div>
            <button className="btn-cart" type="button" onClick={()=> addToCart()} data-target="#cart_modal" data-toggle="modal">add to cart</button>
            <div className="action-links sinrat-list-icon">
                <Link to='#' title="Wishlist" onClick={()=> addToWishList()}><i className="lnr lnr-heart" /></Link>
                <Link to='#' title="Compare" onClick={()=>addToCompare()}><i className="lnr lnr-sync" /></Link>
                <Link to='#' title="Quick view" onClick={()=>quickView()} data-target="#quickk_view" data-toggle="modal"><i className="lnr lnr-magnifier" /></Link>
            </div>
            </div>
        </div>
            :
            <div className={`product-item ${product.isGrid && 'mb-30'}`} id={product.id}>
                  <div className="product-thumb">
                    <Link to={`/productdetails?id=${product.id}`} >
                      <img src={`https:${product.photo.replace('demostore', 'store')}`} className="pri-img" alt={product.name} />
                      {/* <img src='https://uparzon.com.bd/assets/img/product/product-2.jpg' className="sec-img" alt={product.name} /> */}
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
                      <Link to="#" title="Wishlist" onClick={()=> addToWishList()}><i className="lnr lnr-heart" /></Link>
                      <Link to="#" title="Compare" onClick={()=>addToCompare()}><i className="lnr lnr-sync" /></Link>
                      <Link to="#" title="Quick view" onClick={()=>quickView()} data-target="#quickk_view" data-toggle="modal"><i className="lnr lnr-magnifier" /></Link>
                    </div> 
                  </div>
                  <div className="product-caption">
                    <div className="manufacture-product">
                      <p><Link to={`/vendor?id=${product.id}`}>{product.shop_name}</Link></p>
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
                      <span className="regular-price"><span className={` ${product.special && 'special-price'}`}> &#2547; {product.price}</span></span>
                      <span className="old-price"><del>{product.previous_price ? `£${product.previous_price}` : ''}</del></span>
                    </div>
                    <button className="btn-cart" onClick={(e)=> addToCart()} type="button">add to cart</button>
                  </div>
                
                </div>
          }

        </div>
    )
}

export default React.memo(Product)