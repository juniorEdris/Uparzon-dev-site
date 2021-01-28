import React from 'react'
import Breadcrumb from '../PrimarySections/Breadcrumbs/Breadcrumb'
import ScrollBar from '../PrimarySections/ScrollBar/ScrollBar'
import CartBody from './pageComponents/CartBody'
import ModalLogin from '../MyAccount/Login/ModalLogin'
import useDocTitle from '../PrimarySections/CustomHooks/DocTitle'

export default function ProductCart() {
         // Document Title Update
         useDocTitle('My shopping cart')
    return (
        <div>
            <Breadcrumb pageName={'Cart'} route={'/'} parent={'Home'}/>
            <CartBody/>
            <ScrollBar/>
            <ModalLogin />
        </div>
    )
}
