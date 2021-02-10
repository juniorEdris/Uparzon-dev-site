import React,{useEffect, useState} from 'react'
import Banner from './PageComponents/VendorBanner'
// import Sidebar from './PageComponents/VendorSidebar'
import VendorProducts from './PageComponents/VendorProducts'
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
import Pagination from '../PrimarySections/Pagination'
import Sidebar from '../Shop/pageComponents/ShopSidebar'



function Index(props) {
    const [page, setPage] = useState(1)
    const [category, setCategory] = useState(0)
    const [subcategory, setSubategory] = useState(0)
    const [childcategory, setChildategory] = useState(0)
    // Get id from url
    const query = useQuery()
    const VendorID = query.get('id')

    useEffect(() => {
        // props.VendorDetails(VendorID)
        props.VendorProducts(VendorID,page,category,subcategory,childcategory)
    }, [VendorID,page,category])

    // Document Title Update
    useDocTitle()

    return (
        <div className="main-wrapper mt-20">
            <Profile details={props.details} loading={props.loading}/>
            <Search/>
        <div className="container-fluid">
            <div className="row">
                <Sidebar id={category} setId={setCategory} loading={props.loading} categories={props.categories}/>
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
                        <Pagination page={page} setPage={setPage} allPages={props.pages}/>
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
        pages: state.vendorProducts.vendorPages,
        details: state.vendorProducts.vendorDetails,
    }
)

const mapDispatchToProps = dispatch=>(
    {
        VendorProducts:(id,page,category,subcategory,childcategory)=> dispatch(fetchVendorProds(id,page,category,subcategory,childcategory)),
        VendorDetails:(id)=> dispatch(fetchVendorDetails(id)),
    }
)
export default connect(mapStateToProps,mapDispatchToProps)(Index)