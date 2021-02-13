import React,{useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Header from './PrimarySections/Header/Header'
import Home from './Home/HomeMainSection';
import Footer from './PrimarySections/Footer/Index';
import Blog from './Blog/Blog';
import Shop from './Shop/Shop';
import Contact from './Contact/Contact';
import Compare from './Compare/Compare';
import WishList from './WishList/WishList';
import Cart from './ProductCart/ProductCart';
import Checkout from './Checkout/Index';
import UserRegister from './MyAccount/UserRegister/UserRegister';
import OneTimePass from './MyAccount/OTP/OTP';
import Register from './MyAccount/RegisterNumber/NumberRegister';
import Login from './MyAccount/Login/Login';
import Details from './ProductDetails'
import './App.css';
import DashBoard from './MyAccount/DashBoard/Index';
import VendorPage from './Vendor/Index';
import ShopList from './Shop/ShopList/ShopList';
import {Loader, ProductLoader, StoreLoader} from './PrimarySections/ReactPlaceHolder/ReactPlaceHolder';
import { connect } from 'react-redux';
import { fetchHomeProds } from './Utility/Redux/Action/HomeProdAction';
import { fetchShopProds } from './Utility/Redux/Action/ShopProductAction';
import { FetchProductSuggetions } from './Utility/Redux/Action/ProdSuggestionAction';
import { fetchShopList } from './Utility/Redux/Action/ShopListAction';
import { fetchCategories } from './Utility/Redux/Action/CategoriesAction';
import SearchPage from './SearchPage/SearchPage';
import LoadAllData from './PrimarySections/CustomHooks/DataLoadingHooks';


function App(props) {

    useEffect(()=>{
      props.fetchStroes()
      props.fetchHotCollection()
      props.fetchOurProds()
      props.fetchBrandProd()
      // props.fetchShopProds()
      props.fetchProdSuggestions()
      props.fetchShopList()
      props.fetchCategory()
    },[])
    // LoadAllData()   
    
  return ( 
    <div className="app">
      <Router>
            <Header/>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path='/place'>
            <ProductLoader/>
          </Route>
          <Route path='/shop-list'>
            <ShopList/>
          </Route>
          <Route path='/vendor'>
            <VendorPage/>
          </Route>
          <Route path='/dashboard'>
            {props.user ? <DashBoard/> : <Redirect to="/" />}
          </Route>
          <Route path='/contact'>
            <Contact/>
          </Route>
          <Route path='/productdetails'>
            <Details/>
          </Route>
          <Route path='/blog'>
            <Blog/>
          </Route>
          <Route path='/shop'>
            <Shop/>
          </Route>
          <Route path='/compare'>
            <Compare/>
          </Route>
          <Route path='/wishlist'>
            <WishList/>
          </Route>
          <Route path='/cart'>
            <Cart/>
          </Route>
          <Route path='/checkout'>
            <Checkout/>
          </Route>
          <Route path='/onetimepassword'>
            <OneTimePass/>
          </Route>
          <Route path='/registerinfo'>
            {!props.user ? <UserRegister/> : <Redirect to="/dashboard" />}
          </Route>
          <Route path='/register'>
             {!props.user ? <Register/> : <Redirect to="/dashboard" />}
          </Route>
          <Route path='/search'>
            <SearchPage/>
          </Route>
          <Route path='/login'>
          {!props.user ? <Login/> : <Redirect to="/dashboard" />}  
          </Route>
          <Route exact path='*'>
            <h1>No Pages Found : ERROR 404</h1>
          </Route>
        </Switch>
            <Footer/>
      </Router>
     </div>
  );
}
const mapStateToProps= state=>(
  {
    user:state.Users.user
  }
)
const mapDispatchToProps = dispatch=>(
  {
    fetchHotCollection:()=>dispatch(fetchHomeProds()),
    fetchOurProds:()=> dispatch(fetchHomeProds()),
    fetchBrandProd:()=>dispatch(fetchHomeProds()),
    fetchStroes:()=>dispatch(fetchHomeProds()),
    fetchShopProds:()=>dispatch(fetchShopProds()),
    fetchProdSuggestions:()=>dispatch(FetchProductSuggetions()),
    fetchShopList:()=>dispatch(fetchShopList()),
    fetchCategory:()=>dispatch(fetchCategories())
  }
)
export default connect(mapStateToProps,mapDispatchToProps)(App);
