import { Link } from 'react-router-dom'
import React,{useEffect} from 'react'
import $ from 'jquery'
import { useStateValue } from '../../../Utility/StateProvider'


export default function Details() {
  const [{productView,user},dispatch] = useStateValue()

  useEffect(() => {
    $('.useful-links a').on('click',function( event ) {
      event.preventDefault();
    });
    
  }, [])

  // const addToCart= (id,brand,name,oldPrice,price,sale,latest,special,img1,img2,categories,shots,colors,ratings)=>{
  //   if(user || !user){
  //     dispatch({type:"ADD_TO_CART",payload:{
  //             id,brand,name,oldPrice,price,sale,latest,special,img1,img2,categories,shots,colors,ratings
  //           }})
  //     }
  //   }
  // const addToWishList= (id,brand,name,oldPrice,price,sale,latest,special,img1,img2,categories,shots,colors,ratings)=>{
  //     dispatch({type:"ADD_TO_WISH_LIST",payload:{
  //       id,brand,name,oldPrice,price,sale,latest,special,img1,img2,categories,shots,colors,ratings
  //     }})
  // }

  return (
        <div className="col-lg-7">
        <div className="product-details-inner">
          <div className="product-details-contentt">
            <div className="pro-details-name mb-10">
            <h3>{productView?.name || undefined}</h3>
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
                <li><Link to="#" />{productView?.ratings.legnth || "0 Reviews"}</li>
              </ul>
            </div>
            <div className="price-box mb-15">
              <span className="regular-price"><span className="special-price">£{productView?.price || 0}</span></span>
              <span className="old-price"><del>£{productView?.oldPrice || 0}</del></span>
            </div>
            <div className="product-detail-sort-des pb-20">
              <p>{productView?.description || ""}</p>
            </div>
            <div className="pro-details-list pt-20">
              <ul>
                <li><span>Ex Tax :</span>£60.24</li>
                <li><span>Brands :</span><Link to="#" >{productView?.brand || "none"}</Link></li>
                <li><span>Product Code :</span>Digital</li>
                <li><span>Reward Points :</span>200</li>
                <li><span>Availability :</span>{productView?.id ? "In Stock" : "Out of Stock"}</li>
              </ul>
            </div>
            <div className="product-availabily-option mt-15 mb-15">
              <h3>Available Options</h3>
              <div className="color-optionn">
                <h4><sup>*</sup>color</h4>
                <ul>
                {
                    productView?.colors.map(color=>(
                  <li>
                    <Link className="c-black" href="#" title="Black" style={{backgroundColor:`${color}`}} />
                  </li>
                    ))
                }
                </ul> 
              </div>
            </div>
            <div className="pro-quantity-box mb-30">
              <div className="qty-boxx">
                <label>qty :</label>
                <input type="number" placeholder={0} />
                <button className="btn-cart lg-btn">add to cart</button>
              </div>
            </div>
            <div className="useful-links mb-20">
              <ul>
                <li>
                  <Link to="#" ><i className="fa fa-heart-o" />add to wish list</Link>
                </li>
                <li>
                  <Link to="#" ><i className="fa fa-refresh" />compare this product</Link>
                </li>
              </ul>
            </div>
            <div className="tag-line mb-20">
              <label>tag :</label>
              <Link to="/">Movado</Link>,
              <Link to="/">Omega</Link>
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