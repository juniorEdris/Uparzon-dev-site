import Axios from "axios";
import { DOMAIN } from "./WebDomain";
   

let BaseApi =  Axios.create({
    baseURL:DOMAIN,
})

export const API = () => {
    const authToken = localStorage.getItem('user_token')
    if(authToken){
        BaseApi.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;
    }
    return BaseApi
}

export const Request ={
    Stores:`api/uparzonweb/get_shop_list`,
    Sliders:`api/uparzonweb/get_home_sliders`,
    OurProducts:`api/uparzonweb/get_home_products?our_products=true&per_page=10`,
    HotCollection:`api/uparzonweb/get_home_products?hot=true&per_page=10`,
    BigProducts:`api/uparzonweb/get_home_products?big=true&per_page=10`,
    TrendingProducts:`api/uparzonweb/get_home_products?trending=true&per_page=10`,
    LatestProducts:`api/uparzonweb/get_home_products?latest=true&per_page=10`,
    FeaturedProducts:`api/uparzonweb/get_home_products?featured=true&per_page=6`,
    BrandProducts:`api/uparzonweb/get_home_products?sale=true`,
    ShopProducts:`api/uparzonweb/get_shop_products`,
    SearchAPI:`api/uparzonweb/search_products`,
    ProductDetails:`api/uparzonweb/get_product_details?product_id=`,
    Categories:`api/uparzonweb/get_categories`,
    SubCategory:`api/uparzonweb/get_categories?category_id=`,
    ChildCategory:`api/uparzonweb/get_categories?subcategory_id=`,
    LoginAPI:`https://demopartner.uparzon.com/api/partner/loginRequest?api_key=ge43z0vy480.1hbph09abb50.h7mkj2n6a790.29qzkkkdqqi0.k601sng5h`,
    SingleVendor:`api/uparzonweb/get_vendor_products`,
    // ProductSuggest:`api/uparzon_store/productsuggestions/`,
    AllShop:`api/uparzonweb/get_shop_list?per_page=20`,
    RegisterNumber:`https://demopartner.uparzon.com/api/partner/send-otp`,
    OTPRegister:`https://demopartner.uparzon.com/api/partner/check-otp?`,
    UserRegister:`https://demopartner.uparzon.com/api/partner/store/register`,
    Dashboard:`api/uparzonweb/get_userdetails`,
    PlaceOrder:`api/uparzonapp/make_order`,
} 