import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { fetchAllCities } from '../../Utility/Redux/Action/GetAllCitiesAction'
import BillingAddress from './BillingAddress'
import CustomShipping from './CustomShipping'

function CheckOutForm(props) {
    useEffect(() => {
        props.getAllCities()
    }, [])

    return (
        <div className="col-12 col-sm-12 col-md-6 col-lg-8">
        <div className="checkout-form">
        <div className="section-title left-aligned">
            <h3>Billing Details</h3>
        </div>
        <BillingAddress/>
        <CustomShipping/>
        </div> {/* end of checkout-form */}
    </div>
    )
}

const mapStateToProps = (state)=>(
    {
        city:state.allCities.allDistricts,
        thana:state.allCities.allThana,
        union:state.allCities.allUnion,
    }
)

const mapDispatchToProps = (dispatch)=>(
    {
        getAllCities:(thana,union)=>dispatch(fetchAllCities(thana,union))
    }
)
export default connect(mapStateToProps,mapDispatchToProps)(CheckOutForm)