import React from 'react'
import { Link } from 'react-router-dom'

function MainMenu() {
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
        <div className={`main-menu`}>
        <nav id="mobile-menu">
        <ul>
            {routes.map(x=>(
                <li key={x.id}><Link to={x.path}>{x.pathName}</Link></li>
            ))}
        </ul>
        </nav>
    </div>
    )
}

export default MainMenu
