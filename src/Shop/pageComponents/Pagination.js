import React from 'react'
import ReactPaginate from 'react-paginate'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { renderSpan } from '../../PrimarySections/Essentials'

function Pagination(props) {
    const changePage = ({selected})=>{
        props.setPage(selected)
    }
    return (
        <div className="paginatoin-area style-2 pt-35 pb-20">
        <div className="row">
        <div className="col-sm-6">
            <div className="pagination-area">
                {props.allPages && <p>Showing {props.allPages?.current_page} of {props.allPages?.last_page} pages</p>}
            </div>
        </div>
        <div className="col-sm-6">
            {/* <ul className="pagination-box pagination-style-2">
            {props.allPages?.links?.map((x,id)=>(
                <li key={id}><Link to='#'  onClick={()=>props.setPage(x.label)}>{renderSpan(x.label)}</Link></li>//onClick={()=>props}
            ))}
            </ul> */}
            <ReactPaginate
            previousLabel={<span class="lnr lnr-chevron-left"></span>}
            nextLabel={<span class="lnr lnr-chevron-right"></span>}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={props.allPages?.last_page}
            marginPagesDisplayed={0}
            pageRangeDisplayed={3}
            containerClassName={'pagination-box pagination-style-2'}
            activeClassName={'active'}
            onPageChange={changePage}
            />
        </div>
        </div>
    </div>
    )
}
const mapStateToProps=state=>(
    {}
)
const mapDispatchToProps =dispatch=>(
    {}
    )
export default connect(mapStateToProps,mapDispatchToProps)(React.memo(Pagination))
