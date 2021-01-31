import {useEffect} from 'react'
import { connect } from 'react-redux';
import { fetchHomeProds } from '../../Utility/Redux/Action/HomeProdAction';
import { FetchProductSuggetions } from '../../Utility/Redux/Action/ProdSuggestionAction';
import { fetchShopList } from '../../Utility/Redux/Action/ShopListAction';
import { fetchShopProds } from '../../Utility/Redux/Action/ShopProductAction';

const LoadAllData = (props)=>{
    useEffect(() => {
        props.fetchStroes()
        props.fetchHotCollection()
        props.fetchOurProds()
        props.fetchBrandProd()
        props.fetchShopProds()
        props.fetchProdSuggestions()
        props.fetchShopList()
    }, [])
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
  export default connect(state=>({}),mapDispatchToProps)(LoadAllData);