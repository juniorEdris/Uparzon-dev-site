import React from 'react'
import useDocTitle from '../PrimarySections/CustomHooks/DocTitle'

export default function Blog() {
    // Document Title Update
    useDocTitle('Blog')
    return (
        <div>
            <h1>This is Blog page</h1>

        </div>
    )
}
