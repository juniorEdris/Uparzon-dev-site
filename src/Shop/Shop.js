import React,{useEffect,useState} from 'react'
import { connect } from 'react-redux'
import Breadcrumb from '../PrimarySections/Breadcrumbs/Breadcrumb'
import CartAnimation from '../PrimarySections/CartAddAnime/CartAddanime'
import CartIcon from '../PrimarySections/CartIcon.js/CartIcon'
import useDocTitle from '../PrimarySections/CustomHooks/DocTitle'
import ModalSection from '../PrimarySections/Modal/ModalSection'
import ScrollBar from '../PrimarySections/ScrollBar/ScrollBar'
import ShopWrapper from './pageComponents/ShopWrapper'

 function Shop(props) {

    // const [show,setShow] = useState(false)
    // useEffect(()=>{
    //     window.addEventListener('scroll', () => {
    //         if (window.scrollY > 300) {
    //           setShow(true)
    //         }else {
    //             setShow(false)
    //         }
    //     })
    //     return ()=>{
    //         window.removeEventListener('scroll',()=>{})
    //     }
    // },[])
    // Document Title Update
    useDocTitle('Shop')
    return (
        <div>
            <Breadcrumb pageName={'Shop'} route={'/'} parent={'Home'}/>
            <ShopWrapper/>
            <ScrollBar/>
            {/* {show && <CartIcon />} */}
            <ModalSection/>
            <CartAnimation/>
        </div>
    )
}

export default connect(state=>({ cartState:state.CartAnimation.productAdded}))(Shop)