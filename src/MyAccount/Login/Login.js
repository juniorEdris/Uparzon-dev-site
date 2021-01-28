import React from 'react'
import Body from './pageComponents/LoginBody'
import ScrollBar from '../../PrimarySections/ScrollBar/ScrollBar'
import  Breadcrumbs  from '../../PrimarySections/Breadcrumbs/Breadcrumb'
import useDocTitle from '../../PrimarySections/CustomHooks/DocTitle'


export default function Login() {
     // Document Title Update
     useDocTitle('Login')
    return (
        <div>
            <Breadcrumbs pageName={'Login'} route={'/home'} parent={'Home'}/>
            <Body/>
            <ScrollBar/>
        </div>
    )
}
