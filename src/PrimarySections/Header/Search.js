import { FormControl, ListSubheader, MenuItem, Select } from '@material-ui/core'
import React,{useState,useEffect} from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { fetchSearchProducts } from '../../Utility/Redux/Action/SearchAction'
import './Search.css'

 function Search(props) {
     const [input, setInput] = useState('')
     const [select,setSelect] = useState('')
     useEffect(() => {
         props.fetchSearchResult(select,input)
        }, [select,input])
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
                value={select}
                onChange={(e)=>{
                    routeChange()
                    setSelect(e.target.value)
                }}
                >
                    <MenuItem value="">
                        Category
                    </MenuItem>
                    {/* <ListSubheader>Electronics</ListSubheader> */}
                    {props.category?.map(cat=>(
                        <MenuItem value={cat.id}>
                            {cat.name}
                        </MenuItem>
                    ))}
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


const mapStateToProps = state=>(
    {
    category:state.categories.categoryList
    }
)

const mapDispatchToProps = (dispatch)=>(
    {
        fetchSearchResult:(select,keywords)=>dispatch(fetchSearchProducts(select,keywords))
    }
)
export default connect(mapStateToProps,mapDispatchToProps)(React.memo(Search))