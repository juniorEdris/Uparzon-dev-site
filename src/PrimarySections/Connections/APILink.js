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

import { DOMAIN } from "./WebDomain";
const APIKEY = '4e38d8be3269aa17280d0468b89caa4c7d39a699'

export const Request ={
    Sliders:`${DOMAIN}api/uparzonweb/get_home_sliders`,
    HotCollection:`${DOMAIN}api/uparzonweb/get_hot_products?api_key=${APIKEY}`,
    FeaturedCategory:`${DOMAIN}api/uparzonweb/get_feature_products`,
    SearchAPI:`${DOMAIN}api/uparzonweb/search_products?keyword=`,
    ProductDetails:`${DOMAIN}api/uparzonweb/get_product_details?product_id=`,
}