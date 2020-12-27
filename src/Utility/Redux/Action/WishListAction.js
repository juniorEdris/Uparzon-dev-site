import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from "../Types";

const addProdWish =(product)=>(
    {
        type: ADD_TO_WISHLIST,
        payload:{product},
    }
)
const removeProdWish =(product)=>(
    {
        type: REMOVE_FROM_WISHLIST,
        payload:{product},
    }
)

export const AddWishProd = (product) => (dispatch,getState) => {
    const wishItems = getState().wishListProd.wishList.slice()
    let exist=false;
        wishItems.forEach(x => {
            if (x.id===product.id) {
                exist = true
                return
            }
        });
    if (!exist) {
            wishItems.push({...product})//,count:1
        }
        dispatch(addProdWish(wishItems))
    localStorage.setItem('Wish List', JSON.stringify(wishItems))
}
export const RemoveWishProd = (product) => (dispatch,getState) => {
    const wishItems = getState().wishListProd.wishList.slice().filter(x =>x.id !== product.id)
    dispatch( removeProdWish(wishItems) )
    localStorage.setItem('Wish List', JSON.stringify(wishItems))
}