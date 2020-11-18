import { Link } from 'react-router-dom'
import React from 'react'

export default function DetailsBreadcrumbs() {
    return (
<div className="breadcrumb-area mb-30">
  <div className="container-fluid">
    <div className="row">
      <div className="col-12">
        <div className="breadcrumb-wrap">
          <nav aria-label="breadcrumb">
            <ul className="breadcrumb">
              <li className="breadcrumb-item"><Link to="/">Home</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Product details</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</div>

    )
}
