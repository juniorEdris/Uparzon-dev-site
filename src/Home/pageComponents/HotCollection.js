/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { FetchData } from '../../PrimarySections/Connections/Axios'
import ModalSection from '../../PrimarySections/Modal/ModalSection'
import { useStateValue } from '../../Utility/StateProvider'
import Product from './Subfolder/Product'
import {Request} from '../../PrimarySections/Connections/APILink';
import { ProductLoader } from '../../PrimarySections/ReactPlaceHolder/ReactPlaceHolder'
import { connect } from 'react-redux'
import { fetchHomeProds } from '../../Utility/Redux/Action/HomeProdAction'

function HotCollection(props) {
  
  const [state] = useStateValue()
  useEffect(() => {
      props.fetchHotCollection()
    }, [])
 const Card = props.hotCollection.map(product =>(
  <div className="col mb-30">
   <Product key={product.id} {...product}/>
  </div> /* single item end */
  ))
    return (
<div className="home-module-three hm-1 fix pb-40">
  <div className="container-fluid">
    <div className="section-title module-three">
      <h3><span>Hot</span> Collection</h3>
      <div className="boxx-tab">
        <ul className="nav my-tab">
          <li>
            <a className="active" data-toggle="tab" href="#module-one">Featured Products</a>
          </li>
          <li>
            <a data-toggle="tab" href="#module-two">On sale Products</a>
          </li>
          <li>
            <a data-toggle="tab" href="#module-three">Best sellers Products</a>
          </li>
        </ul>
      </div>
    </div>
    
    {
      props.loading ? 
        <ProductLoader className='product-item'/> 
        :
      <div className="tab-content">
      <div className="tab-pane fade show active" id="module-one">
        <div className="module-four-wrapper custom-seven-column">
          {/* module-one starts here */}

          <div className="col col-2 mb-30">
            <div className="product-item">
              <div className="product-thumb">
                <a href="shop-grid-left-sidebar.html">
                  <img src="https://uparzon.com.bd/assets/img/product/img-module1.jpg" alt="" />
                </a>
              </div>
            </div>
          </div> {/* single item end */}
          {Card}
          <div className="col mb-30 more__btn">
            <div className="more__btn__child">
              <p>1000+ Products Available in Hot Collection</p>
              <Link to='/shop' className="btn">See More</Link>
            </div>
          </div>
        </div>
      </div>
      {/* module-two starts here */}
      <div className="tab-pane fade" id="module-two">
        <div className="module-four-wrapper custom-seven-column">
        <div className="col col-2 mb-30">
            <div className="product-item">
              <div className="product-thumb">
                <a href="shop-grid-left-sidebar.html">
                  <img src="https://uparzon.com.bd/assets/img/product/product-3.jpg" alt="" />
                </a>
              </div>
            </div>
          </div> {/* single item end */}
          {Card}
          <div className="col mb-30 more__btn">
            <div className="more__btn__child">
              <p>1000+ Products Available in Hot Collection</p>
              <Link to='/shop' className="btn">See More</Link>
            </div>
          </div>
        </div>
      </div>

      {/* module-three id starts here */}
      <div className="tab-pane fade" id="module-three">
        <div className="module-four-wrapper custom-seven-column">

          <div className="col col-2 mb-30">
            <div className="product-item">
              <div className="product-thumb">
                <a href="shop-grid-left-sidebar.html">
                  <img src="https://uparzon.com.bd/assets/img/product/product-4.jpg" alt="" />
                </a>
              </div>
            </div>
          </div> {/* single item end */}
          { Card}
          <div className="col mb-30 more__btn">
            <div className="more__btn__child">
              <p>1000+ Products Available in Hot Collection</p>
              <Link to='/shop' className="btn">See More</Link>
            </div>
          </div>
        </div>
      </div>

    </div>}
  </div>

  <ModalSection product={state.singleProd}/>
</div>

    )
}


const mapStateToProps= state=>({
  hotCollection:state.homeProducts.ourProduct,
  loading:state.homeProducts.loading,
})

const mapDispatchToProps = dispatch=>(
  {
    fetchHotCollection:()=>dispatch(fetchHomeProds())
  }
)

export default connect(mapStateToProps,mapDispatchToProps)(HotCollection)