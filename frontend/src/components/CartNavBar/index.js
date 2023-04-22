import './cartnavbar.css'
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { NavLink, useHistory } from 'react-router-dom';
import { allCartItem, deleteCartItem } from '../../store/cart_item';

function CartNavBar(){ 
    const history = useHistory()
    const dispatch = useDispatch();
    const allItemInCart = useSelector(state => state.cartItems.cart_items);


    useEffect(() => { 
        dispatch(allCartItem())

    }, [dispatch, ])


    console.log(allItemInCart.items)
    
   const submit = async (id) => { 
        await dispatch(deleteCartItem(id))
        .then(dispatch(allCartItem()))
   }
    
   if(!allItemInCart.items) return null



    return(
        <div className="main-navbar-container">
            <ul className="cartnavbar-container">
                <div className='cartnavbar-buttons'>
                <h2 >${allItemInCart.totalPrice === 0? '0.00' : allItemInCart.totalPrice}</h2>
                <button className='button-71'>Checkout</button>
                <button className='button-710'
                onClick={() => history.push('/carts')}
                >Go to cart</button>
                </div>
                {allItemInCart && allItemInCart?.items?.map(item =>( 
                    <div className='cartnavbar-items-container'>
                    <img className='cartnavbar-image'src={item.image}></img>
                    <button className='cartnavbar-delete-button'
                    onClick={() => submit(item.id)}
                    >
                    <i class="fa-sharp fa-solid fa-circle-minus"></i>
                    </button>
                    <select defaultValue={item.quantity}>
                        
                    </select>
                    </div>
                ))}
            </ul>
        </div>
    )
}



export default CartNavBar;
