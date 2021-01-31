import React from 'react'
import { Link } from 'react-router-dom';
import Sidebar from '../../Shop/pageComponents/ShopSidebar';
import Filter from '../../Shop/pageComponents/RightBarControl'
import { ProductLoader } from '../../PrimarySections/ReactPlaceHolder/ReactPlaceHolder';
import Product from '../../Home/pageComponents/Subfolder/Product';
import { connect } from 'react-redux';

function SearchWrapper(props) {
   
        return (
            <div>
                
                <div className="main-wrapper pt-10">
                    <div className="container-fluid">
                        <div className="row">
                    <Sidebar/>
                    <div className="col-lg-9 order-first order-lg-last">
                        <div className="product-shop-main-wrapper mb-50">
                        <div className="shop-top-bar mb-30">
                            <div className="row">
                            <div className="col-md-6">
                                <div className="top-bar-left">
                                    <div className="product-page">
                                        <p className=''>About {props.results?.length || 0} products matched...</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <Filter/>
                            </div>
                            </div>
                        </div>
                        {props.loading ?
                            <div className="shop-product-wrap grid row" >
                                <ProductLoader/>
                            </div>
                        :<div className="shop-product-wrap grid row">
                            {props.results?.map(data=>(
                        <div className="col-lg-3 col-md-4 col-sm-6" key={data.id}>
                            {/* grid view starts here */}
                            <Product isGrid={true} key={data.id} product={data} />
                            </div>
                            ))}    
                        </div>}
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
            </div>
        )
    }
    
    const mapStateToProps=state=>(
        {
            loading:state.loading,
            results: state.SearchEngine.searchedResponse
        }
    )
    const mapDispatchToProps =dispatch=>({})
    export default  connect(mapStateToProps,mapDispatchToProps)(SearchWrapper)
