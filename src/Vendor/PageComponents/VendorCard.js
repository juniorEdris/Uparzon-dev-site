import React from 'react'
import './vendorCard.css'
export default function VendorCard(props) {
    console.log(props)
    return (
            <div className='container-fluid mb-20 '>
                <div className="vendor__card col-md-12 col-12" key={props.details?.id}>
                    <div className="row">
                        <div className="vendor__img p-3">
                            <img className="" src={props.details?.logo} alt={`${props.details?.shop_name}`} />
                        </div>
                        <div className="d-flex flex-column">
                            <div className="vendor__identity flex-column d-flex">
                                <h2 className='mb-1'>{props.details?.shop_name}</h2>
                                {/* <p className='followers'>1.2 k Followers</p> */}
                                <p className=''>{props.details?.shop_address}</p>
                            </div>
                            <div className="right_section flex-column d-flex">
                                {/* <div className="product-ratings align-items-center d-flex mb-1">
                                    <ul className="rating d-flex mr-2">
                                        <li><i className="fa fa-star" /></li>
                                        <li><i className="fa fa-star" /></li>
                                        <li><i className="fa fa-star disabled" /></li>
                                        <li><i className="fa fa-star disabled" /></li>
                                        <li><i className="fa fa-star disabled" /></li>
                                    </ul>
                                    <h5>3.4 | 5 Reviews </h5>
                                </div> */}
                                {/* <div className="vendor__btn d-flex ">
                                    <button type='button'  className="btn mr-2"><span class="lnr lnr-plus-circle"/>Follow</button>
                                    <button type='button'  className="btn"><span class="lnr lnr-bubble"/>Chat</button>
                                </div> */}
                            </div>                    
                        </div>
                    </div>
                </div>
            </div>
    )
}
