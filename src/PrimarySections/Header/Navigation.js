import React, { useState,useEffect } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCategories, fetchSubCategory } from '../../Utility/Redux/Action/CategoriesAction';
import './Navigation.css'

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

    useEffect(()=>{
        props.fetchCategories()
        // props.fetchSubCategories()
    },[])
    console.log('Navigation',props);

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
        //main menu set
        const [mainMenu, setMainMenu] = useState(false)
    return (
        <div className={`header-top-menu theme-bg sticker ${stickyNav && 'sticky'} `}>
        <div className="container-fluid">
            <div className="row">
            <div className="col-lg-12">
                <div className="top-main-menu">
                <div className="categories-menu-bar">
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
                            props.categories.map(cat =>(
                                <li><Link to="/homeaudio">{cat.name}{cat.has_subcategory && <span className="lnr lnr-chevron-right" />}</Link></li>
                            ))
                        }
                    </ul>
                    {/* ul ends here */}
                    </nav>
                        </div>
                        
                <div className="ham-burger d-lg-none">
                    <Link class="mburger " to="#" onClick={(e)=> {e.preventDefault(); setMainMenu(!mainMenu)}}>
                        <b></b>
                        <b></b>
                        <b></b>
                    </Link>           
                </div>
                <div className={`main-menu ${mainMenu ? 'active':''}`}>
                    <nav id="mobile-menu">
                    <ul>
                        <li><Link to="/">HOME</Link></li>
                        <li><Link to="/shop">SHOP</Link></li>
                        <li><Link to="/blog" >BLOG</Link></li>
                        <li><Link to="/contact">CONTACT US</Link></li>
                    </ul>
                    </nav>
                </div> {/* </div> end main menu */}
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
        // SubCategories:state.categories.subCategory,
    }
)

const mapDispatchToProps = ()=>(dispatch)=>(
    {
        fetchCategories:()=>dispatch(fetchCategories()),
        // fetchSubCategories:()=>dispatch(fetchSubCategory())
    }
)
export default connect(mapStateToProps,mapDispatchToProps)(React.memo(Navigation))