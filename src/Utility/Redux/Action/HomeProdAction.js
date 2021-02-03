import Axios from 'axios'
import { FETCH_PRODUCTS_ERROR, FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS } from '../Types'
import {Request} from '../../../PrimarySections/Connections/APILink'

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
        brandProduct:res.brandProducts,
    }
}



export const fetchHomeProds = ()=>async(dispatch)=>{
    dispatch(fetchHomeProdsRequest())
    // Home Stores
     const stores = await Axios.get(Request.Stores)
    .then(res=>{
        return res.data
    }).catch(err=>{
        return err.message
    })
    // Home Sliders
     const sliders = await Axios.get(Request.Sliders)
    .then(res=>{
        return res.data
    }).catch(err=>{
        return err.message
    })
    // Our Products
     const ourProd = await Axios.get(Request.OurProducts)
    .then(res=>{
        return res.data
    }).catch(err=>{
        return err
    })
    // Hot collections
     const hotCollection = await Axios.get(Request.HotCollection)
    .then(res=>{
        return res.data
    }).catch(err=>{
        return err
    })
    // Featured Products
     const featuredProduct = await Axios.get(Request.FeaturedProducts)
    .then(res=>{
        return res.data
    }).catch(err=>{
        return err
    })
    // Featured Products
     const BrandProduct = await Axios.get(Request.BrandProducts)
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
        brandProducts:BrandProduct.data
    }
    dispatch(fetchHomeProdsSuccess(results)) 
}