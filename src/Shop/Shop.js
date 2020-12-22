import React,{useEffect,useState} from 'react'
import Breadcrumb from '../PrimarySections/Breadcrumbs/Breadcrumb'
import CartIcon from '../PrimarySections/CartIcon.js/CartIcon'
import ModalSection from '../PrimarySections/Modal/ModalSection'
import ScrollBar from '../PrimarySections/ScrollBar/ScrollBar'
import { useStateValue } from '../Utility/StateProvider'
import ShopWrapper from './pageComponents/ShopWrapper'

export default function Shop() {

    const [show,setShow] = useState(false)
    const [{quickView}] = useStateValue()
    useEffect(()=>{
        document.title = "Shop | Uparzon Ecommerce Online Shop"
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
              setShow(true)
            }else {
                setShow(false)
            }
        })
        return ()=>{
            window.removeEventListener('scroll',()=>{})
        }
    },[])
    return (
        <div>
            <Breadcrumb pageName={'Shop'} route={'/'} parent={'Home'}/>
            <ShopWrapper/>
            <ScrollBar/>
            {show && <CartIcon />}
            <ModalSection product={quickView}/>
        </div>
    )
}
