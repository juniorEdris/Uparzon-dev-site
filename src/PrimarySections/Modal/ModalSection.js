import React from 'react'
import Slider from './SubFolder/ModalSlider'
import Description from './SubFolder/Description'
import './ModalSection.css'

export default function ModalSection(){
    
    return (
        <div>
            {/* Quick view modal start */}
            <div className="modal fade" id="quickk_view">
            <div className="container">
                <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal">×</button>
                    </div>
                <div className="modal-body">
                <div className="row">
                        <Slider />
                        <Description/>
                    </div>
                    </div>    
                </div>
                </div>
            </div>
            </div>
            {/* Quick view modal end */}

        </div>
    )
      }
    
