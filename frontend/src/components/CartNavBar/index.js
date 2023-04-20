import { getAllCartItem } from '../../store/cart';
import './cartnavbar.css'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function CartNavBar(){ 
    const dispatch = useDispatch();
    const allItemInCart = useSelector(state => state.carts.carts);
    console.log(allItemInCart)



    useEffect(() => { 
        dispatch(getAllCartItem())
    }, [dispatch])

    if(!allItemInCart)return null
    return(
        <div className="main-navbar-container">
            <ul className="cartnavbar-container">
                <div className='cartnavbar-buttons'>
                <h2 >${allItemInCart?.totalPrice}</h2>
                <button className='button-71'>Checkout</button>
                <button className='button-710'>Go to cart</button>
                </div>
                {allItemInCart.Items && allItemInCart?.Items?.map(item =>( 
                    <img className='cartnavbar-image'src={item.image}></img>
                ))}
            </ul>
        </div>
    )
}



export default CartNavBar;
