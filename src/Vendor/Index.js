import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import Banner from './PageComponents/VendorBanner'
import Sidebar from './PageComponents/VendorSidebar'
import View from './PageComponents/VendorView'
import VendorProducts from './PageComponents/VendorProducts'
import Pagination from './PageComponents/VendorPagination'
import FilterControl from './PageComponents/VendorBarControl'
import Profile from './PageComponents/VendorCard'
import Search from './PageComponents/VendorSearch'
import Modal from '../PrimarySections/Modal/ModalSection'
import { useStateValue } from '../Utility/StateProvider'
import ScrollBar from '../PrimarySections/ScrollBar/ScrollBar'



export default function Index() {

const [sort,setSort] = useState('')
const [limit,setLimit] = useState('')
const [data,setData] = useState([])
const [{quickView}] = useStateValue()

    //Product sort function
    const ProductSort =(e)=>{
        setSort(e.target.value)
        const slicedProds = [...data]
        if(e.target.value === 'lowestPrice'){
            const lowestProd = slicedProds.sort((a,b)=>(a.price > b.price ? 1:-1))
            setData(lowestProd)
        }else if(e.target.value === 'highestPrice'){
            const highestProd = slicedProds.sort((a,b)=>(a.price < b.price ? 1:-1))
            setData(highestProd)
        }else{
            const allprod = slicedProds.sort((a,b)=>(a.id > b.id ? 1:-1))
            setData(allprod)
        }
    }

    //Product show function
    const ProductLimit =(e)=>{
        setLimit(e.target.value)
        const slicedProds = data
        if(e.target.value === 5){
            const limitedProds = slicedProds.slice(0,e.target.value)
            setData(limitedProds)
            console.log('limit 5',limitedProds);
        }else if(e.target.value === 10){
            const limitedProds = slicedProds.slice(0,e.target.value)
            console.log('limit 10',limitedProds);
            setData(limitedProds)
        }else if(e.target.value === 15){
            const limitedProds = slicedProds.slice(0,e.target.value)
            console.log('limit 15',limitedProds);
            setData(limitedProds)
        }else if(e.target.value === 20){
            const limitedProds = slicedProds.slice(0,e.target.value)
            console.log('limit 20',limitedProds);
            setData(limitedProds)
        }else if(e.target.value === 0){
            setData(data)
        }
        setSort('')
    }
    return (
        <div className="main-wrapper">
            <Banner/>
            <Profile data={data}/>
            <Search/>
        <div className="container-fluid">
            <div className="row">
                <Sidebar/>
                <div className="col-lg-9 order-first order-lg-last">
                    <div className="product-shop-main-wrapper mb-50">
                        <div className="shop-top-bar mb-30">
                            <div className="row">
                                {/* <View/> */}
                                
                                <div className="col-md-6">
                                    <FilterControl 
                                    sort={sort} 
                                    ProductSort={ProductSort} 
                                    limit={limit}
                                    ProductLimit={ProductLimit}
                                    />
                                </div>
                            </div>
                        </div>
                        <VendorProducts />
                        <Pagination/>
                    </div>
                </div>
            </div>
    </div>
    <ScrollBar/>
    <Modal product={quickView}/>
    </div>
    )
}
