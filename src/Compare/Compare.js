import React,{useEffect} from 'react'
import Breadcrumb from '../PrimarySections/Breadcrumbs/Breadcrumb'
import ScrollBar from '../PrimarySections/ScrollBar/ScrollBar'
import CompareBody from './pageComponents/CompareBody'

export default function Compare() {
    useEffect(() => {
        document.title = 'Compare Products | Uparzon E-commerce Site'
    }, [])
    return (
        <div>
            <Breadcrumb pageName={'Compare'} route={'/'} parent={'Home'}/>
            <CompareBody/>
            <ScrollBar/>
        </div>
    )
}
