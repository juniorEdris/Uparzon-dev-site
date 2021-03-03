import { Link } from 'react-router-dom'
import React from 'react'
import { connect } from 'react-redux'
import { LogoutAction } from '../../../Utility/Redux/Action/LogoutActions'


function UserInfo(props) {
    return (
        <div className="user-info mb-30">
        <div className="row align-items-center no-gutters">
          <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
            <div className="single-info">
              <p className="user-name">Hello <span>{`${props.data?.first_name} ${props.data?.last_name}`}</span> <br /><a className="log-out" href='#' onClick={(e)=>{e.preventDefault() ; props.logOut()}}>Log Out</a></p>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
            <div className="single-info">
              <p>Need Assistance? Customer service at <a href="#">admin@example.com</a></p>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
            <div className="single-info">
              <p>E-mail them at <a href="#">support@example.com</a></p>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-2 col-xl-3">
            <div className="single-info justify-content-lg-center">
              <Link to={props.basket.length > 0 && "/cart"} className="btn btn-secondary" >View Cart</Link>
            </div>
          </div>
        </div> 
      </div> 
    )
}
const mapStateToProps = state=>(
  {
    basket:state.basketProd.basket,
    data:state.Dashboard.DashBoardData,
  }
)

const mapDispatchToProps = dispatch=>(
  {
    logOut:()=>dispatch(LogoutAction())
  }
)
export default connect(mapStateToProps,mapDispatchToProps)(UserInfo)