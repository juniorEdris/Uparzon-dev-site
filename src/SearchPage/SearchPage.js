import React from 'react'
import { connect } from 'react-redux'
import Breadcrumb from '../PrimarySections/Breadcrumbs/Breadcrumb'
import useDocTitle from '../PrimarySections/CustomHooks/DocTitle'
import ModalSection from '../PrimarySections/Modal/ModalSection'
import ScrollBar from '../PrimarySections/ScrollBar/ScrollBar'
import SearchWrapper from './PageComponent/SearchWrapper'


function SearchPage() {
    // Document Title Update
    useDocTitle('Search product')
    return (
        <div>
            <Breadcrumb pageName={'Search products'} route={'/'} parent={'Home'}/>
            <SearchWrapper/>
            <ScrollBar/>
            <ModalSection/>
        </div>
    )
}
const mapStateToProps = state=>(
    {
        loading:state.loading,
        results: state.SearchEngine.searchedResponse
    }
)
export default connect(mapStateToProps)(SearchPage)
