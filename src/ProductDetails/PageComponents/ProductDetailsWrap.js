import React,{useEffect} from 'react'
import Details from './SubFolder/Details'
import Slider from './SubFolder/ProductSlider'
import { connect } from 'react-redux'
import { GetProductDetails } from '../../Utility/Redux/Action/ProductDetailsAction'
import usePageTop from '../../PrimarySections/CustomHooks/GetTopofPage'
import useQuery from '../../PrimarySections/Essentials/UrlParams'

function ProductDetailsWrap(props) {
  
  // getting id from URL
  const query = useQuery()
  const prodID = query.get('id')
    // get on top of the page after page loads
  usePageTop()

    return (
        <div className="product-details-main-wrapper pb-50">
  <div className="container-fluid">

        <div className="row">
          <Slider prod_id={prodID}/>
          <Details prod_id={prodID}/>
        </div>
    
  </div>
</div>

    )
}
const mapStateToProps = state=>(
  {
    loading:state.productDetails.loading,
    details:state.productDetails.product,
  }
)

const mapDispatchToProps = dispatch =>(
  {
    getProdDetails:(id)=>dispatch(GetProductDetails(id)),
  }
)

export default connect(mapStateToProps,mapDispatchToProps)(ProductDetailsWrap)