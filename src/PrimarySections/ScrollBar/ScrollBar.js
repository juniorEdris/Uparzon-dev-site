import React, { useEffect } from 'react'
import $ from 'jquery'
import usePageTop from '../CustomHooks/GetTopofPage';

function ScrollBar() {
    useEffect(() => {
        // get on top of the page after clicking scroll button
        const scrollTop = document.querySelector('.scroll-top');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollTop.classList.remove('not-visible')
            }else{
                scrollTop.classList.add('not-visible')
            }
        })
        scrollTop.addEventListener('click',()=>{
            $('html').animate({
                scrollTop:0
	        },1000);
        });
        
        return()=>{
            window.removeEventListener('scroll', () => {});
            scrollTop.removeEventListener('click',()=>{});
        }
    }, [])
    // get on top of the page after page loads
    usePageTop()
    return (
                <div className="scroll-top not-visible">
                    <i className="fa fa-angle-up"/>
                </div>
    )
}

export default React.memo(ScrollBar)