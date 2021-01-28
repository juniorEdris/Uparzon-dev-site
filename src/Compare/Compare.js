import React,{useEffect} from 'react'
import Breadcrumb from '../PrimarySections/Breadcrumbs/Breadcrumb'
import useDocTitle from '../PrimarySections/CustomHooks/DocTitle'
import ScrollBar from '../PrimarySections/ScrollBar/ScrollBar'
import CompareBody from './pageComponents/CompareBody'

export default function Compare() {
    // Document Title Update
    useDocTitle('Product Comparison')
    return (
        <div>
            <Breadcrumb pageName={'Compare'} route={'/'} parent={'Home'}/>
            <CompareBody/>
            <ScrollBar/>
        </div>
    )
}
