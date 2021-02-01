import { FormControl, ListSubheader, MenuItem, Select } from '@material-ui/core'
import React,{useState,useEffect} from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { fetchSearchProducts } from '../../Utility/Redux/Action/SearchAction'
import './Search.css'

 function Search(props) {
     const [input, setInput] = useState('')
     useEffect(() => {
         props.fetchSearchResult(input)
        }, [input])
        const history = useHistory()
    const routeChange = (e)=>{
        history.push("/search");
    }
    return (
        <div className="col-lg-6 col-md-12 col-12 order-sm-last">
        <div className="header-middle-inner">
        
            <div className="top-cat hm1">
            <div className={`search-form`}>
            <FormControl className=''>
                <Select 
                variant='standard'
                defaultValue="" 
                id="grouped-select"
                displayEmpty
                >
                    <MenuItem value="">
                        Category
                    </MenuItem>
                    <ListSubheader>Electronics</ListSubheader>
                    <MenuItem value={1}>Laptop</MenuItem>
                    <MenuItem value={2}>Watch</MenuItem>
                    <MenuItem value={3}>air cooler</MenuItem>
                    <MenuItem value={4}>audio</MenuItem>
                    <MenuItem value={5}>speakers</MenuItem>
                    <ListSubheader>Fashion</ListSubheader>
                    <MenuItem value={6}>Womens tops</MenuItem>
                    <MenuItem value={7}>Jeans</MenuItem>
                    <MenuItem value={8}>Shirt</MenuItem>
                    <MenuItem value={9}>Pant</MenuItem>
                    <MenuItem value={10}>Watch</MenuItem>
                </Select>
            </FormControl>
            </div>
            </div>
            <input type="text" className="top-cat-field" onInput={routeChange} onChange={e=>setInput(e.target.value)} placeholder="Search entire store here" />
            <input type="button" className="top-search-btn" defaultValue="Search" />
        </div>
    </div>
    )
}

const mapDispatchToProps = (dispatch)=>(
    {
        fetchSearchResult:(keywords)=>dispatch(fetchSearchProducts(keywords))
    }
)
export default connect(state=>({}),mapDispatchToProps)(React.memo(Search))