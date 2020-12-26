import React,{useEffect} from 'react'
import Breadcrumb from '../PrimarySections/Breadcrumbs/Breadcrumb'
import ScrollBar from '../PrimarySections/ScrollBar/ScrollBar'
import WishListBody from './pageComponents/WishListBody'

export default function WishList() {
    useEffect(() => {
        // get on top of the page after page loads
        (window).scrollTo(0,0)
        document.title = 'Wishlist | Uparzon E-commerce Site'
    }, [])
    return (
        <div>
            <Breadcrumb pageName={'Wishlist'} route={'/'} parent={'Home'}/>
            <WishListBody/>
            <ScrollBar/>
        </div>
    )
}
