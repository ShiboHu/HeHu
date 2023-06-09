import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import './cartpage.css'
import { allCartItem, deleteCartItem, updateCartItem } from "../../store/cart_item";
import { createNewOrder } from "../../store/order";
import { useHistory } from "react-router-dom";
import ReactLoading from "react-loading";


function CartPage(){ 
    const history = useHistory();
    const dispatch = useDispatch();
    const allItems = useSelector(state => state.cartItems.cart_items);
    const currentUser = useSelector(state => state.session.user)
    const [isLoaded, setIsLoaded] = useState(false);
    
    useEffect(()=> {
        dispatch(allCartItem())

        setTimeout(() => { 
            setIsLoaded(true)
        },2500)
    }, [dispatch])


    if(!currentUser){ 
        history.push('/login')
    }

    if(!allItems?.items?.length || !allItems){ 
        return ( 
            <div className="cartpage-notfound">
                <img className='notfound-image' src="https://img.freepik.com/premium-vector/shopping-cart-with-cross-mark-wireless-paymant-icon-shopping-bag-failure-paymant-sign-online-shopping-vector_662353-912.jpg"></img>
                <h1>
                <i class="fa-duotone fa-shelves-empty">
                        Your Cart Is Empty
                    </i></h1>
            </div>
        )
    }

    const countQuantity = () => { 
        return allItems.items.reduce((accum, item) => { 
            return accum + item.quantity;
          }, 0);
    }

    const submit = async (id) => { 
        await dispatch(deleteCartItem(id))
        .then(dispatch(allCartItem()))
   }


   const orderSubmit = async() => { 
        let newOrder = await dispatch(createNewOrder(allItems.cartId))

        if(newOrder){
            history.push(`/orders/${allItems.cartId}`)
        }
   }


   const quantityOptions = [];
   for (let i = 1; i <= 99; i++) {
     quantityOptions.push({ value: i, label: i });
   }

    return( 
        <div className="cartpage-main-container">
        {isLoaded ? (
            <>
        <div className="cartpage-leftside-container">
            <h1>Carts</h1>
        <ul> 
            {allItems && allItems?.items?.map(item => ( 
                <div className="cartpage-item-container">
                <img className="cartpage-item-image" src={item.image} alt='item'></img>
                
                <div className="cartpage-item-content">
                <li>Name: {item.name}</li>
                <li>Description: {item.description}</li>
                <li>Price: ${item.price}</li>
                
                <div className="cartpage-action-field">

                <select
                    value={item.quantity}
                    className="cartpage-select"
                    onChange={(e) => {    
                    const newQuantity = parseInt(e.target.value);
                    dispatch(updateCartItem({ quantity: newQuantity }, item.id))}}>

                    {quantityOptions.map((option) => (
                     <option key={option.value} value={option.value}>
                     {option.label}
                     </option>
                      ))}
                 </select>

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
        
            {allItems.items.map(item => ( 
                <div className="cartpage-rightside-content">
                <li>Item: {item.name}</li>
                <li>${item.price}</li>
                <li>qty:{item.quantity}</li>
                </div>
                ))}
        
            <h3>{allItems.items.length} Product(s) | {countQuantity()} Item(s)</h3>
            <h3>Total Price:${allItems.totalPrice}</h3>
            <button className="button-71" onClick={() => orderSubmit()}>Check Out</button>
        </div>
        </>
        ) : ( 
            <div className="cart-loading">
                <h1>Loading...</h1>
      <ReactLoading type="spin" color="#ff7426"
        height={400} width={100} />
            </div>
        )}
        </div>
    )
}


export default CartPage;
