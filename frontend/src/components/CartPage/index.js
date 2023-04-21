import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCartItem } from "../../store/cart";

function CartPage(){ 
    const dispatch = useDispatch();
    const allItems = useSelector(state => state.carts.carts);


    useEffect(()=> {
        dispatch(getAllCartItem())
    }, [dispatch])


    if(!Object.values(allItems).length){ 
        return ( 
            <>Loading...</>
        )
    }

    return( 
        <>
        <h1>Carts</h1>
        <ul> 
            {allItems.items.map(item => ( 
                <div>
                <img src={item.image} alt='item'></img>
                <li>{item.name}</li>
                <li>{item.description}</li>
                </div>
            ))}
        </ul>
        </>
    )
}


export default CartPage;
