/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import ModalSection from '../../PrimarySections/Modal/ModalSection'
import Product from './Subfolder/Product'
import { ProductLoader } from '../../PrimarySections/ReactPlaceHolder/ReactPlaceHolder'
import { connect } from 'react-redux'
function HotCollection(props) {

  const [Tab, setTab] = useState('Featured Products')

  const tabs =['Featured Products','On sale Products','Best sellers Products',]
  
  // Mapping All products in a varriables
 const Card = props.hotCollection?.map(product =>(
  <div className="col mb-30">
   <Product key={product.id} product={product}/>
  </div> /* single item end */
  ))
    return (
<div className="home-module-three hm-1 fix pb-40">
  <div className="container-fluid">
    <div className="section-title module-three">
      <h3><span>Hot</span> Collection</h3>
      <div className="boxx-tab">
        <ul className="nav my-tab">
          {tabs.map((tab,id)=>(
            <li>
              <Link to='#' key={id} className={Tab === tab && 'active'} onClick={()=>setTab(tab)}>{tab}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
    
    {
      props.loading ? 
        <ProductLoader className='product-item'/> 
        :
      <div className="tab-content">
      
      {/* module-one starts here */}
      <div className={`tab-pane fade ${Tab === 'Featured Products' && "show active"}`} id="module-one">
        <div className="module-four-wrapper custom-seven-column">

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
          <div className="col mb-30">
            <div className="more__btn">
              <p>1000+ Products Available in Hot Collection</p>
              <Link to='/shop' className="btn">See More</Link>
            </div>
          </div>
        </div>
      </div>
      {/* module-two starts here */}
      <div className={`tab-pane fade ${Tab === 'On sale Products' && "show active"}`} id="module-two">
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
          <div className="col mb-30">
            <div className="more__btn">
              <p>1000+ Products Available in Hot Collection</p>
              <Link to='/shop' className="btn">See More</Link>
            </div>
          </div>
        </div>
      </div>

      {/* module-three id starts here */}
      <div className={`tab-pane fade ${Tab === 'Best sellers Products' && "show active"}`} id="module-three">
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
          <div className="col mb-30">
            <div className="more__btn">
              <p>1000+ Products Available in Hot Collection</p>
              <Link to='/shop' className="btn">See More</Link>
            </div>
          </div>
        </div>
      </div>

    </div>}
  </div>

  <ModalSection/>
</div>

    )
}


const mapStateToProps= state=>({
  hotCollection:state.homeProducts.hotCollection,
  loading:state.homeProducts.loading,
})

const mapDispatchToProps = dispatch=>({})

export default connect(mapStateToProps,mapDispatchToProps)(HotCollection)