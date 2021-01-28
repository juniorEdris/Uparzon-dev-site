import React from 'react'
import Breadcrumb from '../../PrimarySections/Breadcrumbs/Breadcrumb'
import useDocTitle from '../../PrimarySections/CustomHooks/DocTitle'
import ScrollBar from '../../PrimarySections/ScrollBar/ScrollBar'
import DashTable from './pageComponents/DashTable'
import UserInfo from './pageComponents/UserInfo'


export default function Index() {

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
