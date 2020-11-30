/* eslint-disable no-unused-vars */
import React,{ useEffect } from 'react'
import $ from 'jquery'
import { Link } from 'react-router-dom'
import './ShopWrapper.css'
import { useState } from 'react'
import { AllProduct } from '../../Data'
import { useStateValue } from '../../Utility/StateProvider'
import ModalSection from '../../PrimarySections/Modal/ModalSection'
import Sidebar from './ShopSidebar'
import Product from '../../Home/pageComponents/Subfolder/Product'
import RightBarControl from './RightBarControl'


export default function ShopWrapper() {

useEffect(() => {
// product view mode change js
$('.product-view-mode a').on('click', function(e){
    e.preventDefault();
    
    var shopProductWrap = $('.shop-product-wrap');
    var viewMode = $(this).data('target');
    
    $('.product-view-mode a').removeClass('active');
    $(this).addClass('active');
    shopProductWrap.removeClass('grid list column_3').addClass(viewMode);
})

}, [])

const [state] = useStateValue()
const [Electproducts,setElectProducts] = useState(AllProduct)
const [sort,setSort] = useState('')
const [limit,setLimit] = useState('')

    //Product sort function
    const ProductSort =(e)=>{
        setSort(e.target.value)
        const slicedProds = [...Electproducts]
        if(e.target.value === 'lowestPrice'){
            const lowestProd = slicedProds.sort((a,b)=>(a.price > b.price ? 1:-1))
            setElectProducts(lowestProd)
        }else if(e.target.value === 'highestPrice'){
            const highestProd = slicedProds.sort((a,b)=>(a.price < b.price ? 1:-1))
            setElectProducts(highestProd)
        }else{
            const allprod = slicedProds.sort((a,b)=>(a.id > b.id ? 1:-1))
            setElectProducts(allprod)
        }
    }

    //Product show function
    const ProductLimit =(e)=>{
        setLimit(e.target.value)
        const slicedProds = AllProduct
        if(e.target.value === 5){
            const limitedProds = slicedProds.slice(0,e.target.value)
            setElectProducts(limitedProds)
        }else if(e.target.value === 10){
            const limitedProds = slicedProds.slice(0,e.target.value)
            setElectProducts(limitedProds)
        }else if(e.target.value === 15){
            const limitedProds = slicedProds.slice(0,e.target.value)
            setElectProducts(limitedProds)
        }else if(e.target.value === 20){
            const limitedProds = slicedProds.slice(0,e.target.value)
            setElectProducts(limitedProds)
        }else if(e.target.value === 0){
            setElectProducts(AllProduct)
        }
        setSort('')
    }
    return (
        <div>
            
            <div className="main-wrapper pt-10">
                <div className="container-fluid">
                <div className="shop-baner-img mb-70">
                    <Link to='/'><img src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1rZbOp3gP7K4jSZFqXXamhVXa.jpg_1200x1200Q100.jpg_.webp" alt="" /></Link>
                </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                <Sidebar/>
                <div className="col-lg-9 order-first order-lg-last">
                    <div className="product-shop-main-wrapper mb-50">
                    <div className="shop-top-bar mb-30">
                        <div className="row">
                        <div className="col-md-6">
                            <div className="top-bar-left">
                            <div className="product-view-mode">
                                <Link to='#' data-target="column_3"><span>3-col</span></Link>
                                <Link className="active" to="#" data-target="grid"><span>4-col</span></Link>
                                <Link to='#' data-target="list"><span>list</span></Link>
                            </div>
                            <div className="product-page">
                                <p>Showing 1 to 9 of 9 (1 Pages)</p>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <RightBarControl 
                            sort={sort} 
                            ProductSort={ProductSort} 
                            limit={limit}
                            ProductLimit={ProductLimit}
                            />
                        </div>
                        </div>
                    </div>
                    <div className="shop-product-wrap grid row">
                        {Electproducts.map(data=>(
                    <div className="col-lg-3 col-md-4 col-sm-6" key={data.id}>
                        {/* grid view starts here */}
                        <Product isGrid={true} key={data.id} {...data} />
                        {/* List view starts here */}
                        <Product key={data.id} {...data} isList={true}/>
                        
                        </div>
                        ))}
                        
                    </div>
                    <div className="paginatoin-area style-2 pt-35 pb-20">
                        <div className="row">
                        <div className="col-sm-6">
                            <div className="pagination-area">
                            <p>Showing 1 to 9 of 9 (1 Pages)</p>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <ul className="pagination-box pagination-style-2">
                            <li><a className="Previous" href="/">Previous</a>
                            </li>
                            <li className="active"><Link to='/'>1</Link></li>
                            <li><Link to='/'>2</Link></li>
                            <li><Link to='/'>3</Link></li>
                            <li>
                                <a className="Next" href="/"> Next </a>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div> 
                    </div>
                </div>
                </div>
            </div>
            </div>
            <ModalSection product={state.quickView}/>
        </div>
    )
}
