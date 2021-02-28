import React from 'react'
import { connect } from 'react-redux'
import Breadcrumb from '../PrimarySections/Breadcrumbs/Breadcrumb'
import CartAddanime from '../PrimarySections/CartAddAnime/CartAddanime'
import ScrollBar from '../PrimarySections/ScrollBar/ScrollBar'
import { FetchProductSuggetions } from '../Utility/Redux/Action/ProdSuggestionAction'
import Details from './PageComponents/ProductDetailsWrap'
import Review from './PageComponents/ProductReviews'
import Suggestions from './PageComponents/ProductSuggestion'
function Index(props) {

    return (
        <div className={props.loading && 'loading-opacity'}>
            <Breadcrumb pageName={'Product details'} route={'/shop'} parent={'Shop'}/>
              <Details/>
              <Review/>
            <CartAddanime/>
            <ScrollBar/>
            {props.details?.related_products?.length > 0 && <Suggestions/>}
        </div>
        )
}



export default connect(state=>({
    loading:state.productDetails.loading,
    details:state.productDetails.product,
  }),dispatch=>({
    fetchSuggestions:(id)=>dispatch(FetchProductSuggetions(id))
  }))(Index)