import {useEffect} from 'react'

const useDocTitle =(page)=>{
    useEffect(()=>{
        document.title = page ? `${page} | Uparzon Ecommerce Online Shop`: `Uparzon Ecommerce Online Shop`
    },[page])
}

export default useDocTitle