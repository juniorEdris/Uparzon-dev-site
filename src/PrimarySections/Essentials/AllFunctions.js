// Total Amount function 
export const getSubTotal = (basket) => basket?.reduce((amount, item) => item.price*item.quantity + amount,0)
export const getActiveCartProdSubTotal = (basket) => basket?.reduce((amount, item) => parseInt(item.price*item.qty_request_to_buy) + amount,0)
export const getActiveCartProdTotal = (basket) => basket?.reduce((amount, item) => parseInt(item.price*item.qty_request_to_buy) + parseInt(item.vendor_delivery.inside_deli_charge) + amount,0)
export const getfinalSubTotal = (basket) => basket?.reduce((amount, item) => parseInt(item.price*item.qty_request_to_buy) + amount,0)

// Short the alphabets
export const Truncate = (str,n) =>{
  return str?.length > n ? str.substr(0, n - 1): str;
}

// Check the image status

export function imageExists(image_url){

  var http = new XMLHttpRequest();

  http.open('HEAD', image_url, false);
  http.send();

  return http.status !== 404;

}