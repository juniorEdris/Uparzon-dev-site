
export const initialState = {
  newCartProd:[],
  basket:localStorage.getItem('Cart List') ? JSON.parse(localStorage.getItem('Cart List')) :[],
  wishList:localStorage.getItem('Wish List') ? JSON.parse(localStorage.getItem('Wish List')) :[],
  compareList:localStorage.getItem('Compare List') ? JSON.parse(localStorage.getItem('Compare List')) :[],
  user:false,
  productView:localStorage.getItem('Product Id') ? JSON.parse(localStorage.getItem('Product Id')) :'',
  // shopId:localStorage.getItem('Shop Id') ? JSON.parse(localStorage.getItem('Shop Id')) :''
}

  export default function reducer (state,action){
      switch(action.type){
          case 'QUICK_VIEW' :
            const singleItem = action.payload
            return {
            ...state,
            quickView:singleItem,
            }
            case 'ADD_TO_CART': 
            console.log('countAction',action.count);
              return{
                ...state,
                basket:[...state.basket,action.payload],
                count:action.count
              }
            case 'VENDOR_PAGE':
              console.log('Vendor id',action.payload) 
              return{
                ...state,
                shopId:action.payload
              }
            case 'COMPARE_PRODUCTS':
              const  compareItem = action.payload 
              return{
                ...state,
                compareList:[...state.compareList,compareItem]
              }
            case 'ADD_TO_WISH_LIST':
              const  wishItem = action.payload 
              return{
                ...state,
                wishList:[...state.wishList,wishItem]
              }
            case 'PRODUCT_VIEW':
              return{
                ...state,
                productView:action.payload 
              }
            // case 'DELETE_FROM_CART':
            //   const  delwishItem = action.payload 
            //   return{
            //     ...state,
            //     wishList:[...state.wishList,delwishItem]
            //   }
              default:
                return {...state}
              }
            }


            