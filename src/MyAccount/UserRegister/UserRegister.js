import React from 'react'
import Body from './pageComponents/Body'
import ScrollBar from '../../PrimarySections/ScrollBar/ScrollBar'
import  Breadcrumb  from '../../PrimarySections/Breadcrumbs/Breadcrumb'
import useDocTitle from '../../PrimarySections/CustomHooks/DocTitle'

export default function Register() {
     // Document Title Update
     useDocTitle('Register')
    return (
        <div>
            <Breadcrumb pageName={'Register'} route={'/home'} parent={'Home'}/>
            <Body/>
            <ScrollBar/>
        </div>
    )
}
