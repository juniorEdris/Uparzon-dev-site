import React,{useEffect} from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './ProductSlider.css'
import { GetProductDetails } from '../../../Utility/Redux/Action/ProductDetailsAction';
import { connect } from 'react-redux';

function ProductSlider(props) {
  useEffect(() => {
    props.getProdDetails(props.prod_id)
  }, [])
    return (
        <div className="col-lg-5 product-details-slider">
      <Carousel 
        autoPlay 
        interval="3000" 
        transitionTime="1000" 
        infiniteLoop
        showIndicators={false}
      >
        {
         
            <div className='pro-large-img'>
              
                {props.loading ? <img className='main-img' src={`./assets/img/uparzon_placeholder.png`} alt={`${props.details?.name}`} /> :
                <img className='main-img' src={`https:${props.product?.photo}`} alt={`${props.details?.name}`} />
                }
            </div>
        }
          
        </Carousel>
        </div>
    )
}


const mapStateToProps = state=>(
  {
    loading:state.productDetails.loading,
    product:state.productDetails.product,
  }
)

const mapDispatchToProps = dispatch =>(
  {
    getProdDetails:(id)=>dispatch(GetProductDetails(id))
  }
)

export default connect(mapStateToProps,mapDispatchToProps)(ProductSlider)