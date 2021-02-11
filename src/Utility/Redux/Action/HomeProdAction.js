import { FETCH_PRODUCTS_ERROR, FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS } from '../Types'
import {API, Request} from '../../../PrimarySections/Connections/APILink'
import Axios from 'axios'

const fetchHomeProdsRequest = ()=>{
    return{
        type: FETCH_PRODUCTS_REQUEST,
    }
}
const fetchHomeProdsSuccess = (res)=>{
    return{
        type: FETCH_PRODUCTS_SUCCESS,
        slider:res.sliders,
        store:res.stores,
        ourProduct:res.ourProducts,
        hotCollection: res.hotCollection,
        featuredProduct:res.featuredCategories,
        big:res.big,
        latest:res.latest,
        trending:res.trending,
        brandProduct:res.brandProducts,
    }
}



export const fetchHomeProds = ()=>async(dispatch)=>{
    dispatch(fetchHomeProdsRequest())
    
    // Home Stores
     const stores = await API().get(Request.Stores)
    .then(res=>{
        return res.data
    }).catch(err=>{
        return err.message
    })
    // Home Sliders
     const sliders = await API().get(Request.Sliders)
    .then(res=>{
        return res.data
    }).catch(err=>{
        return err.message
    })
    // Our Products
     const ourProd = await API().get(Request.OurProducts)
    .then(res=>{
        return res.data
    }).catch(err=>{
        return err
    })
    // Hot collections
     const hotCollection = await API().get(Request.HotCollection)
    .then(res=>{
        return res.data
    }).catch(err=>{
        return err
    })
    // Featured Products
     const featuredProduct = await API().get(Request.FeaturedProducts)
    .then(res=>{
        return res.data
    }).catch(err=>{
        return err
    })
    // Brand Products
     const BrandProduct = await API().get(Request.BrandProducts)
    .then(res=>{
        return res.data
    }).catch(err=>{
        return err
    })
    // Big Products
     const BigProduct = await API().get(Request.BigProducts)
    .then(res=>{
        return res.data
    }).catch(err=>{
        return err
    })
    // Latest Products
     const LatestProduct = await API().get(Request.LatestProducts)
    .then(res=>{
        return res.data
    }).catch(err=>{
        return err
    })
    // Trending Products
     const TrendingProduct = await API().get(Request.TrendingProducts)
    .then(res=>{
        return res.data
    }).catch(err=>{
        return err
    })
    
    const results={
        stores:stores.data,
        hotCollection: hotCollection.data,
        sliders: sliders.data,
        featuredCategories: featuredProduct.data,
        ourProducts:ourProd.data,
        brandProducts:BrandProduct.data,
        big:BigProduct.data,
        trending:TrendingProduct.data,
        latest:LatestProduct.data,
    }
    dispatch(fetchHomeProdsSuccess(results)) 
}