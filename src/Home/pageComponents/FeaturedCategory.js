import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import'./FeaturedCategory.css'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


function FeaturedCategory(props) {
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
          nav:true
        },
        1000:{
            items:3,
            nav:true,
        },
        
    },
}
    return (
<div className="featured-categories-area">
        <div className="container-fluid">
          <div className="section-title hm-12">
            <h3><span>Featured</span> product</h3>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="featured-cat-active "> 
                {/* slider starts here */}
                <OwlCarousel
                  className="owl-theme"
                  {...options}
                >
                
                  
                  {
                    props.loading ? <h1>Loading</h1> :
                     props.products?.length > 0 && props.products?.map((product,id)=>(
                  <div className="pro-layout-two-single-item">
                    <div key={id} className="product-layout-two mb-30">
                      <div className="product-layout-info">
                        <h4 className="pro-name"><Link to="/">{product.name}</Link></h4>
                        <p className="total-items"> 6 products </p>
                        <Link to="/" className="shop-btn">+ shop now</Link>
                      </div>
                      <div className="product-layout-thumb">
                        <Link to="/details"><img src={product.thumbnail} alt={product.name} /></Link>
                      </div>
                    </div>
                </div>
                  ))}

                 {/* </ end single item */}
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
const mapStateToProps=(state)=>(
  {
    loading:state.homeProducts.loading,
    products:state.homeProducts.featuredProduct
  }
)
export default connect(mapStateToProps)(FeaturedCategory)