import React from 'react'
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
import './Home.css'
import Store from './pageComponents/StoreSection'
import useDocTitle from '../PrimarySections/CustomHooks/DocTitle'
import CartAnimation from '../PrimarySections/CartAddAnime/CartAddanime'
import { connect } from 'react-redux'




 function HomeMainSection(props) {    
    // Document Title Update
    useDocTitle('Home')
    
    return (
        <div style={{position:'relative'}}>
            <CartAnimation/>
            <HomeSlider/>
            <Store/>
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
        </div>
    )
}

export default connect(state=>({ cartState:state.CartAnimation.productAdded}))(HomeMainSection)