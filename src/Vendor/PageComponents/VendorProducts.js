import React from 'react'
import Product from './subFolder/Product'
import { ProductLoader } from '../../PrimarySections/ReactPlaceHolder/ReactPlaceHolder';

function VendorProducts(props) {

    return (
        <>
        {props.loading ?
            <ProductLoader/>
        :
        <div className="shop-product-wrap column_3 row">
            {
                props.products?.map(data=>(
                    <div className="col-lg-3 col-md-4 col-sm-6" key={data.id}>
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
