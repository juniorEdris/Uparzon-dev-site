import Axios from 'axios'
import { FETCH_PRODUCTS_ERROR, FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS } from '../Types'
import {Request} from '../../../PrimarySections/Connections/APILink'

const fetchHomeProdsRequest = ()=>{
    return{
        type: FETCH_PRODUCTS_REQUEST,
    }
}
const fetchHomeProdsSuccess = (htcollection,slider)=>{
    return{
        type: FETCH_PRODUCTS_SUCCESS,
        // category:res.categories,
        slider:slider.data,
        // store:res.store,
        // ourProduct:res.ourProducts,
        hotCollection:htcollection.data,
        // featuredProduct:res.featuredProducts,
    }
}
const fetchHomeProdsError = (error)=>{
    return{
        type: FETCH_PRODUCTS_ERROR,
        error,
    }
}


export const fetchHomeProds = ()=>async(dispatch)=>{
    dispatch(fetchHomeProdsRequest())
     const sliders = await Axios.get(Request.Sliders)
    .then(res=>{
        console.log('banner',res)
        return res.data
    }).catch(err=>{
        console.log('====================================');
        console.log(err);
        console.log('====================================');
        dispatch(fetchHomeProdsError(err))  
    })
     const hotCollection = await Axios.get(Request.HotCollection)
    .then(res=>{
        console.log('hotCollection',res)
        return res.data
    }).catch(err=>{
        dispatch(fetchHomeProdsError(err))  
    })
    dispatch(fetchHomeProdsSuccess(hotCollection,sliders))  

    // await Axios.get(Request.Homepage)
    //     .then(res=>{
    //         dispatch(fetchHomeProdsSuccess(res))  
    //     }).catch(err=>{
    //         dispatch(fetchHomeProdsError(err))  
    //     })
}