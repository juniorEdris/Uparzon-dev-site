import { REMOVE_QUICK_DES, SHOW_QUICK_DES } from "../Types";

const addProdShow =(product)=>(
    {
        type: SHOW_QUICK_DES,
        payload:{product},
    }
)
const removeProdShow =(product)=>(
    {
        type: REMOVE_QUICK_DES,
        payload:{product},
    }
)

export const ShowQuickDes = (product) => (dispatch) => {
    dispatch( addProdShow(product) )
}