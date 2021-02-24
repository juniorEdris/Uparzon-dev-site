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
    // return action if its null
    if(product === null) return;
    const cartItems = getState().basketProd.basket.slice()
    let exist=false;
        cartItems.forEach(x => {
            if(x.quantity === product.stock){
                return
            }
            if (x.id===product.id) {
                exist = true
                x.quantity++
            }
        });
    if (!exist) {
            cartItems.push({...product,quantity:1})
        }
        dispatch(addProdBasket(cartItems))
        localStorage.setItem('Cart List', JSON.stringify(cartItems))
}

export const RemoveBasketProd = (product) => (dispatch,getState) => {

    const cartItems = getState().basketProd.basket.slice().filter(x =>x.id !== product.id)
    dispatch( removeProdBasket(cartItems) )
    localStorage.setItem('Cart List', JSON.stringify(cartItems))
}
export const RemoveSingleBasketProd = (product) => (dispatch,getState) => {
    console.log('removesingleproduct', product);
    let cartItems = getState().basketProd.basket.slice()
    let exist=false;
    cartItems.forEach(x => {
        if (x.id===product.products.id && product.quantity > 1) {
            exist = true
            x.quantity--
        }
    });
    if (!exist) {
        cartItems = getState().basketProd.basket.slice().filter(x =>x.id !== product.products.id)
    }
    dispatch( removeProdBasket(cartItems) )
    localStorage.setItem('Cart List', JSON.stringify(cartItems))
}
export const RemoveSingleHeaderProd = (product) => (dispatch,getState) => {
    console.log('removesingleproduct header');
    let cartItems = getState().basketProd.basket.slice()
    let exist=false;
    cartItems.forEach(x => {
        if (x.id===product.id && product.quantity > 1) {
            exist = true
            x.quantity--
        }
    });
    if (!exist) {
        cartItems = getState().basketProd.basket.slice().filter(x =>x.id !== product.id)
        }
    dispatch( removeProdBasket(cartItems) )
    localStorage.setItem('Cart List', JSON.stringify(cartItems))
}