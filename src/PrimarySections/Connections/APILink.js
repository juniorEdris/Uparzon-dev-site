// export const Request ={
//     AllProducts:'/api/uparzon_store_react/get_hotcollection_products',
//     HomeBanner: `/api/uparzon_store_react/get_featuredbanners`,
//     HomeStores:`/api/uparzon_store_react/homestores`,
//     ComputerProducts:'/api/uparzon_store_react/get_computer_products',
//     ShopProducts:`/api/uparzon_store_react/get_shop_products`,
//     Categories:`/api/uparzon_store_react/get_homefeaturedcategories`,
//     StorePage1:`/api/uparzon_store_react/get_shops_list_page=1`,
//     StorePage2:`---------`,
//     VendorProducts:`/api/uparzon_store_react/vendorproducts`,
//     VendorDetails:`/api/uparzon_store_react/vendordetails`,
//     ProductDetails:`/api/uparzon_store_react/productetails/`,
//     SubCategory:`/api/uparzon_store_react/get_subcategories`,
// }
// export const Request ={
//     Homepage:'api/uparzon_store/home_page',
//     Categories:`https://demostore.uparzon.com/api/uparzonapp/get_categories?api_key=4e38d8be3269aa17280d0468b89caa4c7d39a699&is_store=1`,
//     HomeStores:`https://demostore.uparzon.com/api/uparzonapp/get_shop_list?api_key=4e38d8be3269aa17280d0468b89caa4c7d39a699`,
//     ShopPage1:`api/uparzon_store/shop_page?page=1`,
//     StorePage1:`https://demostore.uparzon.com/api/uparzonapp/get_shop_list?api_key=4e38d8be3269aa17280d0468b89caa4c7d39a699&page=1`,
//     StorePage2:`https://demostore.uparzon.com/api/uparzonapp/get_shop_list?api_key=4e38d8be3269aa17280d0468b89caa4c7d39a699`,
//     VendorProducts:`https://demostore.uparzon.com/api/uparzonbusiness/get_products?api_key=4e38d8be3269aa17280d0468b89caa4c7d39a699&user_id=`,
//     ProductDetails:`api/uparzon_store/single_product_details/`,
//     SubCategory:`https://demostore.uparzon.com/api/uparzonapp/get_categories?api_key=4e38d8be3269aa17280d0468b89caa4c7d39a699&subcategory_id=53&is_store=1`,
//     ProductSuggest:`api/uparzon_store/productsuggestions/`,
//     AllVendors:`api/uparzon_store/allvendors`,
// }

import Axios from "axios";
import { DOMAIN } from "./WebDomain";
const APIKEY = '4e38d8be3269aa17280d0468b89caa4c7d39a699'

export const axios =  Axios.create({
    baseURL:DOMAIN,
  })
  const authToken = localStorage.getItem('user_token')

  if(authToken){
      console.log('true');
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
}