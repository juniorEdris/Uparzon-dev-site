import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { Truncate } from '../../PrimarySections/Essentials/AllFunctions';
import { currToFixed } from '../../PrimarySections/Essentials/CurrencyFormat';


const Saparate = (props) => {

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
          // Accepts the array and key
        //   const groupBy = (array, key) => {
        //     // Return the end result
        //     return array.reduce((result, currentValue) => {
        //       // If an array already present for key, push it to the array. Else create an array and push the object
        //       (result[currentValue[key]] = result[currentValue[key]] || []).push(
        //         currentValue
        //       );
        //       // Return the current iteration `result` value, this will be taken as next iteration `result` value and accumulate
        //       return result;
        //     }, {}); // empty object is the initial value for result object
        //   };
        //   // Group by color as key to the person array
        //   const cart = groupBy(props.basket, 'shop_name');
        // //   const result = Object.keys(cart).map(e => cart[e].map(x=>x));
        // //   console.log('sap',cart);
        // const res= Object.keys(cart).map(name=>{
        //     return cart[name];
        // })
        // const result = res.map(x=>{
        //     return x
        // })
        // let prod;
        // for(const item of result){
        //     prod= item
        // }
        
        var groupBy = function(xs, key) {
          return xs.reduce(function(rv, x) {
              (rv[x[key]] = rv[x[key]] || []).push(x);
              return rv;
          }, {});
      };
  
      const groupedItems=groupBy(props.basket, 'shop_name');

        const cartprod = Object.keys(groupedItems).map(function (grooupKey) {
         return groupedItems[grooupKey].map(function (prod) {
              return <div>
                <div className="">{grooupKey}</div>
                <form action='#'> 
              <div className="table-responsive mb-1">
              {/* <div className="col-12 d-flex flex-column flex-md-row justify-content-between align-items-center vendor__row">
                  <div className="vendor__name left col-6">
                      <h2><Link to='/shop'><span>{grooupKey}</span></Link></h2>
                      <small className='minimum_order'>Minimum {prod.vendor_delivery.min_order}tk product purchaseable from single Shop</small>
                  </div>
                  <div className="vendor__alt__text left col-6">
                     <h3><Link to='/shop'><span>Inside {prod.vendor_district?prod.vendor_district:'none'}</span></Link></h3>
                      <div>
                              <p>Delivery Charge:  {prod.vendor_delivery? prod.vendor_delivery.inside_deli_charge : 'none'}</p>
                              <p>Delivery Time:  {prod.vendor_delivery ?prod.vendor_delivery.inside_deli_time : 'none'}</p>
                      </div>
                  </div>
                  <div className="vendor__alt__text right col-6">
                     <h3><Link to='/shop'><span>Outside {prod.vendor_district?prod.vendor_district:'none'}</span></Link></h3>
                      <div>
                              <p>Delivery Charge:  {prod.vendor_delivery ?prod.vendor_delivery.outside_deli_charge+'tk' : 'none'}</p>
                              <p>Delivery Time:  {prod.vendor_delivery ?prod.vendor_delivery.outside_deli_time : 'none'}</p>
                      </div>
                  </div>
              </div> */}
          <table className="table table-bordered">
              <thead>
                  <tr>
                  <td>Select</td>
                  <td>Image</td>
                  <td>Product Name</td>
                  <td>Model</td>
                  <td>Quantity</td>
                  <td>Unit Price</td>
                  <td>Total</td>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>
                          <div><input type='checkbox'  className='cart-select' name="cart-select" /></div>
                      </td>
                      <td>
                          <Link to={`/productdetails?id=${prod.id}`}><img src={`https:${prod.photo}`} alt={prod.name} title={prod.name} className="img-thumbnail" /></Link>
                      </td>
                      <td>
                          <Link to={`/productdetails?id=${prod.id}`} title={prod.name}>{Truncate(prod.name,40)}</Link>
                          {/* <span>Delivery Date: 2019-09-22</span>
                          <span>Color: Brown</span>
                      <span>Reward Points: 300</span> */}
                      </td>
                      <td>3</td>
                      <td>
                          <div className="input-group btn-block">
                          <div className="product-qty mr-3">
                              <input type="text" readOnly defaultValue={prod.qty_request_to_buy} />
                              <span class={`dec qtybtn ${prod.qty_request_to_buy===1 && 'disabled'}`} ><i className="fa fa-minus"></i></span><span className={`inc qtybtn ${prod.qty_request_to_buy===prod.stock && 'disabled'}`} ><i class="fa fa-plus"></i></span>
                          </div>
                          <span className="input-group-btn">
                              <button type="submit" className="btn btn-primary"><i className="fa fa-refresh" /></button>
                              <button type="button" className="btn btn-danger pull-right" ><i className="fa fa-times-circle" /></button>
                          </span>
                          </div>
                      </td>
                      <td>&#2547; {currToFixed(prod.price)}</td>
                      <td>&#2547; {currToFixed(prod.price*prod.qty_request_to_buy)}</td>
                  </tr> 
              </tbody>
          </table>
      </div>
      </form>
      </div>
          })
      });
      console.log('cartprod',cartprod,props.basket);
     
      
    return (
        <div>
            {cartprod}
        </div>
    )
}

const mapStateToProps = (state) => ({
  basket:state.basketProd.basket,
  cart: state.cart.cartProducts,
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Saparate)
