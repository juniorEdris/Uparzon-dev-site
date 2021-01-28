import React,{useCallback} from 'react'
import { Link } from 'react-router-dom'
import './MenuSidebar.css'

function MenuSideBar({open,setOpen}) {

    return (
        <aside className={`${open && 'sidebar_open'} sidebar_menu d-lg-none`}>
            <div className='sidebar_close_btn pl-3 pr-3' onClick={toggleHamburger}><span class="lnr lnr-cross"></span></div>
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
        </aside>
    )
}

export default React.memo(MenuSideBar)