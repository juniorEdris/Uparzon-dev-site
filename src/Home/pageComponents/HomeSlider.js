import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './HomeSlider.css'
import { connect } from 'react-redux';

function HomeSlider(props) {
    return (
        <div className='home_slider'>
          <OwlCarousel 
            className="owl-theme"
            loop
            items={1}
            nav
            navSpeed={1000}
            navText={['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']}
          >
              {props.banners?.map(banner=>(
                <div className="slider-area">
                        <div className="single-slider d-flex align-items-center" style={{backgroundImage: `url(https:${banner.image})`}}> {/* .replace('demostore', 'store') assets/img/slider/slider1-home1.jpg*/}
                            <img src={`https:${banner.image}`} alt=""/>
                        </div>
                </div>
              ))}
            
          </OwlCarousel>
          
        </div>
      );
}

const mapStateToProps = state=>(
    {
        banners:state.homeProducts.homeSliders,
    }
)

const mapDispatchToProps = dispatch =>({})

export default connect(mapStateToProps,mapDispatchToProps)(React.memo(HomeSlider))