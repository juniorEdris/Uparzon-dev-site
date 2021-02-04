import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { renderHTML } from '../../PrimarySections/Essentials'
import { fetchShopProds } from '../../Utility/Redux/Action/ShopProductAction'

function Pagination(props) {
    console.log('page',props.page);
    return (
        <div className="paginatoin-area style-2 pt-35 pb-20">
        <div className="row">
        <div className="col-sm-6">
            <div className="pagination-area">
                {props.pages && <p>Showing {props.pages?.current_page} of {props.pages?.last_page}</p>}
            </div>
        </div>
        <div className="col-sm-6">
            <ul className="pagination-box pagination-style-2">
            {props.pages?.links?.map((x,id)=>(
                <li key={id}><Link to='#'  onClick={()=>props.setPage(x.label)}>{renderHTML(x.label)}</Link></li>//onClick={()=>props}
            ))}
            </ul>
        </div>
        </div>
    </div>
    )
}
const mapStateToProps=state=>(
    {
        shopProduct:state.shopProducts.shopProduct,
        loading:state.shopProducts.loading,
        pages:state.shopProducts.shopProductsPages,
    }
)
const mapDispatchToProps =dispatch=>(
    {
        pageDispatch:(id,page)=>dispatch(fetchShopProds(id,page)),
    }
    )
export default connect(mapStateToProps,mapDispatchToProps)(React.memo(Pagination))
