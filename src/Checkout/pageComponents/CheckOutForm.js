import React from 'react'
import CustomShipping from './CustomShipping'

export default function CheckOutForm() {
    return (
        <div className="col-12 col-sm-12 col-md-6 col-lg-7">
        <div className="checkout-form">
        <div className="section-title left-aligned">
            <h3>Billing Details</h3>
        </div>
        <form action="#">
            <div className="form-row mb-3">
            <div className="form-group col-12 col-sm-12 col-md-6">
                <label htmlFor="first_name">Full Name <span className="text-danger">*</span></label>
                <input type="text" className="form-control" id="first_name" required />
            </div>
            </div>
            <div className="form-row mb-3">
            <div className="form-group col-12 col-sm-12 col-md-6">
                <label htmlFor="email_address">Email Address <span className="text-danger">*</span></label>
                <input type="email" className="form-control" id="email_address" required />
            </div>
            </div>
            <div className="form-row mb-3">
            <div className="form-group col-12 col-sm-12 col-md-12">
                <label htmlFor="p_address">Address <span className="text-danger">*</span></label>
                <input type="text" className="form-control" id="p_address" required />
            </div>
            </div>
            <div className="form-row mb-3">
            <div className="form-group col-12 col-sm-12 col-md-6">
                <label htmlFor="city_name">City <span className="text-danger">*</span></label>
                <input type="text" className="form-control" id="city_name" required />
            </div>
            <div className="form-group col-12 col-sm-12 col-md-6">
                <label htmlFor="province_name">Province <span className="text-danger">*</span></label>
                <input type="text" className="form-control" id="province_name" required />
            </div>
            </div>
            <div className="form-row mb-3">
            <div className="form-group col-12 col-sm-12 col-md-6">
                <label htmlFor="zip_code">Zip Code <span className="text-danger">*</span></label>
                <input type="number" className="form-control" id="zip_code" required />
            </div>
            <div className="form-group col-12 col-sm-12 col-md-6">
                <label htmlFor="country_name" className="d-block">Country <span className="text-danger">*</span></label>
                <select name="country_id" id="country_name" className="form-control nice-select" required>
                <option value> --- Select --- </option>
                <option value>Argentina</option>
                <option value>Bangladesh</option>
                <option value>Belgium</option>
                <option value>Brazil</option>
                <option value>Germany</option>
                <option value>India</option>
                <option value>United Kingdom</option>
                <option value>United States</option>
                </select>
            </div>
            </div>
            <div className="form-row mb-3">
            <div className="form-group col-12 col-sm-12 col-md-6">
                <label htmlFor="tel_number">telephone</label>
                <input type="tel" className="form-control" id="tel_number" />
            </div>
            <div className="form-group col-12 col-sm-12 col-md-6">
                <label htmlFor="fax_num">Fax</label>
                <input type="text" className="form-control" id="fax_num" />
            </div>
            </div>
            <CustomShipping/>
            <div className="form-row">
            <div className="form-group col-12 col-sm-12 col-md-12">
                <label htmlFor="order_notes">Order Notes</label>
                <textarea className="form-control" id="order_notes" placeholder="Notes about your order, e.g. special notes for delivery." defaultValue={""} />
            </div>
            </div>
        </form>
        </div> {/* end of checkout-form */}
    </div>
    )
}
