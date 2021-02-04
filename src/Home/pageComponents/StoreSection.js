import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Truncate } from '../../Data'
import './StoreSection.css'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { StoreLoader } from '../../PrimarySections/ReactPlaceHolder/ReactPlaceHolder';

function StoreSection(props) {
  const options = {
    loop: false,
    margin:10,
    nav:true,
    navText:['<i class="lnr lnr-arrow-left"></i>','<i class="lnr lnr-arrow-right"></i>'],
    dots:false,
    responsive:{
        0:{
            items:2,
            nav:false,
        },
        700:{
          items:3,
          nav:true
        },
        1000:{
            items:5,
        },
        1200:{
            items:6
        },
        
    },
}
    return (
        <>
<div className="featured-categories-area">
        <div className="container-fluid">
          <div className="section-title hm-12">
            <h3><span>shop</span></h3>
          </div>
          <div className="row">
              <div className="col-12">
                {
                  props.loading ?
                  <StoreLoader/>:
                  <div className="home_store_section d-flex flex-wrap justify-content-center"> 
                  <OwlCarousel
                  {...options}
                  >
                  {props.store?.map(store=>(
                        <Link to={`/vendor?id=${store.shop_id}`} >
                          <div className="store-card mb-3 mr-3" key={store.shop_id}>
                                <div className="store-thumb">
                                <img src={`https://${store.logo}`} alt={store.shop_name} />
                                </div>

                                <div className="store-info">
                                <h4 className="store-name mt-2 mb-2" title={store.shop_name}><Link to={`/vendor?id=${store.shop_id}`} >{Truncate(store.shop_name,15)}</Link></h4>
                                </div>  
                          </div>
                        </Link>))}
                        </OwlCarousel> 
                </div>
                }
                        <div className="store-more-btn">
                              <Link to='/shop-list' className=''>See More</Link>
                        </div>  
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