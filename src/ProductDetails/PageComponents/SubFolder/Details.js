import { Link } from 'react-router-dom'
import React,{useEffect} from 'react'
import $ from 'jquery'
import './Details.css'
import { connect } from 'react-redux'
import { AddBasketProd } from '../../../Utility/Redux/Action/BasketAction'
import { AddCompareProd } from '../../../Utility/Redux/Action/CompareListAction'
import { AddWishProd } from '../../../Utility/Redux/Action/WishListAction'
import { GetProductDetails } from '../../../Utility/Redux/Action/ProductDetailsAction'
import { currToFixed } from '../../../PrimarySections/Essentials/CurrencyFormat'
import { FetchProductSuggetions } from '../../../Utility/Redux/Action/ProdSuggestionAction'
import { productAddAnimation } from '../../../Utility/Redux/Action/ProductAddedAction'
import { renderHTML } from '../../../PrimarySections/Essentials'

function Details(props) {
  useEffect(() => {
        $('.useful-links a').on('click',function( event ) {
          event.preventDefault();
        });
        // props.fetchSuggestions(props.details?.category_id)        
      },[])
      useEffect(() => {
        document.title = props.details?.name ? `${props.details?.name} | Uparzon E-commerce Store` : 'Uparzon E-commerce Store'
      }) 

  return (
        <div className="col-lg-7">
        <div className="product-details-inner">
          <div className="product-details-contentt">
            <div className="pro-details-name mb-10">
            <h3>{props.loading ? '' : props.details?.name }</h3>
            </div>
            {props.details?.reviews &&
            <div className="pro-details-review mb-20">
              <ul>
                <li>
                  <span><i className="fa fa-star" /></span>
                  <span><i className="fa fa-star" /></span>
                  <span><i className="fa fa-star" /></span>
                  <span><i className="fa fa-star" /></span>
                  <span><i className="fa fa-star" /></span>
                </li>
                <li><Link to="#" />{props.details?.reviews?.legnth || "0 Reviews"}</li>
              </ul>
            </div>
            }
            <div className="price-box mb-15">
              {props.details?.price ? <span className="regular-price"><span className="special-price">&#2547;{ currToFixed( props.details?.price) || ''}</span></span>: ''}
              {props.details?.previous_price > 0.0 ? <span className="old-price"><del>&#2547;{currToFixed(props.details?.previous_price) || ''}</del></span> : ''}
            </div>
            <div className="product-detail-sort-des pb-20">
              <p>{renderHTML(props.details?.details) || ""}</p>
            </div>
            <div className="pro-details-list pt-20">
              <ul>
                <li><span>Ex Tax :</span>&#2547; 60.24</li>
                <li><span>Brands :</span><Link to={`/vendor?id=${props.details?.shop_id}`} >{props.details?.shop_name || "none"}</Link></li>
                <li><span>Product Code :</span>Digital</li>
                <li><span>Reward Points :</span>200</li>
                <li><span>Availability :</span>{props.details?.stock === null ? "Out of Stock" : props.details?.stock}</li>
              </ul>
            </div>
            <div className="product-availabily-option mt-15 mb-15">
              <h3>Available Options</h3>
              <div className="color-optionn">
                <h4><sup>*</sup>color</h4>
                <ul>
                  {
                    props.details?.colors?.split(',').map(color=>(
                  <li>
                    <Link className="c-black" href="#" title="Black" style={{backgroundColor: color}} />
                  </li>
                    ))
                  }
                </ul> 
              </div>
            </div>
            <div className="pro-quantity-box mb-30">
              <div className="qty-boxx">
              <label>qty :</label>
                <input type="text" placeholder={0} />
              <button className="btn-cart lg-btn" onClick={ ()=>{props.addToBasket(props.details); props.cartAnimation('basket')}}>add to cart</button>
              </div>
            </div>
            <div className="useful-links mb-20">
              <ul>
                <li>
                  <Link to="#" onClick={ ()=>{props.addToWish(props.details); props.cartAnimation('wish list')}}><i className="fa fa-heart-o" />add to wish list</Link>
                </li>
                <li>
                <Link to="#" onClick={ ()=>{props.addToCompare(props.details); props.cartAnimation('product compare')}}><i className="fa fa-refresh" />compare this product</Link>
                </li>
              </ul>
            </div>
            <div className="tag-line mb-20">
              <label>tag :</label>
              {props.details?.tags?.split(',').map(x=><Link to="/">{x}</Link>)}
            </div>
            <div className="pro-social-sharing">
              <label>share :</label>
              <ul>
                <li className="list-inline-item">
                  <Link href="https://facebook.com/" className="bg-facebook" title="Facebook">
                    <i className="fa fa-facebook" />
                    <span>like 0</span>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link href="https://twitter.com/" className="bg-twitter" title="Twitter">
                    <i className="fa fa-twitter" />
                    <span>tweet</span>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link href="https://linkedin.com/" className="bg-google" title="Google Plus">
                    <i className="fa fa-google-plus" />
                    <span>google +</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
        )
}


const mapStateToProps = state=>(
  {
    loading:state.productDetails.loading,
    details:state.productDetails.product,
  }
)
const mapDispatchToProps=dispatch=>(
  {
  addToBasket: (prod) => dispatch(AddBasketProd(prod)),
  addToCompare:(prod)=>dispatch(AddCompareProd(prod)),
  addToWish:(prod)=>dispatch(AddWishProd(prod)),
  getProdDetails:(id)=>dispatch(GetProductDetails(id)),
  fetchSuggestions:(id)=>dispatch(FetchProductSuggetions(id)),
  cartAnimation:(x)=>dispatch(productAddAnimation(x)),
  }
)

export default connect(mapStateToProps,mapDispatchToProps)(Details)