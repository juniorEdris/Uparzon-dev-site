import React,{useEffect,useState} from 'react'
import {  ProductDetails } from '../../PrimarySections/Connections/Axios'
import {Request} from '../../PrimarySections/Connections/APILink'
import Details from './SubFolder/Details'
import Slider from './SubFolder/ProductSlider'
import useQuery from '../../PrimarySections/Essentials/UrlParams'

export default function ProductDetailsWrap() {
  
  // getting id from URL
  const query = useQuery()
  const prodID = query.get('id')

  useEffect(() => {
    // get on top of the page after page loads
    (window).scrollTo(0,0)
    ProductDetails(Request.ProductDetails,prodID)
    .then(res=>setData(res.data))
  }, [prodID])

  const [data, setData] = useState([])
    return (
        <div className="product-details-main-wrapper pb-50">
  <div className="container-fluid">
    <div className="row">
        <Slider data={data}/>
        <Details data={data}/>
    </div>
  </div>
</div>

    )
}
