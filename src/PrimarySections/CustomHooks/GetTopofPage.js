import {useEffect} from 'react'

const usePageTop =()=>{
    useEffect(()=>{
        (window).scrollTo(0,0)
    },[])
}

export default usePageTop