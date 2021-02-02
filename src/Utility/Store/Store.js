import {createStore,applyMiddleware ,combineReducers,compose} from 'redux'
import thunk from 'redux-thunk'
import { AddBasketReducer } from '../Redux/Reducer/BasketReducer';
import { CategoriesReducer } from '../Redux/Reducer/CategoriesReducer';
import { childCategoryReducer } from '../Redux/Reducer/ChildCategoryReducer';
import { AddCompareReducer } from '../Redux/Reducer/CompareReducer';
import { HomeReducer } from '../Redux/Reducer/HomeReducer'
import { ProdSuggestionReducer } from '../Redux/Reducer/ProdSuggestionReducer';
import { CartAnimationReducer } from '../Redux/Reducer/ProductAddedReducer';
import { ProductDetailsReducer } from '../Redux/Reducer/ProductsDetailsReducer';
import { QuickViewReducer } from '../Redux/Reducer/QuickViewReducer';
import { SearchReducer } from '../Redux/Reducer/SearchReducer';
import { ShopListReducer } from '../Redux/Reducer/ShopListReducer';
import { ShopReducer } from '../Redux/Reducer/ShopReducer';
import { SignUpReducer } from '../Redux/Reducer/SignUpReducer';
import { subcategoryReducer } from '../Redux/Reducer/SubCategoryReducer';
import { UserReducer } from '../Redux/Reducer/UserReducer';
import { VendorDetailsReducer, VendorReducer } from '../Redux/Reducer/VendorReducer';
import { AddWishReducer } from '../Redux/Reducer/WishListReducer';

export const initialState={
    loading:true,
    homeSliders:[],
    homeStores:[],
    ourProduct:[],
    featuredProduct:[],
    hotCollection:[],
    shopProduct:[],
    vendorProduct:[],
    vendorDetail:[],
    shopList:[],
    categoryList:[],
    subCategoryList:[],
    childCategoryList:[],
    suggestion:[],
    searchedResponse:[],
    product:'',
    basket:localStorage.getItem('Cart List') ? JSON.parse(localStorage.getItem('Cart List')) :[],
    wishList:localStorage.getItem('Wish List') ? JSON.parse(localStorage.getItem('Wish List')) :[],
    compareList:localStorage.getItem('Compare List') ? JSON.parse(localStorage.getItem('Compare List')) :[],
    error:'',
    user:localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
    productAdded:false,
    tab:'', //connected to the addition animation
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    combineReducers({
        homeProducts: HomeReducer,
        shopProducts: ShopReducer,
        vendorDetails: VendorDetailsReducer,
        vendorProducts: VendorReducer,
        storeList: ShopListReducer,
        basketProd: AddBasketReducer,
        wishListProd: AddWishReducer,
        compareListProd: AddCompareReducer,
        productSuggest: ProdSuggestionReducer,
        productView: QuickViewReducer,
        categories: CategoriesReducer,
        subCategories: subcategoryReducer,
        childCategories: childCategoryReducer,
        productDetails: ProductDetailsReducer,
        signUp: SignUpReducer,
        SearchEngine: SearchReducer,
        Users: UserReducer,
        CartAnimation: CartAnimationReducer,
    }),
    initialState,
    composeEnhancers(applyMiddleware(thunk))
)

export default store