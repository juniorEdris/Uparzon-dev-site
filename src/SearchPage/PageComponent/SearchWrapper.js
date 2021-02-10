import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Sidebar from '../../Shop/pageComponents/ShopSidebar';
import Filter from '../../Shop/pageComponents/RightBarControl'
import { ProductLoader } from '../../PrimarySections/ReactPlaceHolder/ReactPlaceHolder';
import Product from '../../Home/pageComponents/Subfolder/Product';
import { connect } from 'react-redux';
import { fetchSearchProducts } from '../../Utility/Redux/Action/SearchAction';
import Pagination from '../../PrimarySections/Pagination';

function SearchWrapper(props) {
    const [input] = useState('')
    const [id, setId] = useState(0)
    const [page,setPage] = useState(1)
    useEffect(() => {
        props.fetchSearchResult(id,input,page)
       }, [id,input,page])

        return (
            <div>
                
                <div className={`main-wrapper pt-10 ${props.loading && 'loading-opacity'}`}>
                    <div className={`container-fluid`}>
                        <div className="row">
                    <Sidebar id={id} setId={setId} categories={props.categories}/>
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
                        <div className="shop-product-wrap grid row">
                            {props.results?.map(data=>(
                        <div className="col-lg-3 col-md-4 col-sm-6" key={data.id}>
                            {/* grid view starts here */}
                            <Product isGrid={true} key={data.id} product={data} />
                            </div>
                            ))}    
                        </div>
                        <Pagination page={page} setPage={setPage} allPages={props.pages}/>
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
            loading:state.SearchEngine.loading,
            results: state.SearchEngine.searchedResponse,
            pages: state.SearchEngine.searchPages,
            categories:state.categories.categoryList,

        }
    )
    const mapDispatchToProps =dispatch=>(
        {
            fetchSearchResult:(select,keywords,page)=>dispatch(fetchSearchProducts(select,keywords,page))
        }
    )
    export default  connect(mapStateToProps,mapDispatchToProps)(SearchWrapper)
