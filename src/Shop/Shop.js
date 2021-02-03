import React from 'react'
import { connect } from 'react-redux'
import Breadcrumb from '../PrimarySections/Breadcrumbs/Breadcrumb'
import CartAnimation from '../PrimarySections/CartAddAnime/CartAddanime'
import useDocTitle from '../PrimarySections/CustomHooks/DocTitle'
import ModalSection from '../PrimarySections/Modal/ModalSection'
import ScrollBar from '../PrimarySections/ScrollBar/ScrollBar'
import ShopWrapper from './pageComponents/ShopWrapper'

 function Shop(props) {

    // Document Title Update
    useDocTitle('Shop')
    return (
        <div>
            <Breadcrumb pageName={'Shop'} route={'/'} parent={'Home'}/>
            <ShopWrapper/>
            <ScrollBar/>
            <ModalSection/>
            <CartAnimation/>
        </div>
    )
}

export default connect(state=>({ cartState:state.CartAnimation.productAdded}))(Shop)