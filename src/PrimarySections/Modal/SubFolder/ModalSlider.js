import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './Slider.css'
import { connect } from "react-redux";

function Slider (props) {
        return (
            <div className='col-lg-5 modal-slider'>
                <Carousel 
                autoPlay 
                interval="3000" 
                transitionTime="1000" 
                infiniteLoop
                showIndicators={false}
                >
                    {
                       
                    <div className='pro-large-img'>
                        <img className='modal-image' src={`https:${props.modalProd?.photo?.replace('demostore', 'store')}`} alt='' />
                    </div>
    
                    }
                </Carousel>
            </div>
        )
}

const mapStateToProps = state=>({
    modalProd:state.productView.quickView,
})
export default connect(mapStateToProps)(Slider);
