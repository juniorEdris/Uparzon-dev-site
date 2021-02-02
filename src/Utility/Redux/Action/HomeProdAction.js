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
        // category:res.categories,
        slider:res.sliders,
        // store:res.store,
        ourProduct:res.ourProducts,
        hotCollection: res.hotCollection,
        featuredProduct:res.featuredCategories,
    }
}



export const fetchHomeProds = ()=>async(dispatch)=>{
    dispatch(fetchHomeProdsRequest())
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
    
    const results={
        hotCollection: hotCollection.data,
        sliders: sliders.data,
        featuredCategories: featuredProduct.data,
        ourProducts:ourProd.data,
    }
    dispatch(fetchHomeProdsSuccess(results)) 
}