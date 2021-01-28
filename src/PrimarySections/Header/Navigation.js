import React, { useState,useEffect } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCategories} from '../../Utility/Redux/Action/CategoriesAction';
import { GetSubCategory } from '../../Utility/Redux/Action/GetSubCategoryAction';
import MainMenu from './MainMenu';
// import MenuSidebar from './MenuSidebar';
import './Navigation.css'
import SideBarMenu from './SideBarMenu';

function Navigation(props) {
    //Stciky nav trigger
    const [stickyNav,setStickyNav] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500 ) {
                setStickyNav(true)
            } else {
                setStickyNav(false)
            }
        })
        return () => {
            window.removeEventListener('scroll',()=>{})
        }
    }, [stickyNav])


        //catagories menu dropdown
        const[isBrowsing,setBrowsing] = useState(false)
        const browseCatalog = (e)=>{
            e.preventDefault();
            setBrowsing(!isBrowsing)
            
        }
        //catagories menu more catagories
        const [menuShow, setMenuShow] = useState(false)
        //Conditional more-btn name
        const btnName =  menuShow ? 'Hide Categories' : 'More Categories';
        const moreMenu = (e) =>{
            e.preventDefault();
            setMenuShow(!menuShow)
        }

    return (
        <div className={`header-top-menu theme-bg sticker ${stickyNav && 'sticky'} `}>
        <div className="container-fluid">
            <div className="row">
            <div className="col-lg-12">
                <div className="top-main-menu">
                <div className="categories-menu-bar" onPointerLeave={()=>setBrowsing(false)}>
                    <div onClick={browseCatalog} className={`categories-menu-btn`}  >
                    <div className="left">
                        <i className="lnr lnr-text-align-left" />
                        <span>Browse categories</span>
                    </div>
                    <div className="right">
                        <i className="lnr lnr-chevron-down" />
                    </div>
                    </div>
                    <nav className={`categorie-menus ha-dropdown ${isBrowsing ? 'active':'inActive'}`} >
                    <ul id="menu2">
                        {
                            props.categories?.map(cat =>(
                                <li>
                                    <Link to="/homeaudio" >{cat.name}{cat.Subcategories?.length > 0 ? <span className="lnr lnr-chevron-right" />: ''} </Link> {/*onMouseOver={()=>props.getSubCat(cat.id)}*/}
                                    {
                                    cat.Subcategories?.length > 0 ? 
                                        <ul className="cat-submenu">
                                            {
                                            cat.Subcategories?.map(x=>(
                                                <li><Link to='#'>{x.name}{x.Childcategories?.length > 0 ? <span className="lnr lnr-chevron-right" />: ''}</Link>
                                                    {
                                                    x.Childcategories?.length > 0? 
                                                    <ul className="cat-submenu">
                                                        {
                                                        x.Childcategories?.map(x=>(
                                                            <li><Link to="/">{x.name}</Link></li>
                                                            ))
                                                        }
                                                    </ul>:''
                                                    }
                                                </li>
                                            ))    
                                            }
                                        </ul>: ''
                                    }
                                </li>
                            ))
                        }
                    </ul>
                    {/* ul ends here */}
                    </nav>
                    </div>
                <SideBarMenu/>
                <MainMenu/>
                <div className="header-call-action">
                    <p><span className="lnr lnr-phone" />Hotline : <strong>1-001-234-5678</strong></p>
                </div>
                </div>
            </div>
            <div className="col-12 d-block d-lg-none"><div className="mobile-menu" /></div>
            </div>
        </div>
        </div>
    )
}
const mapStateToProps = state=>(
    {
        categories:state.homeProducts.categoryList,
        SubCategories:state.getSubCat.SubCat,
    }
)

const mapDispatchToProps = ()=>(dispatch)=>(
    {
        fetchCategory:()=>dispatch(fetchCategories()),
        getSubCat:(id)=>dispatch(GetSubCategory(id))
    }
)
export default connect(mapStateToProps,mapDispatchToProps)(React.memo(Navigation))