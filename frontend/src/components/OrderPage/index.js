import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getsingleOrder } from "../../store/order";
import './orderpage.css'


function SingleOrderPage(){ 
    const { orderId } = useParams();
    const dispatch = useDispatch();
    const currentOrder = useSelector(state => state.orders.order);
    
    useEffect(() => { 
        dispatch(getsingleOrder(orderId))
    },[dispatch])
    

    if(!Object.values(currentOrder).length) return null

    console.log(currentOrder)

    return (
        <div className="singleorder-main-container">
            <h1>Order: #{orderId}</h1>
            <ul>
                {currentOrder?.items?.map(order => (
                    <div className="singleorder-content">
                   <img src={order.image} className="profile-itemimages"></img>
                        <li>name:{order.name}</li>
                        <li>price: ${order.price}</li>
                        <li>qty:{order.quantity}</li>
                    </div>
                ))}
            </ul>
            <h3>Total Price:${currentOrder.totalPrice}</h3>
        </div>
    )
}


export default SingleOrderPage;
