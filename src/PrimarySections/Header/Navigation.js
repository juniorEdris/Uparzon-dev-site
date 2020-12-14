import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
import './Navigation.css'

function Navigation() {

    //Stciky nav trigger
    const [stickyNav,setStickyNav] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 200 ) {
                setStickyNav(true)
            } else {
                setStickyNav(false)
            }
        })
        return () => {
           window.removeEventListener('scroll',()=>{})
        }
    }, [])

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
                        <li><Link to="/all">Audio &amp; Home Theater <span className="lnr lnr-chevron-right" /></Link>
                        <ul className="cat-submenu">
                            <li><Link to="/homeaudio">Home Audio <span className="lnr lnr-chevron-right" /></Link>
                            <ul className="cat-submenu">
                                <li><Link to="/">CD Players &amp; Turntables</Link></li>
                                <li><Link to="/">Home Theater Systems</Link></li>
                                <li><Link to="/">Receivers &amp; Amplifiers</Link></li>
                                <li><Link to="/">Speakers</Link></li>
                                <li><Link to="/">Wireless  Audio</Link></li>
                            </ul>
                            </li>
                            <li><Link to="/disk">Blu-ray Disc Players</Link></li>
                            <li><Link to="/curvedtv">Curved TVs<span className="lnr lnr-chevron-right" /></Link>
                            <ul className="cat-submenu">
                                <li><Link to="/">CD Players &amp; Turntables</Link></li>
                                <li><Link to="/">Home Theater Systems</Link></li>
                                <li><Link to="/">Receivers &amp; Amplifiers</Link></li>
                                <li><Link to="/">Speakers</Link></li>
                                <li><Link to="/">Wireless  Audio</Link></li>
                            </ul>
                            </li>
                            <li><Link to="/">Streaming Media Players</Link></li>
                            <li><Link to="/">OLED TVs</Link></li>
                            <li><Link to="/">LED &amp; LCD TVs</Link></li>
                        </ul>
                        </li>
                        <li><Link to="/hometheatre">Video &amp; Home Theater<span className="lnr lnr-chevron-right" /></Link>
                        <ul className="cat-submenu category-mega">
                            <li className="cat-mega-title"><Link to="securitycamera">Security Cameras</Link>
                            <ul>
                                <li><Link to="/">DSLR Cameras</Link></li>
                                <li><Link to="/">Lense Camera</Link></li>
                                <li><Link to="/">Digital Cameras</Link></li>
                                <li><Link to="/">Mirrorless Cameras</Link></li>
                                <li><Link to="/">Point</Link></li>
                            </ul>
                            </li>
                            <li className="cat-mega-title"><Link to="/mirrorlesscameras">Mirrorless Cameras</Link>
                            <ul>
                                <li><Link to="/">DSLR Cameras</Link></li>
                                <li><Link to="/">Lense Camera</Link></li>
                                <li><Link to="/">Digital Cameras</Link></li>
                                <li><Link to="/">Mirrorless Cameras</Link></li>
                                <li><Link to="/">Point</Link></li>
                            </ul>
                            </li>
                            <li className="cat-mega-title"><Link to="/digitalcamera">Digital Cameras</Link>
                            <ul>
                                <li><Link to="/">DSLR Cameras</Link></li>
                                <li><Link to="/">Lense Camera</Link></li>
                                <li><Link to="/">Digital Cameras</Link></li>
                                <li><Link to="/">Mirrorless Cameras</Link></li>
                                <li><Link to="/">Point</Link></li>
                            </ul>
                            </li>
                        </ul>
                        </li>
                        <li><Link to="/mobile">Cellphones &amp; Accessories<span className="lnr lnr-chevron-right" /></Link>
                        <ul className="cat-submenu">
                            <li><Link to="/">CD Players &amp; Turntables</Link></li>
                            <li><Link to="/">Home Theater Systems</Link></li>
                            <li><Link to="/">Receivers &amp; Amplifiers</Link></li>
                            <li><Link to="/">Speakers</Link></li>
                            <li><Link to="/">Wireless  Audio</Link></li>
                        </ul>
                        </li>
                        <li><Link to="/">Top Item</Link></li>
                        <li><Link to="/">Video Games Consoles</Link></li>
                        <li><Link to="/">Business &amp; Office</Link></li>
                        <li><Link to="/">Headphones &amp; Accessories</Link></li>
                        <li><Link to="/">Quadcopters &amp; Accessories</Link></li>
                        <li><Link to="/">Network Devices</Link></li>
                        <li className={`category-item-parent hidden ${menuShow ? 'active':'inActive'} `}><a href="/">Smart Watches</a></li>
                        <li className="category-item-parent"><a className={`more-btn ${menuShow ? 'minus':''}`} href="/"  onClick={moreMenu}>{btnName}</a></li>
                    </ul>
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


export default React.memo(Navigation)