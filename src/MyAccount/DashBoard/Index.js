import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Breadcrumb from '../../PrimarySections/Breadcrumbs/Breadcrumb'
import useDocTitle from '../../PrimarySections/CustomHooks/DocTitle'
import ScrollBar from '../../PrimarySections/ScrollBar/ScrollBar'
import { DashboardAction } from '../../Utility/Redux/Action/DashboardAction'
import DashTable from './pageComponents/DashTable'
import UserInfo from './pageComponents/UserInfo'


function Index(props) {
    const history = useHistory()
    const [user,setUser] = useState()
    useEffect(() => {
       props.fetchDashboard()
    }, [])

    console.log(props.data,'dashboard');


     // Document Title Update
     useDocTitle('Dashboard')

    return (
        <div>
            <Breadcrumb pageName={'Dashboard'} route={'/'} parent={'Home'}/>
            {/* Start of My Account Wrapper */}
            <div className="my-account-wrapper pb-20">
            <div className="container-fluid">
                <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                    <main id="primary" className="site-main">
                    <div className="user-dashboard pb-50">
                        <UserInfo/>
                        <DashTable/>
                    </div> {/* end of user-dashboard */}
                    </main> {/* end of #primary */}
                </div>
                </div> {/* end of row */}
            </div> {/* end of container */}
            </div>
            {/* End of My Account Wrapper */}
            <ScrollBar/>
        </div>
    )
}

const mapStateToProps = state=>({
    user:state.Users.user,
    data:state.Dashboard.DashBoardData,
})
const mapDispatchToProps = dispatch=>({
    fetchDashboard:()=>dispatch(DashboardAction())
}) 

export default connect(mapStateToProps,mapDispatchToProps)(Index)