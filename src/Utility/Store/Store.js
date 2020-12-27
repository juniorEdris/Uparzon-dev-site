import {createStore,applyMiddleware ,combineReducers,compose} from 'redux'
import thunk from 'redux-thunk'
import { AddBasketReducer } from '../Redux/Reducer/BasketReducer';
import { CategoriesReducer } from '../Redux/Reducer/CategoriesReducer';
import { AddCompareReducer } from '../Redux/Reducer/CompareReducer';
import { HomeReducer } from '../Redux/Reducer/HomeReducer'
import { ProdSuggestionReducer } from '../Redux/Reducer/ProdSuggestionReducer';
import { ShopListReducer } from '../Redux/Reducer/ShopListReducer';
import { ShopReducer } from '../Redux/Reducer/ShopReducer';
import { VendorReducer } from '../Redux/Reducer/VendorReducer';
import { AddWishReducer } from '../Redux/Reducer/WishListReducer';

export const initialState={
    loading:true,
    homeStores:[],
    ourProduct:[],
    shopProduct:[],
    vendorProduct:[],
    shopList:[],
    categoryList:[],
    subCategory:[],
    suggestion:[],
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
        vendorProducts: VendorReducer,
        storeList: ShopListReducer,
        categories: CategoriesReducer,
        basketProd: AddBasketReducer,
        wishListProd: AddWishReducer,
        compareListProd: AddCompareReducer,
        productSuggest: ProdSuggestionReducer
    }),
    initialState,
    composeEnhancers(applyMiddleware(thunk))
)

export default store