import React,{useEffect} from 'react'
import Breadcrumb from '../PrimarySections/Breadcrumbs/Breadcrumb'
import ScrollBar from '../PrimarySections/ScrollBar/ScrollBar'
import CartBody from './pageComponents/CartBody'
import ModalLogin from '../MyAccount/Login/ModalLogin'

export default function ProductCart() {
    useEffect(() => {
        // get on top of the page after page loads
        (window).scrollTo(0,0)
        document.title = 'Shopping Cart | Uparzon E-commerce Site'
    }, [])
    return (
        <div>
            <Breadcrumb pageName={'Cart'} route={'/'} parent={'Home'}/>
            <CartBody/>
            <ScrollBar/>
            <ModalLogin />
        </div>
    )
}
