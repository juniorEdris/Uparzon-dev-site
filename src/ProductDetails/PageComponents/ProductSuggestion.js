import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Product from '../../Home/pageComponents/Subfolder/Product'
import './ProductSuggestion.css'
import { useStateValue } from '../../Utility/StateProvider';
import ModalSection from '../../PrimarySections/Modal/ModalSection';
import { connect } from 'react-redux';

function ProductSuggestion(props) {
    const [{quickView}] = useStateValue()

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
        <div className="related-product-area mb-40">
  <div className="container-fluid">
    <div className="section-title">
      <h3><span>Related</span> product </h3>
    </div>
    <div className="flash-sale-active4">
    <OwlCarousel
              className="owl-theme"
              {...options}
            >
          {
              props.suggestions.map(product =>(
          <div className="product-item mb-30">
                <Product key={product.id} product={product}/>
          </div>
            ))  
          }
          </OwlCarousel>
    </div>
  </div>
</div>
<ModalSection product={quickView}/>
</>
    )
}

export default connect(state=>({
  suggestions:state.productSuggest.suggestion
}))(ProductSuggestion)