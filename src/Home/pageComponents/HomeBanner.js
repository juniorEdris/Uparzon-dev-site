import React from 'react'
import { Link } from 'react-router-dom'
import './homebanner.css'

function HomeBanner () {
    
        return (
            <div className="banner-statics home-banner">
                    <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-4 col-md-4">
                        <div className="single-banner-statics">
                            <Link to="/"><img src="./assets/img/root/img1-top-sinrato1.jpg" alt="" /></Link>
                        </div>
                        </div>
                        <div className="col-lg-4 col-md-4">
                        <div className="single-banner-statics">
                            <Link to="/"><img src="./assets/img/root/img2-top-sinrato1.jpg" alt="" /></Link>
                        </div>
                        </div>
                        <div className="col-lg-4 col-md-4">
                        <div className="single-banner-statics">
                            <Link to="/"><img src="./assets/img/root/img3-top-sinrato1.jpg" alt="" /></Link>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
        )
    
}

export default HomeBanner
