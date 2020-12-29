import React,{useState,useEffect} from 'react'
import './ShopListBody.css'
import { Link } from 'react-router-dom'
import { Truncate } from '../../../Data'
import { StoreLoader } from '../../../PrimarySections/ReactPlaceHolder/ReactPlaceHolder'
import { connect } from 'react-redux'
import { fetchShopList } from '../../../Utility/Redux/Action/ShopListAction'

function ListBody(props) {
    useEffect(() => {
        document.title = 'Shop List | Uparzon E-commerce Store'
        props.fetchShopList()
    }, [])
    console.log(props.lists);
    return (
        <>
        {props.loading ?
        <div className="container p4">
            <StoreLoader/>
        </div>
        :
        <div className='container'>
            <div className="d-flex flex-wrap justify-content-center p-4">
            {
                props.lists?.map(store=>(
            <Link to={`/vendor?id=${store.shop_id}`}>
                <div className="shop__card m-2" title={store.shop_name}>
                    <div className='shop__card__img'>
                        <img src={`https:${store.logo.replace('demostore','store')}`} alt={store.shop_name}/>
                    </div>
                    <div className='shop__card__details'>
                        <p className='shop__name' >{Truncate(store.shop_name,15)}</p>
                    </div>
                </div>
            </Link>
                ))
            }
            </div>
        </div>}
        </>
    )
}

const mapStateToProps = state =>(
    {
        lists:state.storeList.shopList,
        loading: state.storeList.loading
    }
)

const mapDispatchToProps = dispatch =>(
    {
        fetchShopList:()=>dispatch(fetchShopList())
    }
)
export default connect(mapStateToProps,mapDispatchToProps)(ListBody)