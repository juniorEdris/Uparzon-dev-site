import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { fetchAllCities } from '../../Utility/Redux/Action/GetAllCitiesAction'
import CustomShipping from './CustomShipping'

function CheckOutForm(props) {
    useEffect(() => {
        props.getAllCities()
    }, [])
    const [value,setValue]=useState({
        fullName:'',
        email:'',
        phoneNumber:'',
        district:'',
        thana:'',
        union:'',
        address:'',
    })
    const handleChange = (e)=>{
        setValue({
            ...value,
            [e.target.name]:e.target.value
        })
        if(e.target.name==='district'){
            props.getAllCities(e.target.value)
        }
        if(e.target.name==='thana'){
            props.getAllCities(value.district,e.target.value)
        }
    }

    return (
        <div className="col-12 col-sm-12 col-md-6 col-lg-7">
        <div className="checkout-form">
        <div className="section-title left-aligned">
            <h3>Billing Details</h3>
        </div>
        <form action="#">
            <div className="form-row mb-3">
            <div className="form-group col-12 col-sm-12 col-md-6">
                <label htmlFor="first_name">Full Name <span className="text-danger">*</span></label>
                <input type="text" className="form-control" name="fullName" value={value.fullName} onChange={handleChange} id="first_name" required />
            </div>
            <div className="form-group col-12 col-sm-12 col-md-6">
                <label htmlFor="email_address">Email Address <span className="text-danger">*</span></label>
                <input type="email" className="form-control" name="email" value={value.email} onChange={handleChange} id="email_address" required />
            </div>
            </div>
            <div className="form-row mb-3">
                <div className="form-group col-12 ">
                    <label htmlFor="email_address">Phone Number <span className="text-danger">*</span></label>
                    <input type="text" className="form-control" name="phoneNumber" value={value.phoneNumber} onChange={handleChange} id="email_address" required />
                </div>
            </div>
            {props.city?.length > 0 && <div className="form-row mb-3">
                <div className="form-group col-12">
                    <label htmlFor="country_name" className="d-block">Discrict <span className="text-danger">*</span></label>
                    <select name="district" id="country_name" className="form-control" value={value.district} onChange={handleChange} required>
                    <option value=''> --- Select --- </option>
                    {props.city?.map(x=>(
                        <option value={x.id}>{x.name}</option>
                    ))}
                    </select>
                </div>
            </div>}
            {props.thana?.length > 0 &&<div className="form-row mb-3">
                <div className="form-group col-12">
                    <label htmlFor="country_name" className="d-block">Upazila/Thana <span className="text-danger">*</span></label>
                    <select name="thana" id="country_name" className="form-control" value={value.thana} onChange={handleChange} required>
                    <option value=''> --- Select --- </option>
                    {
                    props.thana?.map(x=>
                        <option value={x.id}> {x.name} </option>
                    )
                    }
                    </select>
                </div>
            </div>}
            {props.union?.length > 0 && <div className="form-row mb-3">
                <div className="form-group col-12">
                    <label htmlFor="country_name" className="d-block">Union <span className="text-danger">*</span></label>
                    <select name="union" id="country_name" className="form-control" value={value.union} onChange={handleChange} required>
                    <option value=''> --- Select --- </option>
                    {
                    props.union?.map(x=>
                        <option value={x.id}> {x.name} </option>
                    )
                    }
                    </select>
                </div>
            </div>}
            <div className="form-row mb-3">
                <div className="form-group col-12 col-sm-12 col-md-12">
                    <label htmlFor="p_address">Address <span className="text-danger">*</span></label>
                    <input type="text" className="form-control" id="p_address" name='address' onChange={handleChange} required />
                </div>
            </div>
            
            {/* <div className="form-row mb-3">
            <div className="form-group col-12 col-sm-12 col-md-6">
                <label htmlFor="tel_number">telephone</label>
                <input type="tel" className="form-control" id="tel_number" />
            </div>
            <div className="form-group col-12 col-sm-12 col-md-6">
                <label htmlFor="fax_num">Fax</label>
                <input type="text" className="form-control" id="fax_num" />
            </div>
            </div> */}
            <CustomShipping/>
            <div className="form-row">
            <div className="form-group col-12 col-sm-12 col-md-12">
                <label htmlFor="order_notes">Order Notes</label>
                <textarea className="form-control" id="order_notes" placeholder="Notes about your order, e.g. special notes for delivery." defaultValue={""} />
            </div>
            </div>
        </form>
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