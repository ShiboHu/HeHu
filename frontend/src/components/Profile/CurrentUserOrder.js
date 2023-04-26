import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders } from "../../store/order";
import { useHistory } from "react-router-dom";


function CurrentUserOrders() { 
    const history = useHistory();
    const dispatch = useDispatch();
    const allOrder = useSelector(state => state.orders.orders)
    
    console.log(allOrder)

    useEffect(() => { 
        dispatch(getAllOrders());
    },[dispatch])
    

    return( 
        <div>
            <ul className="profilepage-user-container">
            <h1>Orders</h1>
                {allOrder.map(order => (
                    <div>
                    <h3>Order: #{order.id}</h3>
                    <h3>Ordered Date: {order.createdAt}</h3>
                    <button onClick={() => history.push(`/orders/${order.cartId}`)}>Details</button>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default CurrentUserOrders;
