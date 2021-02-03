import React,{useEffect} from 'react'
import Banner from './PageComponents/VendorBanner'
import Sidebar from './PageComponents/VendorSidebar'
import VendorProducts from './PageComponents/VendorProducts'
import Pagination from './PageComponents/VendorPagination'
import FilterControl from './PageComponents/VendorBarControl'
import Profile from './PageComponents/VendorCard'
import Search from './PageComponents/VendorSearch'
import Modal from '../PrimarySections/Modal/ModalSection'
import ScrollBar from '../PrimarySections/ScrollBar/ScrollBar'
import { connect } from 'react-redux'
import { fetchVendorProds } from '../Utility/Redux/Action/VendorProductAction'
import useQuery from '../PrimarySections/Essentials/UrlParams'
import { fetchVendorDetails } from '../Utility/Redux/Action/VendorDetailsAction'
import useDocTitle from '../PrimarySections/CustomHooks/DocTitle'



function Index(props) {
    // Get id from url
    const query = useQuery()
    const VendorID = query.get('id')

    useEffect(() => {
        // props.VendorDetails(VendorID)
        props.VendorProducts(VendorID)
    }, [])

    // Document Title Update
    useDocTitle()

    return (
        <div className="main-wrapper">
            <Banner/>
            <Profile details={props.details} loading={props.loading}/>
            <Search/>
        <div className="container-fluid">
            <div className="row">
                <Sidebar loading={props.loading} categories={props.categories}/>
                <div className="col-lg-9 order-first order-lg-last">
                    <div className="product-shop-main-wrapper mb-50">
                        <div className="shop-top-bar mb-30">
                            <div className="row">
                                {/* <View/> */}
                                
                                <div className="col-md-6">
                                    <FilterControl/>
                                </div>
                            </div>
                        </div>
                        <VendorProducts loading={props.loading} products={props.products}/>
                        <Pagination/>
                    </div>
                </div>
            </div>
    </div>
    <ScrollBar/>
    <Modal/>
    </div>
    )
}


const mapStateToProps = state=>(
    {
        loading: state.vendorProducts.loading,
        products: state.vendorProducts.vendorProduct,
        categories: state.vendorProducts.vendorCategories,
        details: state.vendorProducts.vendorDetails,
    }
)
// vendorProduct
// vendorDetails
// vendorCategories
const mapDispatchToProps = dispatch=>(
    {
        VendorProducts:(id)=> dispatch(fetchVendorProds(id)),
        VendorDetails:(id)=> dispatch(fetchVendorDetails(id)),
    }
)
export default connect(mapStateToProps,mapDispatchToProps)(Index)