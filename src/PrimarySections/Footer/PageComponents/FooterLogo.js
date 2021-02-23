import React from 'react'
import { Link } from 'react-router-dom'

export default function FooterLogo() {
    return (
        
            <div className="widget-title">
            <div className="footer-logo mb-30">
              <Link to="/">
                <img src="./assets/img/logo/Web-Uparzon-Logo.png" alt="" />
              </Link>
            </div>
            <p>We are a team of designers and developers that create high quality Magento, Prestashop, Opencart.</p>
          </div>
        
    )
}
