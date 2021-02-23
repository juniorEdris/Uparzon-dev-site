import React, { useState,useEffect } from 'react'
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { fetchCategories} from '../../Utility/Redux/Action/CategoriesAction';
import { GetSubCategory } from '../../Utility/Redux/Action/GetSubCategoryAction';
import { GetChildCategory } from '../../Utility/Redux/Action/GetChildCategoriesAction';
import MainMenu from './MainMenu';
// import MenuSidebar from './MenuSidebar';
import './Navigation.css'
import SideBarMenu from './SideBarMenu';
import { fetchSearchProducts } from '../../Utility/Redux/Action/SearchAction';

function Navigation(props) {
    //Stciky nav trigger
    const [stickyNav,setStickyNav] = useState(false)
    const [category, setCategory] = useState(0)
    const [subcategory, setSubcategory] = useState(0)
    const [childcategory, setChildcategory] = useState(0)
    const history = useHistory()

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
    // explore category,subcategory,childcategory products
    const exploreCategories=(category,subcategory,childcategory)=>{
        console.log('before browse categories',history,history.location.pathname,category,subcategory,childcategory);
        if(history.location.pathname !== '/search') {
            console.log('browse categories',history,history.location.pathname,category,subcategory,childcategory);
            history.push('/search')
            }
            setCategory(category)
            setSubcategory(subcategory)
            setChildcategory(childcategory)
            props.showBrowseCatagories(category,'',1,subcategory,childcategory)
    }
    return (
        <div className={`header-top-menu sticker ${stickyNav && 'sticky'} `}>
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
                                <li key={cat.id}>
                                    <Link to="#" onMouseOver={()=>props.getSubCat(cat.id)} onClick={(e)=>{e.preventDefault(); exploreCategories(cat.id,0,0);}}>{cat.name}{cat.has_subcategory && <span className="lnr lnr-chevron-right" />} </Link> {/**/}
                                    {
                                    props.subcategories?.length > 0 ? 
                                        <ul className="cat-submenu">
                                            {
                                            props.subcategories?.map(x=>(
                                                <li key={x.id}><Link to='#' onMouseOver={()=>props.getChildCat(x.id)} onClick={(e)=>{ e.preventDefault(); exploreCategories(0,x.id,0)}}>{x.name}{x.has_childcategory && <span className="lnr lnr-chevron-right" />}</Link>
                                                    {
                                                    props.childcategories?.length > 0 ?  
                                                    <ul className="cat-submenu">
                                                        {
                                                        props.childcategories?.map(x=>(
                                                            <li key={x.id}><Link to="/" onClick={(e)=>{ e.preventDefault(); exploreCategories(0,0,x.id)}}>{x.name}</Link></li>
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
        categories:state.categories.categoryList,
        subcategories:state.subCategories.subCategoryList,
        childcategories:state.childCategories.childCategoryList,
    }
)

const mapDispatchToProps = ()=>(dispatch)=>(
    {
        fetchCategory:()=>dispatch(fetchCategories()),
        getSubCat:(id)=>dispatch(GetSubCategory(id)),
        getChildCat:(id)=>dispatch(GetChildCategory(id)),
        showBrowseCatagories:(select,keywords,page,subcategory_id,childcategory_id)=>dispatch(fetchSearchProducts(select,keywords,page,subcategory_id,childcategory_id)),
        
    }
)
export default connect(mapStateToProps,mapDispatchToProps)(React.memo(Navigation))