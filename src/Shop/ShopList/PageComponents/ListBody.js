import React,{useEffect} from 'react'
import './ShopListBody.css'
import { Link } from 'react-router-dom'
import { Truncate } from '../../../Data'
import { StoreLoader } from '../../../PrimarySections/ReactPlaceHolder/ReactPlaceHolder'
import { connect } from 'react-redux'

function ListBody(props) {
    useEffect(() => {
        document.title = 'Shop List | Uparzon E-commerce Store'
    }, [])
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
            <Link to={`/vendor?id=${store.id}`}>
                <div className="shop__card m-2" title={store.shop_name}>
                    <div className='shop__card__img'>
                        <img src={`https://images.unsplash.com/photo-1534723452862-4c874018d66d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8c3RvcmV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80`} alt={store.shop_name}/>
                        {/* <img src={`https:${store.logo.replace('demostore','store')}`} alt={store.shop_name}/> */}
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
        lists:state.shopList.shopList,
        loading: state.shopList.loading,
        pages:state.shopList.shopListPages,
    }
)

const mapDispatchToProps = dispatch =>({})
export default connect(mapStateToProps,mapDispatchToProps)(ListBody)