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
                <img className='main-img' src={`https://cdn.chaldal.net/_mpimage/meat-fish?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D23737&q=low&v=1&m=250&webp=1`} alt={props.details.name} />
                {/* <img className='main-img' src={`https:${data?.photo?.replace('demostore', 'store')}`} alt='' /> */}
            </div>
        }
          
        </Carousel>
        </div>
    )
}


const mapStateToProps = state=>(
  {
    loading:state.productDetails.loading,
    details:state.productDetails.product,
  }
)

const mapDispatchToProps = dispatch =>(
  {
    getProdDetails:(id)=>dispatch(GetProductDetails(id))
  }
)

export default connect(mapStateToProps,mapDispatchToProps)(ProductSlider)