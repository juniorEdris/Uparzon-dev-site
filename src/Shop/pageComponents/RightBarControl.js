import React from 'react'
import { FormControl, MenuItem, Select } from '@material-ui/core'
import { connect } from 'react-redux'
import { limitedProducts, sortProdsByPrice } from '../../Utility/Redux/Action/FilterProdsAction'

function RightBarControl(props) {
    return (
        <div className="top-bar-right">
        <div className="per-page">
            <p>Show : </p>
    <FormControl className=''>
        <Select 
        variant="outlined"
        id="grouped-select"
        value={props.limit}
        onChange={(e)=>props.FilterLimit(props.products,e.target.value)}
        >
            <MenuItem value={0}>All</MenuItem>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={15}>15</MenuItem>
            <MenuItem value={20}>20</MenuItem>
        </Select>
    </FormControl>
    
        </div>
        <div className="product-short">
            <p>Sort By : </p>
    <FormControl className=''>
        <Select 
        variant="outlined"
        id="grouped-select"
        value={props.price}
        onChange={(e)=>props.FilterPrice(props.products,e.target.value)}
        >
            <MenuItem value=''>All</MenuItem>
            <MenuItem value="lowestPrice">Price (Low &gt; High)</MenuItem>
            <MenuItem value="highestPrice">Price (High &gt; Low)</MenuItem>
        </Select>
    </FormControl>                                
        </div> 
        </div>
    )
}

const mapDispatchToProps = dispatch=>(
    {
        FilterPrice:(prod,price)=>dispatch(sortProdsByPrice(prod,price)),
        FilterLimit:(prod,limit)=>dispatch(limitedProducts(prod,limit)),
    }
)

export default connect(state=>({
    products:state.shopProducts.shopProduct,
    price:state.shopProducts.price,
    limit:state.shopProducts.limit
}),mapDispatchToProps)(RightBarControl)
