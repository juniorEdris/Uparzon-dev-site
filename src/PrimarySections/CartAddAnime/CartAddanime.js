import React from 'react'
import { connect } from 'react-redux'

function CartAddanime(props) {
    return (
        <div className={`cart_added_animation ${props.cartState && 'animation_active'}`}>
            <span class="lnr lnr-checkmark-circle"></span><h3>Product added to {props.cartTab}</h3>
            {/* <span className="lnr lnr-cart" /> */}
        </div>
    )
}
const mapStateToProps = state=>(
    { 
        cartState:state.CartAnimation.productAdded,
        cartTab:state.CartAnimation.tab,
    }
    )
export default connect(mapStateToProps)(CartAddanime)
