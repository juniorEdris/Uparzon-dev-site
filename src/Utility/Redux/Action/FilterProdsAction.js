import { FILTER_PRODUCTS_BY_PRICE, FILTER_PRODUCTS_BY_SIZE, SHOW_PRODUCTS_BY_NUMBER } from "../Types"

const filterProductsBySize = (product,size) => {
    return {
        type: FILTER_PRODUCTS_BY_SIZE,
        shopProduct: size==="" ? product:product.filter(x=> x.size.indexOf(size)>=0),
        size,
    }
}
const limitProducts = (product,limit) => {
    return {
        type: SHOW_PRODUCTS_BY_NUMBER,
        product,
        limit,
    }
}
const SortProductsByPrice = (product,price) => {
    return {
        type: FILTER_PRODUCTS_BY_PRICE,
        product,
        price,
    }
}
 
export const FilterProducts = (products, size) => (dispatch) => {
    dispatch(filterProductsBySize(products,size))
}
export const limitedProducts = (products, count,initial) => (dispatch) => {
    console.log('limit action',products,count,initial);
    let slicedProds 
        if(count === 5){
            slicedProds = products.slice(0,count)
            console.log('count',count,slicedProds);
        }else if(count === 10){
            slicedProds= products.slice(0,count)
            console.log('count',count,slicedProds);
        }else if(count === 15){
            slicedProds= products.slice(0,count)
            console.log('count',count,slicedProds);
        }else if(count === 20){
            slicedProds= products.slice(0,count)
        }else if(count === 0){
            return slicedProds = products.slice(0,count)
        }
    dispatch(limitProducts(slicedProds,count))
}
export const priceRangeProducts = (products, count) => (dispatch) => {
    console.log('between action',products,count);
    let slicedProds 
    let slicedProdstwo 
            // slicedProds = products.slice(count[0],count[1])
            slicedProds = products.filter(person => person.price < count[1])
            slicedProdstwo = products.filter((person,i,arr) => {
                console.log('>>>>>',i,arr);
               return person.price > count[0]
            })

            console.log('values',count,slicedProds,slicedProdstwo);
    // dispatch(limitProducts(slicedProds,count))
}
 
export const sortProdsByPrice = (products, sort) => dispatch => {
    const sortedProds = products.slice()
        if(sort === 'lowestPrice'){
            sortedProds.sort((a,b)=>(a.price > b.price ? 1:-1))
        }else if(sort === 'highestPrice'){
            sortedProds.sort((a,b)=>(a.price < b.price ? 1:-1))
        }else{
            sortedProds.sort((a,b)=>(a.id > b.id ? 1:-1))
        }
        dispatch(SortProductsByPrice(sortedProds,sort))
}
