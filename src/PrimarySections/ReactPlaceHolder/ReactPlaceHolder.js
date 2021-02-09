import React from 'react'
import ContentLoader from 'react-content-loader'

import './PlaceHolder.css'

export const ProductLoader=()=>{
    return(
        <div className="d-flex p-2 overflow-auto">
        <ContentLoader className='' style={{height:365,width:170,borderRadius:'10px',border:'1px solid #ddd',marginRight:'10px',}}>
            <rect x="0" y="0" rx="5" ry="5" width="100%" height="170" />
            <br/>
            <rect x="10" y="180" rx="4" ry="4" width="40%" height="22" />
            <br/>
            <rect x="10" y="240" rx="4" ry="4" width="90%" height="36" />
            <br/>
            <rect x="10" y="300" rx="4" ry="4" width="90%" height="36" />
        </ContentLoader>
        </div>
    )
}
export const StoreLoader=()=>{
    return(
        <div className="d-flex p-2 overflow-auto">
            <ContentLoader style={{height:247,width:175,borderRadius:'10px',border:'1px solid #ddd',marginRight:'20px',}}>
                <rect x="0" y="0" rx="5" ry="5" width="100%" height="170" />
                <br/>
                <rect x="35" y="190" rx="4" ry="4" width="60%" height="25" />
            </ContentLoader>
            <ContentLoader style={{height:247,width:175,borderRadius:'10px',border:'1px solid #ddd',marginRight:'20px',}}>
                <rect x="0" y="0" rx="5" ry="5" width="100%" height="170" />
                <br/>
                <rect x="35" y="190" rx="4" ry="4" width="60%" height="25" />
            </ContentLoader>
            <ContentLoader style={{height:247,width:175,borderRadius:'10px',border:'1px solid #ddd',marginRight:'20px',}}>
                <rect x="0" y="0" rx="5" ry="5" width="100%" height="170" />
                <br/>
                <rect x="35" y="190" rx="4" ry="4" width="60%" height="25" />
            </ContentLoader>
            <ContentLoader style={{height:247,width:175,borderRadius:'10px',border:'1px solid #ddd',marginRight:'20px',}}>
                <rect x="0" y="0" rx="5" ry="5" width="100%" height="170" />
                <br/>
                <rect x="35" y="190" rx="4" ry="4" width="60%" height="25" />
            </ContentLoader>
            <ContentLoader style={{height:247,width:175,borderRadius:'10px',border:'1px solid #ddd',marginRight:'20px',}}>
                <rect x="0" y="0" rx="5" ry="5" width="100%" height="170" />
                <br/>
                <rect x="35" y="190" rx="4" ry="4" width="60%" height="25" />
            </ContentLoader>
        </div>
    )
}