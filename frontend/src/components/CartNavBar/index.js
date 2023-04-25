import './cartnavbar.css'
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { NavLink, useHistory } from 'react-router-dom';
import { allCartItem, deleteCartItem, updateCartItem } from '../../store/cart_item';
import ClearIcon from '@mui/icons-material/Clear';

function CartNavBar(){ 
    const history = useHistory()
    const dispatch = useDispatch();
    const allItemInCart = useSelector(state => state.cartItems.cart_items);
   
    const [quantity, setQuantity] = useState(0);

    useEffect(() => { 
        dispatch(allCartItem())

    }, [dispatch])


    console.log(allItemInCart.items)
    
   const submit = async (id) => { 
        await dispatch(deleteCartItem(id))
   }
    
   if(!allItemInCart.items) return null


   const quantityOptions = [];
   for (let i = 1; i <= 99; i++) {
     quantityOptions.push({ value: i, label: i });
   }

    return(
        <div className="main-navbar-container">
            <ul className="cartnavbar-container">
                <div className='cartnavbar-buttons'>
                <h2 >${allItemInCart.totalPrice === 0? '0.00' : allItemInCart.totalPrice}</h2>
                <button className='button-71'
                onClick={() => history.push('/carts')}
                >Go to cart</button>
                </div>
                {allItemInCart && allItemInCart?.items?.map(item =>( 
                    <div className='cartnavbar-items-container'>    
                    <img className='cartnavbar-image'src={item.image}></img>

                    <button className='cartnavbar-delete-button'
                    onClick={() => submit(item.id)}
                    >
                    <ClearIcon />
                    </button>

                    <select
                    value={item.quantity}
                    onChange={(e) => {    
                    const newQuantity = parseInt(e.target.value);
                    dispatch(updateCartItem({ quantity: newQuantity }, item.id))}}>
                    {quantityOptions.map((option) => (
                     <option key={option.value} value={option.value}>
                     {option.label}
                     </option>
                      ))}
                      </select>
                    
                    </div>
                ))}
            </ul>
        </div>
    )
}



export default CartNavBar;
