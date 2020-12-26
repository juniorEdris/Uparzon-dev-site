import React,{useEffect} from 'react'
import { getSubTotal } from '../../Utility/Reducer'
import { useStateValue } from '../../Utility/StateProvider'
import { AnimatePresence, motion } from "framer-motion"
import {Spring} from 'react-spring/renderprops'
import './CartIcon.css'
import { connect } from 'react-redux'
function CartIcon(props) {
    const [{basket,wishList,compareList}] = useStateValue()

    useEffect(()=>{
        const basket = document.querySelector('.floating-basket');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
              basket.classList.remove('not-visible')
            }else{
                basket.classList.add('not-visible')
            }
        })
        return ()=>{
            basket.removeEventListener('scroll',()=>{})
        }
    },[])

    return (
        <AnimatePresence>
        <motion.div className='floating-basket d-none d-xl-block'
        initial={{x:100}}
        transition={{ ease: "easeIn", duration: 0.3, delay:1,type:"spring" }}
        animate={{x:0}}
        exit={{x:100}}
        >
            <div className='compare'>
            <span className="lnr lnr-sync" /><span className="count">{ compareList.length}</span>
            </div>
            <div className='wish'>
            <span className="lnr lnr-heart" /><span className="count">{ wishList.length}</span>
            </div>
            <div className='cart'>
                <span className="lnr lnr-cart" /><span className="count">{ props.basket.length}</span>
                <Spring
                from={{ number: 0 }}
                to={{ number: getSubTotal(props.basket)}}
                >
                {props => <p className='cart__amount'>{props.number.toFixed(2)}</p>}
                </Spring>
            </div>
       

        </motion.div>
        </AnimatePresence>
    )
}

const mapStateToProps = state => (
    {
        basket:state.basketProd.basket,
    }
)
const mapDispatchToProps = dispatch => (
    {

    }
)
export default connect(mapStateToProps,mapDispatchToProps)(React.memo(CartIcon))