import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './HeadphonesAccessories.css'
import Card from './Subfolder/Card';
import { connect } from 'react-redux';

function HeadphonesAccessories(props) {

  const options = {
    loop: false,
    margin:10,
    nav:true,
    navText:['<i class="lnr lnr-arrow-left"></i>','<i class="lnr lnr-arrow-right"></i>'],
    dots:false,
    responsive:{
        0:{
            items:1,
            nav:false,
        },
        700:{
            items:2,
        },
        1000:{
            items:3
        },
        
    },
} 
    return (
        <div>
            { props.trendingProduct && <div className="home-module-five">
              <div className="container-fluid">
                <div className="section-title">
                  <h3><span>Headphones</span> &amp; Accessories </h3>
                </div>
                <div className="pro-module-four-active ">{/* owl-carousel owl-arrow-style*/}
                  {/* slider starts here */}
                  <OwlCarousel
                    className="owl-theme"
                    {...options}
                  >
                    {props.trendingProducts?.map(product =>(
                      <Card key={product.id} product={product}/>
                    ))}
                    
                  </OwlCarousel>
                </div>
              </div>
            </div>}
        </div>
    )
}

const mapStateToProps = state=>(
  {
    loading:state.homeProducts.loading,
    trendingProducts:state.homeProducts.trendingProduct,
  }
)

const mapDispatchToProps = dispatch=>(
  {

  }
)
export default connect(mapStateToProps,mapDispatchToProps)(HeadphonesAccessories)