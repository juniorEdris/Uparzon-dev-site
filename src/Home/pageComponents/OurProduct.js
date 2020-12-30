/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './OurProduct.css'
import ModalSection from '../../PrimarySections/Modal/ModalSection';
import Product from './Subfolder/Product';
import { connect } from 'react-redux';
import { ProductLoader } from '../../PrimarySections/ReactPlaceHolder/ReactPlaceHolder';
import MoreBtn from '../../PrimarySections/Essentials/essentials';



function OurProduct (props) {

    

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
          
        <div className="product-wrapper fix pb-70">
        <div className="container-fluid">
          <div className="section-title product-spacing hm-11">
            <h3><span>our</span> product</h3>
            <div className="boxx-tab">
              <ul className="nav my-tab">
                <li>
                  <a className="active" data-toggle="tab" href="#one">Camera, Photo &amp; Video</a>
                </li>
                <li>
                  <a data-toggle="tab" href="#two">Audio &amp; Home Theater</a>
                </li>
                <li>
                  <a data-toggle="tab" href="#three">Cellphones &amp; Accessories</a>
                </li>
              </ul>
            </div>
          </div>
          
  {/* Slider starts here */}

  {
    props.loading ?
      <ProductLoader className=''/>  
      :
  <div className="tab-content">
  <div className="tab-pane fade show active" id="one">
    <div className="product-gallary-wrapper">
      <div className="product-gallary-active  product-spacing">
        <OwlCarousel
              className="owl-theme"
              {...options}
            >
        {
          props.products.map(product => (
            <Product key={product.id} product={product}/>
            ))
        }
        <MoreBtn route={'/shop'}/>
        </OwlCarousel>
      </div>
    </div>
  </div>
  
  

  <div className="tab-pane fade" id="two">
    <div className="product-gallary-wrapper">
 
      <div className="product-gallary-active  product-spacing">
        <OwlCarousel
        className="owl-theme"
        {...options}
        >
        {
          props.products.map(product =>(
            <Product key={product.id} product={product}/>
          ))
        }
      <MoreBtn route={'/shop'}/>
    </OwlCarousel>
      </div>
    </div>
  </div>
  


  <div className="tab-pane fade" id="three">

    <div className="product-gallary-wrapper">

      <div className="product-gallary-active  product-spacing">
      <OwlCarousel
        className="owl-theme"
        {...options}
        >
        {props.products.map(product => (
          <Product key={product.id} product={product}/>        
        ))}
      <MoreBtn route={'/shop'}/>
    </OwlCarousel>
      </div>
    </div>
  </div>

</div>}
          {/* </Slider> */}
        </div>
         <ModalSection />
        </div>
        )
    }
const mapStateToProps = state=>({
  products:state.homeProducts.ourProduct,
  loading:state.homeProducts.loading,
})

const mapDispatchToProps= dispatch=>({})
export default connect(mapStateToProps,mapDispatchToProps)(OurProduct)
