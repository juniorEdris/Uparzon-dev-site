import React from 'react'
import Breadcrumb from '../PrimarySections/Breadcrumbs/Breadcrumb'
import useDocTitle from '../PrimarySections/CustomHooks/DocTitle'
import ScrollBar from '../PrimarySections/ScrollBar/ScrollBar'
import WishListBody from './pageComponents/WishListBody'

export default function WishList() {
         // Document Title Update
         useDocTitle('My wish list')
    return (
        <div>
            <Breadcrumb pageName={'Wishlist'} route={'/'} parent={'Home'}/>
            <WishListBody/>
            <ScrollBar/>
        </div>
    )
}
