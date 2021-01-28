import React,{useEffect,useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
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
import Register from './MyAccount/Register/Register';
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
import SearchPage from './SearchPage/SearchPage';


function App(props) {
  const [show,setShow] = useState(false)
    useEffect(()=>{
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
              setShow(true)
            }else {
                setShow(false)
            }
        })
        return ()=>{
            window.removeEventListener('scroll',()=>{})
        }
    },[])
    useEffect(()=>{
      props.fetchStroes()
      props.fetchHotCollection()
      props.fetchOurProds()
      props.fetchBrandProd()
      props.fetchShopProds()
      props.fetchProdSuggestions()
      props.fetchShopList()
    },[])   
    
  return ( 
    <div className="app">
      <Router>
            <Header/>
        <Switch>
          <Route path='/place'>
            <StoreLoader/>
          </Route>
          <Route path='/shop-list'>
            <ShopList/>
          </Route>
          <Route path='/vendor'>
            <VendorPage/>
          </Route>
          <Route path='/dashboard'>
            <DashBoard/>
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
          <Route path='/register'>
            <Register/>
          </Route>
          <Route path='/search'>
            <SearchPage/>
          </Route>
          <Route path='/login'>
            <Login/>
          </Route>
          <Route path='/'>
            <Home show={show}/>
          </Route>
        </Switch>
            <Footer/>
      </Router>
     </div>
  );
}

const mapDispatchToProps = dispatch=>(
  {
    fetchHotCollection:()=>dispatch(fetchHomeProds()),
    fetchOurProds:()=> dispatch(fetchHomeProds()),
    fetchBrandProd:()=>dispatch(fetchHomeProds()),
    fetchStroes:()=>dispatch(fetchHomeProds()),
    fetchShopProds:()=>dispatch(fetchShopProds()),
    fetchProdSuggestions:()=>dispatch(FetchProductSuggetions()),
    fetchShopList:()=>dispatch(fetchShopList())
  }
)
export default connect(state=>({}),mapDispatchToProps)(App);
