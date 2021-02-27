import { ADD_TO_CHECKOUT,} from "../Types";

const FinalCart =(products)=>{
    return{
        type: ADD_TO_CHECKOUT,
        products,
    }
}

export const AddFinalProd = (product) => (dispatch,getState) => {
    const finalProd = getState().FinalCart.finalCart.slice()
    let exist = false
    finalProd.forEach(x => {
        if (x.products.id===product.products.id) {
            exist = true
            return
        }
    });
    if (!exist) {
        finalProd.push(product)
    }
    dispatch(FinalCart(finalProd))
}
export const RemoveFinalProd = (product) => (dispatch, getState) => {
    let final
    if (!product) {
        final = []
    } else {
        const finalProd = getState().FinalCart.finalCart.slice()
        final = finalProd.filter(x=>x.products.id !== product.products.id)
    }
    dispatch(FinalCart(final))
}

