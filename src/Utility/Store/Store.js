import {createStore,applyMiddleware ,combineReducers,compose} from 'redux'
import thunk from 'redux-thunk'
import { AddBasketReducer } from '../Redux/Reducer/BasketReducer';
import { CategoriesReducer } from '../Redux/Reducer/CategoriesReducer';
import { AddCompareReducer } from '../Redux/Reducer/CompareReducer';
import { HomeReducer } from '../Redux/Reducer/HomeReducer'
import { ProdSuggestionReducer } from '../Redux/Reducer/ProdSuggestionReducer';
import { ProductDetailsReducer } from '../Redux/Reducer/ProductsDetailsReducer';
import { QuickViewReducer } from '../Redux/Reducer/QuickViewReducer';
import { ShopListReducer } from '../Redux/Reducer/ShopListReducer';
import { ShopReducer } from '../Redux/Reducer/ShopReducer';
import { subcategoryReducer } from '../Redux/Reducer/SubCategoryReducer';
import { VendorDetailsReducer, VendorReducer } from '../Redux/Reducer/VendorReducer';
import { AddWishReducer } from '../Redux/Reducer/WishListReducer';

export const initialState={
    loading:true,
    homeBanner:[],
    homeStores:[],
    ourProduct:[],
    shopProduct:[],
    vendorProduct:[],
    vendorDetail:[],
    shopList:[],
    categoryList:[],
    subCategory:[],
    suggestion:[],
    product:'',
    basket:localStorage.getItem('Cart List') ? JSON.parse(localStorage.getItem('Cart List')) :[],
    wishList:localStorage.getItem('Wish List') ? JSON.parse(localStorage.getItem('Wish List')) :[],
    compareList:localStorage.getItem('Compare List') ? JSON.parse(localStorage.getItem('Compare List')) :[],
    error:'',
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    combineReducers({
        homeProducts: HomeReducer,
        shopProducts: ShopReducer,
        vendorDetails: VendorDetailsReducer,
        vendorProducts: VendorReducer,
        storeList: ShopListReducer,
        categories: CategoriesReducer,
        basketProd: AddBasketReducer,
        wishListProd: AddWishReducer,
        compareListProd: AddCompareReducer,
        productSuggest: ProdSuggestionReducer,
        productView: QuickViewReducer,
        getSubCat: subcategoryReducer,
        productDetails: ProductDetailsReducer,
    }),
    initialState,
    composeEnhancers(applyMiddleware(thunk))
)

export default store