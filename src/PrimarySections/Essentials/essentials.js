import React from 'react'
import { Link } from 'react-router-dom'

export default function MoreBtn({route}) {
    return (
        <div className="col mb-30">
        <div className="more__btn" style={{width:'175px',marginLeft:'-15px'}}>
          <p>1000+ Products Available</p>
          <Link to={route} className="btn" style={{margin:'1em 0em'}}>See More</Link>
        </div>
      </div>
    )
}