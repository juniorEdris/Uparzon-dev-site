import { ADD_TO_COMPARE, REMOVE_FROM_COMPARE } from "../Types";


const addProdCompare =(product)=>(
    {
        type: ADD_TO_COMPARE,
        payload:{product},
    }
)
const removeProdCompare =(product)=>(
    {
        type: REMOVE_FROM_COMPARE,
        payload:{product},
    }
)

export const AddCompareProd = (product) => (dispatch,getState) => {
    const compareItems = getState().compareListProd.compareList.slice()
    let exist=false;
        compareItems.forEach(x => {
            if (x.id===product.id) {
                exist = true
                return
            }
        });
    if (!exist) {
            compareItems.push({...product})
        }
        dispatch(addProdCompare(compareItems))
    localStorage.setItem('Compare List', JSON.stringify(compareItems))
}
export const RemoveCompareProd = (product) => (dispatch,getState) => {
    const compareItems = getState().compareListProd.compareList.slice().filter(x =>x.id !== product.id)
    dispatch( removeProdCompare(compareItems) )
    localStorage.setItem('Compare List', JSON.stringify(compareItems))
}