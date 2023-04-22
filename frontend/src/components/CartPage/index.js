import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCartItem } from "../../store/cart";
import './cartpage.css'
import { allCartItem, deleteCartItem } from "../../store/cart_item";


function CartPage(){ 
    const dispatch = useDispatch();
    const allItems = useSelector(state => state.carts.carts);


    useEffect(()=> {
        dispatch(getAllCartItem())
    }, [dispatch])


    if(!allItems.items){ 
        return ( 
            <div className="cartpage-notfound">
                <h1>
                <i class="fa-duotone fa-shelves-empty">
                        Your Cart Is Empty
                    </i></h1>
            </div>
        )
    }


    const submit = async (id) => { 
        await dispatch(deleteCartItem(id))
        .then(dispatch(getAllCartItem()))
   }

    console.log(allItems)
    return( 
        <div className="cartpage-main-container">
        <div className="cartpage-leftside-container">
            <h1>Carts</h1>
        <ul> 
            {allItems.items.map(item => ( 
                <div className="cartpage-item-container">
                <img className="cartpage-item-image" src={item.image} alt='item'></img>
                
                <div className="cartpage-item-content">
                <li>Name: {item.name}</li>
                <li>Description: {item.description}</li>
                <li>Price: ${item.price}</li>
                
                <div className="cartpage-action-field">
                <select></select>
                <button className="button-5" 
                onClick={() => submit(item.id)}>Remove</button>
                </div>

                </div>
                </div>
            ))}
        </ul>
        </div>
        
        <div className="cartpage-rightside-container">
            <h2>Item Summary</h2>
            <h3>{allItems.items.length} Item(s)</h3>
            <h3>Total Price:${allItems.totalPrice}</h3>
            <button className="button-71">Check Out</button>
        </div>
     </div>
    )
}


export default CartPage;
