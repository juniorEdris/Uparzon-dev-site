import React,{useEffect} from 'react'
import Product from './subFolder/Product'
import { ProductLoader } from '../../PrimarySections/ReactPlaceHolder/ReactPlaceHolder';
import { connect } from 'react-redux';
import { fetchVendorProds } from '../../Utility/Redux/Action/VendorProductAction';

function VendorProducts(props) {

    console.log('vendor',props);
    useEffect(() => {
        props.fetchVendorProducts()
    }, [])

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

const mapStateToProps = state=>(
    {
        products: state.vendorProducts.vendorProduct,
        loading: state.vendorProducts.loading,
    }
)

const mapDispatchToProps = dispatch=>(
    {
        fetchVendorProducts:()=> dispatch(fetchVendorProds())
    }
)
export default connect(mapStateToProps,mapDispatchToProps)(VendorProducts)
