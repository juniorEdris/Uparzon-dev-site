import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './ElectronicsArea.css'
import Card from './Subfolder/Card';
import { connect } from 'react-redux';

function ElectronicsArea(props) {


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
            items:3,
        },
        
    },
}
    return (
        <div>
            {props.bigProduct?.length > 0 && <div className="home-module-four">
                <div className="container-fluid">
                  <div className="section-title">
                    <h3><span>Laptop</span> &amp; computer</h3>
                  </div>
                  <div className="pro-module-four-active ">
                    {/* slider starts here */}
                    <OwlCarousel
                      className="owl-theme"
                      {...options}
                    >

                    {props.bigProducts?.map(product =>(
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
    bigProducts:state.homeProducts.bigProduct,
  }
)

const mapDispatchToProps = dispatch=>(
  {

  }
)
export default connect(mapStateToProps,mapDispatchToProps)(ElectronicsArea)