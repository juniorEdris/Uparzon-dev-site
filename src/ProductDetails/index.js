import React from 'react'
import { connect } from 'react-redux'
import Breadcrumb from '../PrimarySections/Breadcrumbs/Breadcrumb'
import CartIcon from '../PrimarySections/CartIcon.js/CartIcon'
import ScrollBar from '../PrimarySections/ScrollBar/ScrollBar'
import { FetchProductSuggetions } from '../Utility/Redux/Action/ProdSuggestionAction'
import Details from './PageComponents/ProductDetailsWrap'
import Review from './PageComponents/ProductReviews'
import Suggestions from './PageComponents/ProductSuggestion'
function Index(props) {

    return (
        <div>
            <Breadcrumb pageName={'Product details'} route={'/shop'} parent={'Shop'}/>
            <Details/>
            <Review/>
            <CartIcon/>
            <ScrollBar/>
            {props.suggestions?.length > 0 && <Suggestions/>}
        </div>
        )
}



export default connect(state=>({
    details:state.productDetails.product,
    suggestions:state.productSuggest.suggestion
  }),dispatch=>({
    fetchSuggestions:(id)=>dispatch(FetchProductSuggetions(id))
  }))(Index)