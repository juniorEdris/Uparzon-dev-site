import {createStore,applyMiddleware ,combineReducers,compose} from 'redux'
import thunk from 'redux-thunk'
import { HomeReducer } from '../Redux/Reducer/HomeReducer'

export const initialState={
    loading:true,
    homeStores:[],
    ourProduct:[],
    ProdDetails:{},
    error:'',
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    combineReducers({
        homeProducts: HomeReducer,
    }),
    initialState,
    composeEnhancers(applyMiddleware(thunk))
)

export default store