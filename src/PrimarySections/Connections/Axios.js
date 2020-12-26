import axios from 'axios'

// Fetch All product
export const FetchData = async (url)=>{

const data = await axios.get(url)
 .then(res=>res.data)
 .catch(err=>err)
return data
}

// Fetch Product deails
export const ProductDetails = async (url,id)=>{
    const data = await axios.post(`${url}${id}`)
     .then(res=>res.data)
     .catch(err=>err)
    return data
    }
// Fetch single  vendor Product 
export const ShopDetails = async (url,id)=>{
    console.log('Axios',url,id);
    const data = await axios.get(`${url}${id}`)
     .then(res=>res.data)
     .catch(err=>err)
     console.log(data);
    return data
    }