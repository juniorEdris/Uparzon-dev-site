import React from 'react'
import { connect } from 'react-redux'

export const Saparate = (props) => {

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
        }, {}); // empty object is the initial value for result object
      };
      
      // Group by color as key to the person array
      const personGroupedByColor = groupBy(props.basket, 'shop_name');
      console.log('sap',personGroupedByColor);
      const descriptors1 = Object.getOwnPropertyDescriptors(personGroupedByColor);
      console.log('sap2',descriptors1);
      
    return (
        <div>
            Saparate
        </div>
    )
}

const mapStateToProps = (state) => ({
  basket:state.basketProd.basket,
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Saparate)
