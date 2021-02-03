/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import './VendorSidebar.css'

/*

    SOME OF THE CSS CONNECTED FROM SHOP SIDEBAR COMPONENT*** 

*/



export default function VendorSidebar({categories}) {
    return (
        <div className="col-lg-3">
                    <div className="vendor-sidebar-inner mb-30">
                        <div className="vendor-inner-title mb-25">
                            <h3>Browse More</h3>
                        </div>
                            <ul class="vendor-submenu">
                                {categories?.map((x,id)=>(
                                    <li key={id}><Link to="#">{x.name} <span class="lnr lnr-chevron-right"/></Link></li>
                                ))}
                            </ul>
                    </div>
                </div>
    )
}
