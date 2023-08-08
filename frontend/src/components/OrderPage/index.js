import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getsingleOrder } from "../../store/order";
import './orderpage.css'
import ReactLoading from "react-loading";


function SingleOrderPage(){ 
    const history = useHistory();
    const { orderId } = useParams();
    const dispatch = useDispatch();
    const currentOrder = useSelector(state => state.orders.order);
    const currentUser = useSelector(state => state.session.user)
    const [isLoaded, setisLoaded] = useState(false);


    useEffect(() => { 
        dispatch(getsingleOrder(orderId))

        setTimeout(() => { 
            setisLoaded(true)
        },2500)
     
    },[dispatch])
    
    if(!currentUser){ 
        history.push('/login')
    }

    if(!Object.values(currentOrder).length) return null



    return (
        <>
        {isLoaded ? (
            
        <div className="singleorder-main-container">
            <h2>ORDER CONFIRMATION</h2>
            <h4>Thank you for your purchase !</h4>
            <p>Your order ID is : #{orderId}</p>
            <ul>
                {currentOrder?.items?.map(order => (
                    <div className="singleorder-content">
                   <img onClick={() => history.push(`/items/${order.id}`)} src={order.image} className="profile-itemimages"></img>
                        <li>name:{order.name}</li>
                        <li>price: ${order.price}</li>
                        <li>qty:{order.quantity}</li>
                    </div>
                ))}
            </ul>
            <h3>Total Price:${currentOrder.totalPrice}</h3>
        </div>
    ) : ( 
        <div className="loading-container">
        <h1>Processing...</h1>
        <ReactLoading
          type="spinningBubbles"
          color="#ff7426"
          height={400}
          width={100}
         />
        </div>
    )}
        </>
    )
}


export default SingleOrderPage;
