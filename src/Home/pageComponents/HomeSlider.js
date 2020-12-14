import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './HomeSlider.css'
import { Link } from 'react-router-dom';

function HomeSlider() {

    console.log('rendering agian and again');

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
              <div className="slider-area">
                      <div className="single-slider d-flex align-items-center" style={{backgroundImage: 'url(https://uparzon.com.bd/assets/img/slider/slider2-home1.jpg)'}}>
                          <div className="container-fluid">
                          <div className="row">
                              <div className="col-sm-6 col-sm-8">
                              <div className="slider-text">
                                  <h1>New Range Of<br />sumsang Camera</h1>
                                  <p>sumsang EOS600D/Kiss X5</p>
                                  <Link className="btn-1 home-btn" to="/details">shop now</Link>
                              </div>
                              </div>
                          </div>
                          </div>
                      </div>
              </div>
              <div className="slider-area">
                      <div className="single-slider d-flex align-items-center" style={{backgroundImage: 'url("https://uparzon.com.bd/assets/img/slider/slider1-home1.jpg")'}}>
                          <div className="container-fluid">
                          <div className="row">
                              <div className="col-sm-6 col-sm-8">
                              <div className="slider-text">
                                  <h1>Game, Consoles &amp;<br />much more</h1>
                                  <p>Sega Saturn Disc Drive Replacement</p>
                                  <Link className="btn-1 home-btn" to="/details">shop now</Link>
                              </div>
                              </div>
                          </div>
                          </div>
                      </div>
                      </div>
            
          </OwlCarousel>
          
        </div>
      );
}

export default React.memo(HomeSlider)