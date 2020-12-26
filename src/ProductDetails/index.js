import React from 'react'
import Breadcrumb from '../PrimarySections/Breadcrumbs/Breadcrumb'
import CartIcon from '../PrimarySections/CartIcon.js/CartIcon'
import ScrollBar from '../PrimarySections/ScrollBar/ScrollBar'
import Details from './PageComponents/ProductDetailsWrap'
import Review from './PageComponents/ProductReviews'
import Suggestions from './PageComponents/ProductSuggestion'
export default function Index() {

    return (
        <div>
            <Breadcrumb pageName={'Product details'} route={'/shop'} parent={'Shop'}/>
            <Details/>
            <Review/>
            <CartIcon/>
            <ScrollBar/>
            <Suggestions/>
        </div>
        )
}

