import React,{useState,useEffect} from 'react'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Truncate } from '../../Data'
import './StoreSection.css'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { StoreLoader } from '../../PrimarySections/ReactPlaceHolder/ReactPlaceHolder';

function StoreSection(props) {

    return (
        <>
<div className="featured-categories-area">
        <div className="container-fluid">
          <div className="section-title hm-12">
            <h3><span>shop</span> by stores</h3>
          </div>
          <div className="row">
              <div className="col-12">
                {
                  props.loading ?
                  <StoreLoader/>:
                  <div className=" d-flex flex-wrap justify-content-center"> 
                  {props.store.map(store=>(
                        <Link to={`/vendor?id=${store.shop_id}`} >
                          <div className="store-card mb-3 mr-3" key={store.shop_id}>
                                <div className="store-thumb">
                                <img src={`https:${store.logo.replace('demostore', 'store')}`} alt={store.shop_name} />
                                </div>

                                <div className="store-info">
                                <h4 className="store-name mt-2 mb-2" title={store.shop_name}><Link to={`/vendor?id=${store.shop_id}`}>{Truncate(store.shop_name,15)}</Link></h4>
                                </div>  
                          </div>
                        </Link>))} 
                        <div className="store-more-btn">
                          <div className="store-info more-store">
                              <p className="more-store-name mb-3">Browse 1000+ Shops</p>
                              <Link to='/shop-list' className=''>See More</Link>
                          </div>
                        </div>  
                </div>}
              </div>
          </div>
        </div>
      </div>         </>
    )
}

const mapStateToProps= state=>({
  store:state.homeProducts.homeStores,
  loading:state.homeProducts.loading,
})

const mapDispatchToProps = dispatch=>({})
export default connect(mapStateToProps,mapDispatchToProps)(StoreSection)