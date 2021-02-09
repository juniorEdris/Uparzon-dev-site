import React from 'react'
import Product from './subFolder/Product'
import { ProductLoader } from '../../PrimarySections/ReactPlaceHolder/ReactPlaceHolder';

function VendorProducts(props) {

    return (
        <>
        {props.loading ?
            <div className="row">
            {Array(20).fill().map((x,id)=>(<ProductLoader key={id}/>))}
        </div>
        :
        <div className="shop-product-wrap row grid">
            {
                props.products?.map(data=>(
                    <div className="col-md-4 col-lg-3 col-6" key={data.id}>
                    {/* grid view starts here */}
                    <Product isGrid={true} key={data.id} {...data} />
                    {/* List view starts here */}
                    <Product key={data.id} {...data} isList={true}/>
                    </div>))
            }
        </div>}
        </>
    )
}

export default VendorProducts
