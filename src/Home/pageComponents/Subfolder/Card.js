// Laptop & Computer,Headphones & Accessories,Business & Office product component
import React from 'react'
import { Link } from 'react-router-dom'
import { Truncate } from '../../../Data'
import { currToFixed } from '../../../PrimarySections/Essentials/CurrencyFormat'

export default function Card(props) {
  const {product} = props
    return (
        <div className="product-module-four-item">
          <div className="product-module-caption">
            <div className="manufacture-com">
              <p><Link to={`/vendor?id=${product.shop_id}`}>{Truncate(product.shop_name,15)}</Link></p>
            </div>
            <div className="product-module-name">
              <h4><Link to={`/productdetails?id=${product.id}`} title={product.name}>{Truncate(product.name)}</Link></h4>
            </div>
            <div className="ratings">
              <span><i className="lnr lnr-star" /></span>
              <span><i className="lnr lnr-star" /></span>
              <span><i className="lnr lnr-star" /></span>
              <span><i className="lnr lnr-star" /></span>
              <span><i className="lnr lnr-star" /></span>
            </div>
            <div className="price-box-module">
              <span className="regular-price"><span className={` special-price`}>&#2547;{currToFixed(product.price)}</span></span>
              {product.previous_price && <span className="old-price"><del>&#2547;{currToFixed(product.previous_price)}</del></span>}
            </div>
          </div>
          <div className="product-module-thumb">
            {product.photo === null ? 
            <Link to={`/productdetails?id=${product.id}`} >
              <img  src='./assets/img/uparzon_placeholder.png' className="" alt={product.name} />
            </Link> 
            :
            <Link to={`/productdetails?id=${product.id}`} >
              <img  src={`https:${product.photo}`} className="pri-img" alt={product.name} />
              <img  src={`https:${product.thumbnail}`} className="sec-img" alt={product.name} />
            </Link>
            }
          </div>
        </div> 
    )
}
