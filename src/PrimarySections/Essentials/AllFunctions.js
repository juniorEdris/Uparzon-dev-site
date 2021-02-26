// Total Amount function 
export const getSubTotal = (basket) => basket?.reduce((amount, item) => item.price*item.quantity + amount,0)
export const getActiveCartProdTotal = (basket) => basket?.reduce((amount, item) => parseInt(item.products.price*item.quantity) + parseInt(item.vendor_delivery.inside_deli_charge) + amount,0)
export const getfinalSubTotal = (basket) => basket?.reduce((amount, item) => parseInt(item.products.price*item.quantity) + amount,0)

// Short the alphabets
export const Truncate = (str,n) =>{
  return str?.length > n ? str.substr(0, n - 1): str;
}