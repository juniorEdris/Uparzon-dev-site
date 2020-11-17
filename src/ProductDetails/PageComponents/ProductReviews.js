import React from 'react'

export default function ProductReviews() {
    return (
        <div className="product-details-reviews pb-30">
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-12">
        <div className="product-info mt-half">
          <ul className="nav nav-pills justify-content-center" id="pills-tab" role="tablist">
            <li className="nav-item">
              <a className="nav-link active" id="nav_desctiption" data-toggle="pill" href="#tab_description" role="tab" aria-controls="tab_description" aria-selected="true">Description</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="nav_review" data-toggle="pill" href="#tab_review" role="tab" aria-controls="tab_review" aria-selected="false">Reviews (1)</a>
            </li>
          </ul>
          <div className="tab-content">
            <div className="tab-pane fade show active" id="tab_description" role="tabpanel" aria-labelledby="nav_desctiption">
              <p>Studio Design' PolyFaune collection features classic products with colorful patterns, inspired by the traditional japanese origamis. To wear with a chino or jeans. The sublimation textile printing process provides an exceptional color rendering and a color, guaranteed overtime. Regular fit, round neckline, long sleeves. 100% cotton, brushed inner side for extra comfort.</p>
            </div>
            <div className="tab-pane fade" id="tab_review" role="tabpanel" aria-labelledby="nav_review">
              <div className="product-review">
                <div className="customer-review">
                  <table className="table table-striped table-bordered">
                    <tbody>
                      <tr>
                        <td><strong>Sinrato Themes</strong></td>
                        <td className="text-right">09/04/2019</td>
                      </tr>
                      <tr>
                        <td colSpan={2}>
                          <p>It’s both good and bad. If Nikon had achieved a high-quality wide lens camera with a 1 inch sensor, that would have been a very competitive product. So in that sense, it’s good for us. But actually, from the perspective of driving the 1 inch sensor market, we want to stimulate this market and that means multiple manufacturers.</p>
                          <div className="product-ratings">
                            <ul className="ratting d-flex mt-2">
                              <li><i className="fa fa-star" /></li>
                              <li><i className="fa fa-star" /></li>
                              <li><i className="fa fa-star" /></li>
                              <li><i className="fa fa-star" /></li>
                              <li><i className="fa fa-star" /></li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div> {/* end of customer-review */}
                <form action="#" className="review-form">
                  <h2>Write a review</h2>
                  <div className="form-group row">
                    <div className="col">
                      <label className="col-form-label"><span className="text-danger">*</span> Your Name</label>
                      <input type="text" className="form-control" required />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col">
                      <label className="col-form-label"><span className="text-danger">*</span> Your Review</label>
                      <textarea className="form-control" required defaultValue={""} />
                      <div className="help-block pt-10"><span className="text-danger">Note:</span> HTML is not translated!</div>
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col">
                      <label className="col-form-label"><span className="text-danger">*</span> Rating</label>
                      &nbsp;&nbsp;&nbsp; Bad&nbsp;
                      <input type="radio" defaultValue={1} name="rating" />
                      &nbsp;
                      <input type="radio" defaultValue={2} name="rating" />
                      &nbsp;
                      <input type="radio" defaultValue={3} name="rating" />
                      &nbsp;
                      <input type="radio" defaultValue={4} name="rating" />
                      &nbsp;
                      <input type="radio" defaultValue={5} name="rating" defaultChecked />
                      &nbsp;Good
                    </div>
                  </div>
                  <div className="buttons d-flex justify-content-end">
                    <button className="btn-cart rev-btn" type="submit">Continue</button>
                  </div>
                </form> {/* end of review-form */}
              </div> {/* end of product-review */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    )
}
