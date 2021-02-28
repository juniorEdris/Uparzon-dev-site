import React,{useEffect, useState} from 'react'
import $ from'jquery'
import { connect } from 'react-redux';
import { fetchAllCities } from '../../Utility/Redux/Action/GetAllCitiesAction';
import { API, Request } from '../../PrimarySections/Connections/APILink';

function CustomShipping(props) {

    useEffect(()=>{
        $("#different_shipping").on("change",function(){
			$(".ship-box-info").slideToggle(300);
		});
    },[])

    const [value,setValue]=useState({
        fullName:'',
        email:'',
        phoneNumber:'',
        district_id:'',
        thana_id:'',
        union_id:'',
        address:'',
    })

    const [message,setMessage] = useState({})
 
    const handleChange = (e)=>{
        setValue({
            ...value,
            [e.target.name]:e.target.value
        })
        if(e.target.name==='district_id'){
            props.getAllCities(e.target.value)
        }
        if(e.target.name==='thana_id'){
            props.getAllCities(value.district,e.target.value)
        }
    }

    const storeAddress =(e) =>{
        e.preventDefault()
        const user_id = localStorage.getItem('user_id')
        API().post(`${Request.ShippingAddressStore}&name=${value.fullName}&phone=${value.phoneNumber}&union_id=${value.union_id}&address=${value.address}&user_id=${user_id}`)
        .then(res=>{
            console.log(res);
            if(res.data.status){
                setMessage({success:res.data.message})
                setValue({})
            }
        }).catch(err=>{
            console.log(err.response);
        })
    }
    return (
        <form action="#" className='custom_bill_address' onSubmit={storeAddress}>
            <div className="form-row">
            <div className="form-group col-12 col-sm-12 col-md-12">
                <div className="form-check mb-3">
                <div className="custom-checkbox">
                    <input className="form-check-input" type="checkbox" id="different_shipping" />
                    <span className="checkmark" />
                    <label className="form-check-label" htmlFor="different_shipping" id="different_shipping_address">Ship to a different address?</label>
                </div>
                </div>

                <div className="ship-box-info mt-4"> 
                    <div className="form-row mb-3">
                    <div className="form-group col-12 col-sm-12 col-md-6">
                        <label htmlFor="first_name">Full Name <span className="text-danger">*</span></label>
                        <input type="text" className="form-control" name='fullName' value={value.fullName} onChange={handleChange} id="first_name"  required/>
                    </div>
                    <div className="form-group col-12 col-sm-12 col-md-6">
                        <label htmlFor="email_address">Email Address <span className="text-danger">*</span></label>
                        <input type="email" className="form-control" name='email'value={value.email} onChange={handleChange} id="email_address"  required/>
                    </div>
                    </div>
                    <div className="form-row mb-3">
                        <div className="form-group col-12 ">
                            <label htmlFor="email_address">Phone Number <span className="text-danger">*</span></label>
                            <input type="text" className="form-control" name='phoneNumber' value={value.phoneNumber} onChange={handleChange} id="email_address"  required/>
                        </div>
                    </div>
                    {props.city?.length > 0 &&<div className="form-row mb-3">
                        <div className="form-group col-12">
                            <label htmlFor="District_name" className="d-block">District <span className="text-danger">*</span></label>
                            <select name="district_id" id="District_name" className="form-control" value={value.district_id} onChange={handleChange}  required>
                            <option value=''> --- Select --- </option>
                            {
                            props.city?.map(x=>
                                <option value={x.id}> {x.name} </option>
                            )
                            }
                            </select>
                        </div>
                        </div>}
                    {props.thana?.length > 0 &&<div className="form-row mb-3">
                        <div className="form-group col-12">
                            <label htmlFor="Upazila_name" className="d-block">Upazila/Thana <span className="text-danger">*</span></label>
                            <select name="thana_id" id="Upazila_name" className="form-control" value={value.thana_id} onChange={handleChange}  required>
                            <option value=''> --- Select --- </option>
                            {
                            props.thana?.map(x=>
                                <option value={x.id}> {x.name} </option>
                            )
                            }
                            </select>
                        </div>
                    </div>}
                    {props.union?.length > 0 &&<div className="form-row mb-3">
                        <div className="form-group col-12">
                            <label htmlFor="Union_name" className="d-block">Union <span className="text-danger">*</span></label>
                            <select name="union_id" id="Union_name" className="form-control" value={value.union_id} onChange={handleChange} required>
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
                            <input type="text" className="form-control" id="p_address" name='address' onChange={handleChange} required/>
                        </div>
                    </div>
                    <div className="form-row mb-3">
                    <div className="form-group col-12 col-sm-12 col-md-8">
                        {/* spaccing left side */}
                        {message.success}
                    </div>
                    <div className="form-group col-12 col-sm-12 col-md-4">
                        <button type='submit' className='btn d-block theme-bg'>Store Billing Address</button>
                    </div>
                    </div>
                </div>
            </div>

            </div>
            <div className="form-row">
            <div className="form-group col-12 col-sm-12 col-md-12">
                <label htmlFor="order_notes">Order Notes</label>
                <textarea className="form-control" id="order_notes" placeholder="Notes about your order, e.g. special notes for delivery." defaultValue={""} />
            </div>
            </div>
        </form>
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
        getAllCities:(thana,union)=>dispatch(fetchAllCities(thana,union)),

    }
)
export default connect(mapStateToProps,mapDispatchToProps)(CustomShipping)