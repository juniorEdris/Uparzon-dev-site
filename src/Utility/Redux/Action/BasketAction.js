import { ADD_TO_BASKET } from "../Types";

const addProdBasket =(product)=>(
    {
        type: ADD_TO_BASKET,
        product,
    }
)

export const AddBasketProd = (prod)=>dispatch=>{
    dispatch(addProdBasket(prod))
}