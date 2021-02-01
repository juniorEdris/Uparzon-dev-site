import { PRODUCT_ADD_CLEAR,PRODUCT_ADD, PRODUCT_ADD_FINISH } from "../Types";

const productAddClear = ()=>(
    {
        type: PRODUCT_ADD_CLEAR,
        payload:false,
    }
)
const productAddStart = (tab)=>(
    {
        type: PRODUCT_ADD,
        tab,
        payload:true,
    }
)
const productAddFinish = ()=>(
    {
        type: PRODUCT_ADD_FINISH,
        payload:false,
    }
)

export const productAddAnimation=(tab)=>dispatch=>{
    // dispatch(productAddClear())
    dispatch(productAddStart(tab))
    setTimeout(() => {
        dispatch(productAddFinish())
    }, 3000);
}