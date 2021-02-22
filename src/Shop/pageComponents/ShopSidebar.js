import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import Slider from '@material-ui/core/Slider';
import './ShopSidebar.css'
import { connect } from 'react-redux';
import { fetchShopProds } from '../../Utility/Redux/Action/ShopProductAction';




function Sidebar(props) {
    const [value, setValue] = useState([70, 500]);
    // price range function
    const handleChange = (event, newValue) =>{
        setValue(newValue)
    }

    return (
        <div className="col-lg-3">
                    <div className="shop-sidebar-inner mb-30">
                    {/* filter-price-content start */}
                    <div className="single-sidebar mb-45">
                        <div className="sidebar-inner-title mb-25">
                        <h3>Fillter by price</h3>
                        </div>
                        <div className="sidebar-content-box"> 
                        <div className="filter-price-content">
                            <form action="#" method="post">
                            <Slider
                            value={value}
                            onChange={handleChange}
                            max={500}
                            />
                            <div className="filter-price-wapper">
                                <div className="filter-price-cont">
                                <div className="input-type">
                                    <input id="min-price" readOnly type="text" value={`$${value[0]}`} />
                                    
                                </div>
                                <div className="input-type">
                                    <input id="max-price" readOnly type="text" value={`$${value[1]}`} />
                                </div>
                                </div>
                            </div>
                            </form>  
                        </div> 
                        </div>
                    </div>
                    {/* filte price end */}
                    {/* categories filter start */}
                    <div className="single-sidebar mb-45">
                        <div className="sidebar-inner-title mb-25">
                        <h3>Categories</h3>
                        </div>
                        <div className="sidebar-content-box">
                        <div className="filter-attribute-container">
                            <ul>
                                <li key='all'><Link className={props.id === '' && `active`} to="#" onClick={(e)=>{e.preventDefault(); props.sidebarClick('')}}>All</Link></li>
                                {props.categories?.map((x,id)=>(
                                    <li key={id}><Link className={props.id === x.id && `active`} to="#" onClick={(e)=>{e.preventDefault(); props.sidebarClick(x.id)}}>{x.name}</Link></li>
                                ))}
                            </ul>
                        </div>
                        </div>
                    </div>
                    {/* categories filter end */}
                    {/* categories filter start */}
                    {/* <div className="single-sidebar mb-45">
                        <div className="sidebar-inner-title mb-25">
                        <h3>Manufacturer</h3>
                        </div>
                        <div className="sidebar-content-box">
                        <div className="filter-attribute-container">
                            <ul>
                            <li><a onClick={SelectRadio} className={`${radioActive ? 'active':''}`} href="/">Christian Dior (2)</a></li>
                            <li><a onClick={SelectRadio} className={`${radioActive ? 'active':''}`} href="/">ferragamo (7)</a></li>
                            <li><a href="/">hermes (7)</a></li>
                            <li><a href="/">louis vuitton (6)</a></li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div className="single-sidebar mb-45">
                        <div className="sidebar-inner-title mb-25">
                        <h3>Select by color</h3>
                        </div>
                        <div className="sidebar-content-box">
                        <div className="filter-attribute-container">
                            <ul>
                            <li><a onClick={SelectRadio} className={`${radioActive ? 'active':''}`} href="/">Black (2)</a></li>
                            <li><a href="/">blue (7)</a></li>
                            <li><a href="/">brown (7)</a></li>
                            <li><a href="/">white (6)</a></li>
                            </ul>
                        </div>
                        </div>
                    </div> */}
                    </div>
                    {/* sidebar promote picture start */}
                    <div className="single-sidebar mb-30">
                    <div className="sidebar-thumb">
                        <Link to='/'><img src="https://www.cloudways.com/blog/wp-content/uploads/ecommerce-website-checklist-b-.jpg" alt="" /></Link>
                    </div>
                    </div>
                    {/* sidebar promote picture end */}
                </div>
    )
}
const mapStateToProps = state=>({
    shopProduct:state.shopProducts.shopProduct,
})
const mapDispatchToProps = dispatch=>({
    priceFilterDispatch:(products,value)=>dispatch(fetchShopProds(products,value)),
})
export default connect(mapStateToProps,mapDispatchToProps)(React.memo(Sidebar))