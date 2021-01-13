import React,{useEffect} from 'react'
import HomeSlider from './pageComponents/HomeSlider'
import FeatureArea from './pageComponents/FeatureArea'
import OurProduct from './pageComponents/OurProduct'
import HomeBanner from './pageComponents/HomeBanner'
import FeaturedCategory from './pageComponents/FeaturedCategory'
import HotCollection from './pageComponents/HotCollection'
import StaticsBanner from './pageComponents/StaticsBanner'
import ElectronicsArea from './pageComponents/ElectronicsArea';
import HeadphonesAccessories from './pageComponents/HeadphonesAccessories';
import BusinessAndOffice from './pageComponents/BusinessAndOffice';
import WideBanner from './pageComponents/LongBanner'
import BrandArea from './pageComponents/BrandArea';
import ScrollBar from '../PrimarySections/ScrollBar/ScrollBar'
import CartIcon from '../PrimarySections/CartIcon.js/CartIcon'
import './Home.css'
import Store from './pageComponents/StoreSection'




export default function HomeMainSection({show}) {

    useEffect(()=>{
        document.title = "Home | Uparzon Ecommerce Online Shop" 
    },[])


    return (
        <div>
            <HomeSlider/>
            {/* <Store/> */}
            <OurProduct/>
            <HomeBanner/>
            <FeaturedCategory/>
            <HotCollection/>
            <StaticsBanner/>
            <ElectronicsArea/>
            <HeadphonesAccessories/>
            <BusinessAndOffice/>
            <WideBanner/>
            <BrandArea/>
            <FeatureArea/>
            <ScrollBar/>
            {show && <CartIcon/>}
        </div>
    )
}
