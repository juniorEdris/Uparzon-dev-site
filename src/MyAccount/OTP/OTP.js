import React from 'react'
import Body from './pageComponents/OTPBody'
import ScrollBar from '../../PrimarySections/ScrollBar/ScrollBar'
import  Breadcrumb  from '../../PrimarySections/Breadcrumbs/Breadcrumb'
import useDocTitle from '../../PrimarySections/CustomHooks/DocTitle'

export default function OTP() {
     // Document Title Update
     useDocTitle('Register')
    return (
        <div>
            <Breadcrumb pageName={'OTP'} route={'/register'} parent={'Register'}/>
            <Body/>
            <ScrollBar/>
        </div>
    )
}
