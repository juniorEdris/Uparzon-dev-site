/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useState} from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './OurProduct.css'
import ModalSection from '../../PrimarySections/Modal/ModalSection';
import Product from './Subfolder/Product';
import { connect } from 'react-redux';
import { ProductLoader } from '../../PrimarySections/ReactPlaceHolder/ReactPlaceHolder';
import MoreBtn from '../../PrimarySections/Essentials/MoreBtn';
import { Link } from 'react-router-dom';



function OurProduct (props) {
  const [Tab, setTab] = useState('Camera, Photo & Video')

  const tabs =[
    {
      id:1,
      tab_name:'Camera, Photo & Video',
    },
    {
      id:2,
      tab_name:'Audio & Home Theater',
    },
    {
      id:3,
      tab_name:'Cellphones & Accessories',
    },
  ]

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
                {tabs.map(tab=>(
                  <li key={tab.id}>
                    <Link className={`${Tab===tab.tab_name && 'active'}`}  to="#" onClick={()=>setTab(tab.tab_name)}>{tab.tab_name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
  {/* Slider starts here */}

  {
    props.loading ?
    <div className="row">
        <OwlCarousel
        className="owl-theme"
        {...options}
        >
        {Array(6).fill().map((x,id)=>(<ProductLoader key={id}/>))}
        </OwlCarousel>
    </div>
      :
  <div className="tab-content">
  <div className={`${Tab === 'Camera, Photo & Video' && 'show active'} tab-pane fade`} id="one">
    <div className="product-gallary-wrapper">
      <div className="product-gallary-active  product-spacing">
        <OwlCarousel
              className="owl-theme"
              {...options}
            >
        {
          props.products?.map(product => (
            <Product key={product.id} product={product}/>
            ))
        }
        </OwlCarousel>
      </div>
    </div>
  </div>
  
  

  <div className={`${Tab === 'Audio & Home Theater' && 'show active'} tab-pane fade`} id="two">
    <div className="product-gallary-wrapper">
 
      <div className="product-gallary-active  product-spacing">
        <OwlCarousel
        className="owl-theme"
        {...options}
        >
        {
          props.products?.map(product =>(
            <Product key={product.id} product={product}/>
          ))
        }
    </OwlCarousel>
      </div>
    </div>
  </div>
  


  
    <div className={`${Tab === 'Cellphones & Accessories' && 'show active'} tab-pane fade`} id="three">
    <div className="product-gallary-wrapper">

      <div className="product-gallary-active  product-spacing">
      <OwlCarousel
        className="owl-theme"
        {...options}
        >
        {props.products?.map(product => (
          <Product key={product.id} product={product}/>        
        ))}
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
