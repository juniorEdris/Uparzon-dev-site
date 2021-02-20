import React from 'react'
import { connect } from 'react-redux'


const Saparate = (props) => {

      // Accepts the array and key
      const groupBy = (array, key) => {
        // Return the end result
        return array.reduce((result, currentValue) => {
          // If an array already present for key, push it to the array. Else create an array and push the object
          (result[currentValue[key]] = result[currentValue[key]] || []).push(
            currentValue
          );
          // Return the current iteration `result` value, this will be taken as next iteration `result` value and accumulate
          return result;
        }, []); // empty object is the initial value for result object
      };
      // Group by color as key to the person array
      const cart = groupBy(props.basket, 'shop_name');

      const shopName = Object.keys(cart).forEach(function(shopName){
            return shopName })
      
      console.log('saparate',Object.keys(cart).map(name=>{
        return cart[name];
    }))
      // const result = Object.keys(cart).map(e => cart[e].map(x=>x));
      // console.log('console shopname',log(cart))
      
     
      
    return (
        <div>
            {/* {cart[log(cart)]} */}
        </div>
    )
}

const mapStateToProps = (state) => ({
  basket:state.basketProd.basket,
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Saparate)
