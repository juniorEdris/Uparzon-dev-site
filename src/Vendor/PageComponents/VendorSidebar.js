import React from 'react'
import { Link } from 'react-router-dom'
import './VendorSidebar.css'

/*

    SOME OF THE CSS CONNECTED FROM SHOP SIDEBAR COMPONENT*** 

*/



export default function VendorSidebar(props) {
    return (
        <div className="col-lg-3">
                    <div className="vendor-sidebar-inner mb-30">
                        <div className="vendor-inner-title mb-25">
                            <h3>Browse More</h3>
                        </div>
                            <ul class="vendor-submenu">
                                {props.categories?.map((x,id)=>(
                                    <li key={id}><Link to="#" onClick={()=>props.setCategory(x.id)}>{x.name} <span class="lnr lnr-chevron-right"/></Link></li>
                                ))}
                            </ul>
                    </div>
                </div>
    )
}
