import React from 'react'
import { Link } from 'react-router-dom'

export default function logo() {
    return (
        <div className="col-lg-2 col-md-4 col-sm-4 col-12">
            <div className="logo">
            <Link to="/"><img src="./assets/img/logo/Web-Uparzon-Logo.png" alt="brand-logo" /></Link>
            </div>
        </div>
    )
}
