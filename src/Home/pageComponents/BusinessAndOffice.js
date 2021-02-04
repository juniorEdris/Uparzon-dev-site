import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './BusinessAndOfice.css'
import Card from './Subfolder/Card';
import { connect } from 'react-redux';

function BusinessAndOffice(props) {

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
            {
              props.latestProducts?.length> 0 && <div className="home-module-six mb-70">
              <div className="container-fluid">
                <div className="section-title">
                  <h3><span>Business</span> &amp; office</h3>
                </div>
                <div className="pro-module-four-active "> {/*owl-carousel owl-arrow-style */}
                  <OwlCarousel
                      className="owl-theme"
                      {...options}
                  > 
                    {props.latestProducts?.map(product =>(
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
    latestProducts:state.homeProducts.latest,
  }
)

const mapDispatchToProps = dispatch=>(
  {

  }
)
export default connect(mapStateToProps,mapDispatchToProps)(BusinessAndOffice)