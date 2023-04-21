import { getAllCartItem } from '../../store/cart';
import './cartnavbar.css'
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';

function CartNavBar(){ 
    const history = useHistory()
    const dispatch = useDispatch();
    const allItemInCart = useSelector(state => state.carts.carts);
    const [itemQuantities, setItemQuantities] = useState({});


    useEffect(() => { 
        dispatch(getAllCartItem())
    }, [dispatch])


    console.log(allItemInCart.items)
    
    const handleQuantityChange = (itemId, quantity) => {
        setItemQuantities(prevState => ({ ...prevState, [itemId]: quantity }));
    };
    
    const numberOptions = []; 
    for(let i = 1; i < 99; i++){ 
        numberOptions.push(<option value={i}>{i}</option>)
    }
    
    if(!Object.values(allItemInCart).length)return null;

    return(
        <div className="main-navbar-container">
            <ul className="cartnavbar-container">
                <div className='cartnavbar-buttons'>
                <h2 >${allItemInCart.totalPrice}</h2>
                <button className='button-71'>Checkout</button>
                <button className='button-710'
                onClick={() => history.push('/carts')}
                >Go to cart</button>
                </div>
                {allItemInCart && allItemInCart?.items?.map(item =>( 
                    <div className='cartnavbar-items-container'>
                    <img className='cartnavbar-image'src={item.image}></img>
                    <select 
                     value={itemQuantities[item.id] || 1}
                     onChange={e => handleQuantityChange(item.id, e.target.value)}
                     >
                     {numberOptions}
                     </select>
                    </div>
                ))}
            </ul>
        </div>
    )
}



export default CartNavBar;
