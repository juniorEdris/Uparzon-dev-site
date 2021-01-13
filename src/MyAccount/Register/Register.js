import React,{useEffect} from 'react'
import Body from './pageComponents/RegisterBody'
import ScrollBar from '../../PrimarySections/ScrollBar/ScrollBar'
import  Breadcrumb  from '../../PrimarySections/Breadcrumbs/Breadcrumb'

export default function Register() {
    useEffect(() => {
        document.title = `Register | Uparzon e-commerce site`
    }, [])
    return (
        <div>
            <Breadcrumb pageName={'Register'} route={'/home'} parent={'Home'}/>
            <Body/>
            <ScrollBar/>
        </div>
    )
}
