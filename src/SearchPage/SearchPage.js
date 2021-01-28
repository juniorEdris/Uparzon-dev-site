import React,{useEffect,useState} from 'react'
import Breadcrumb from '../PrimarySections/Breadcrumbs/Breadcrumb'
import CartIcon from '../PrimarySections/CartIcon.js/CartIcon'
import useDocTitle from '../PrimarySections/CustomHooks/DocTitle'
import ModalSection from '../PrimarySections/Modal/ModalSection'
import ScrollBar from '../PrimarySections/ScrollBar/ScrollBar'
import SearchWrapper from './PageComponent/SearchWrapper'


function SearchPage() {
    const [show,setShow] = useState(false)
    useEffect(()=>{
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
    // Document Title Update
    useDocTitle('Search product')
    return (
        <div>
            <Breadcrumb pageName={'Search products'} route={'/'} parent={'Home'}/>
            <SearchWrapper/>
            <ScrollBar/>
            {show && <CartIcon />}
            <ModalSection/>
        </div>
    )
}

export default SearchPage
