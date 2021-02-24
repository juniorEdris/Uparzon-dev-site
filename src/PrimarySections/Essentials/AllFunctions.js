// Total Amount function 
export const getSubTotal = (basket) => basket?.reduce((amount, item) => item.price*item.count + amount,0)

// Short the alphabets
export const Truncate = (str,n) =>{
  return str?.length > n ? str.substr(0, n - 1): str;
}