/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useState} from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './BrandArea.css'
import ModalSection from '../../PrimarySections/Modal/ModalSection';
import Product from './Subfolder/Product';
import { ProductLoader } from '../../PrimarySections/ReactPlaceHolder/ReactPlaceHolder';
import {connect} from 'react-redux'
import MoreBtn from '../../PrimarySections/Essentials/MoreBtn';
import { Link } from 'react-router-dom';

function BrandArea(props) {

  const brands =[
      {
          id:1,
          brand_name:'brand 1',
          brand_img:'assets/img/brand/brand1.png',
        },
        {
            id:2,
            brand_name:'brand 2',
            brand_img:'assets/img/brand/brand2.png',
          },
          {
              id:3,
              brand_name:'brand 3',
      brand_img:'assets/img/brand/brand3.png',
    },
    {
        id:4,
        brand_name:'brand 1',
        brand_img:'assets/img/brand/brand4.png',
      },
      {
          id:5,
          brand_name:'brand 2',
          brand_img:'assets/img/brand/brand5.png',
        },
        {
            id:6,
            brand_name:'brand 3',
            brand_img:'assets/img/brand/brand6.png',
          },
        ]
        const [Tab, setTab] = useState(brands[0].brand_name)
  const brandOptions = {
    loop: false,
    margin:10,
    nav:false,
    dots:false,
    responsive:{
        0:{
            items:3,
            nav:false,
        },
        700:{
            items:4,
            nav:false,
        },
        1200:{
            items:6
        },
        
    },
}

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
          nav:false,
      },
      900:{
          items:5,
          nav:false,
      },
      1200:{
          items:6
      },
      
  },
}
    return (
        <div>
<div className="brand-area pb-70">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="section-title">
              <h3><span>Brand</span> sale</h3>
            </div>
          </div>
          <div className="col-12">
            <ul className="nav brand-active "> 
                  <OwlCarousel
                    className="owl-theme"
                    {...brandOptions}
                  >

              {brands.map((brand,id)=>(<li>
                <Link key={id} className={Tab === brand.brand_name && `active`} onClick={()=> setTab(brand.brand_name)}>
                  <img src={brand.brand_img ? brand.brand_img: 'assets/img/uparzon_placeholder.png'} alt={brand.brand_name} />
                </Link>
              </li>))}
              
              </OwlCarousel>
            </ul>
          </div>
          <div className="col-12">
          {props.loading ? 
        <ProductLoader className='product-item'/>:
            <div className="tab-content">
              <div className={` tab-pane fade ${Tab === 'brand 1' && `show active`}`} id="brand-one">
        <div className="product-gallary-wrapper brand-sale">
                  <div className="product-gallary-active  sale-nav"> 
                  {/* product slider starts here */}
                    <OwlCarousel
                      className="owl-theme"
                      {...options}
                    >
                  {
                    props.brandProducts?.map(product =>(
                          <Product key={product.id} product={product}/>
                        ))
                  }
                  <MoreBtn route={'/shop'}/>
                  </OwlCarousel>
                  </div>
                </div>
              </div>
              <div className={` tab-pane fade ${Tab === 'brand 2' && `show active`}`} id="brand-two">
                <div className="product-gallary-wrapper brand-sale">
                  <div className="product-gallary-active  sale-nav"> 
                  {/* product slider starts here */}
                    <OwlCarousel
                      className="owl-theme"
                      {...options}
                    >
                  {
                    props.brandProducts?.map(product =>(
                      <Product key={product.id} product={product}/>
                        ))
                  }
                  <MoreBtn route={'/shop'}/>
                  </OwlCarousel>
                  </div>
                </div>
              </div>
              <div className={` tab-pane fade ${Tab === 'brand 3' && `show active`}`} id="brand-three">
                <div className="product-gallary-wrapper brand-sale">
                  <div className="product-gallary-active  sale-nav"> 
                  {/* product slider starts here */}
                    <OwlCarousel
                      className="owl-theme"
                      {...options}
                    >
                  {
                    props.brandProducts?.map(product =>(
                      <Product key={product.id} product={product}/>
                        ))
                  }
                  <MoreBtn route={'/shop'}/>
                  </OwlCarousel>
                  </div>
                </div>
              </div>
            </div>}
          </div>
        </div>
      </div>
</div>
  <ModalSection/>
</div>
    )
}


const mapStateToProps= state=>({
  brandProducts:state.homeProducts.brandProduct,
  loading:state.homeProducts.loading,
})

const mapDispatchToProps = dispatch=>({})
export default connect(mapStateToProps,mapDispatchToProps)(BrandArea)