import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import Slider from '@material-ui/core/Slider';
import './ShopSidebar.css'
import { connect } from 'react-redux';
import { fetchShopProds } from '../../Utility/Redux/Action/ShopProductAction';




function Sidebar(props) {
    // price range function
    const [value, setValue] = useState([70, 500]);
    const handleChange = (event, newValue) =>{
        setValue(newValue)
    }
    // categories state
    const [category,setCategory]=useState('')
    // Active shop-sidebar-inner active state
    const [radioActive, setRadioActive] = useState(false);
    const SelectRadio = (name,e) =>{
        e.preventDefault()
        
    }
    useEffect(() => {
        props.fetchShopProd(category)
    }, [category])
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
                            {/* <div id="price-slider" className="price-slider ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"><div className="ui-slider-range ui-widget-header ui-corner-all" style={{left: '16.6667%', width: '79.1667%'}} /><span className="ui-slider-handle ui-state-default ui-corner-all" tabIndex={0} style={{left: '16.6667%'}} /><span className="ui-slider-handle ui-state-default ui-corner-all" tabIndex={0} style={{left: '95.8333%'}} /></div> */}
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
                                <li key='all'><Link className={category === '' && `active`} to="#" onClick={()=>setCategory('')}>All</Link></li>
                                {props.categories?.map((x,id)=>(
                                    <li key={id}><Link className={category === x.id && `active`} to="#" onClick={()=>setCategory(x.id)}>{x.name}</Link></li>
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
    categories:state.categories.categoryList,
})
const mapDispatchToProps = dispatch=>({
    fetchShopProd:(id)=>dispatch(fetchShopProds(id))
})
export default connect(mapStateToProps,mapDispatchToProps)(Sidebar)