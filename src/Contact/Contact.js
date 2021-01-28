import React from 'react'
import useDocTitle from '../PrimarySections/CustomHooks/DocTitle'
import ScrollBar from '../PrimarySections/ScrollBar/ScrollBar'
import ContactBreadCrumbs from './pageComponents/ContactBreadcrumbs'
import ContactDetails from './pageComponents/ContactDetails'
import ContactForm from './pageComponents/ContactForm'

export default function Contact() {
        // Document Title Update
        useDocTitle('Contact')
    return (
        <div>
            <ContactBreadCrumbs/>
            <ContactDetails/>
            <ContactForm/>
            <ScrollBar/>
        </div>
    )
}
