import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { deleteAddressItem, fetchShippingAddress, setShippingAddress } from '../../Utility/Redux/Action/GetBillingAddressAction'

function AllBillingAddress(props){
    
    const [addressId, setAddressId] = useState('')
    useEffect(() => {
        props.getShippingAddress()
    }, [])
    const removeBillAddress = (id)=>{
        props.deleteAddress(id); 
        props.getShippingAddress()
    }
    return (
        <div className='billing_address_table' >
                { props.billingAddress?.length > 0 &&
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <td>Select</td>
                            <td>Full name</td>
                            <td>Address</td>
                            <td>Region</td>
                            <td>Phone Number</td>
                            <td>Action</td>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                        props.billingAddress?.map(address=>(
                            <tr key={address.id}>
                                <td>
                                    <div className='address-select'><span className={addressId === address.id && 'active'} onClick={()=>{setAddressId(address.id); props.setShippingId(address)}}></span></div>
                                </td>
                                <td>
                                    <div>{address.name}</div>
                                </td>
                                <td>
                                    <div>{address.address}</div>
                                </td>
                                <td>
                                    <div>{`${address.union},${address.upazila},${address.district}`}</div>
                                </td>
                                <td>
                                    <div>{address.phone}</div>
                                </td>
                                <td>
                                    <div><span className='lnr lnr-cross' onClick={()=>removeBillAddress(address.id)}></span></div>
                                </td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>}
        </div>
    )
}

const mapStateToProps = (state)=>(
    {
        loading:state.billingAdrress.loading,
        billingAddress:state.billingAdrress.shippingAddresses,
    }
)

const mapDispatchToProps = dispatch=>(
    {
        getShippingAddress:()=>dispatch(fetchShippingAddress()),
        setShippingId:(id)=>dispatch(setShippingAddress(id)),
        deleteAddress:(id)=>dispatch(deleteAddressItem(id))
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(AllBillingAddress)
