import React,{useState} from 'react'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import { Link } from 'react-router-dom'
import './SidebarMenu.css'


function SideBarMenu() {
    //main menu set
    const [mainMenu, setMainMenu] = useState(false)
    const toggleDrawer = () =>{
        setMainMenu((prevState) => !prevState)
    }
    const openSidebar = ()=>{
        // e.preventDefault();
        setMainMenu(!mainMenu)
    }
    const routes=[
        {
            id:1,
            pathName:'home',
            path:'/',
        },
        {
            id:2,
            pathName:'shop',
            path:'/shop',
        },
        {
            id:3,
            pathName:'blog',
            path:'/blog',
        },
        {
            id:4,
            pathName:'contact us',
            path:'/contact',
        },
    ]

    return (
        <div>
               {!mainMenu &&<div className="ham-burger d-lg-none">
                    <Link className="mburger " to="#" onClick={openSidebar}>
                        <b></b>
                        <b></b>
                        <b></b>
                    </Link>           
                </div>}
                <Drawer className={`d-lg-none`} open={mainMenu} onClose={toggleDrawer} direction='left'>
                    <div className="sidebar_menu ">
                        <div className='sidebar_close_btn pl-3 pr-3' onClick={toggleDrawer}><span class="lnr lnr-cross"></span></div>
                            <div className='mb-3 col-12 d-flex justify-content-center'>
                                <Link to='/'>
                                <img src="https://uparzon.com.bd/assets/img/logo/logo-sinrato.png" alt="Uparzon logo"/>
                                </Link>
                            </div>
                        <ul>
                            {routes.map(x=>(
                                <li key={x.id}> <Link to={x.path}>{x.pathName}</Link> </li>
                            ))}
                        </ul>
                    </div>
                </Drawer>         
        </div>
    )
}

export default React.memo(SideBarMenu)
