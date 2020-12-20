import {createStore,applyMiddleware ,combineReducers,compose} from 'redux'
import thunk from 'redux-thunk'
import { HomeReducer } from '../Redux/Reducer/HomeReducer'
import { ShopListReducer } from '../Redux/Reducer/ShopListReducer';
import { ShopReducer } from '../Redux/Reducer/ShopReducer';
import { VendorReducer } from '../Redux/Reducer/VendorReducer';

export const initialState={
    loading:true,
    homeStores:[],
    ourProduct:[],
    shopProduct:[],
    vendorProduct:[],
    shopList:[],
    error:'',
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    combineReducers({
        homeProducts: HomeReducer,
        shopProducts: ShopReducer,
        vendorProducts: VendorReducer,
        storeList: ShopListReducer,
    }),
    initialState,
    composeEnhancers(applyMiddleware(thunk))
)

export default store