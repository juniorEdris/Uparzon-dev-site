import { ADD_TO_BASKET, REMOVE_FROM_BASKET } from "../Types";

const addProdBasket =(product)=>(
    {
        type: ADD_TO_BASKET,
        payload:{product},
    }
)
const removeProdBasket =(product)=>(
    {
        type: REMOVE_FROM_BASKET,
        payload:{product},
    }
)

export const AddBasketProd = (product) => (dispatch,getState) => {
    const cartItems = getState().basketProd.basket.slice()
    let exist=false;
        cartItems.forEach(x => {
            if (x.id===product.id) {
                exist = true
                x.count++
            }
        });
    if (!exist) {
            cartItems.push({...product,count:1})
        }
        dispatch(addProdBasket(cartItems))
    // dispatch({
    //     type: ADD_TO_BASKET,
    //     payload:{cartItems}
    // })
    localStorage.setItem('Cart List', JSON.stringify(cartItems))
}
export const RemoveBasketProd = (product) => (dispatch,getState) => {
    const cartItems = getState().basketProd.basket.slice().filter(x =>x.id !== product.id)
    dispatch( removeProdBasket(cartItems) )
    // dispatch({cartItems})
    localStorage.setItem('Cart List', JSON.stringify(cartItems))
}