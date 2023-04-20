import { useDispatch, useSelector } from "react-redux";
import { getAllItems } from "../../store/item";
import { useEffect } from "react";
import './landingpage.css'
import { NavLink } from "react-router-dom";
import { addItemToCart, getAllCartItem } from "../../store/cart";

function LandingPage(){ 
    const dispatch = useDispatch();
    const allItems = useSelector(state => state.items.items);
    const currentUser = useSelector(state => state.session)

    useEffect(() => { 
        dispatch(getAllItems())
    }, [dispatch])

    if(!allItems){ 
        return (
            <h1>Currently No Items Listed</h1>
        )
    }

    const addToCart = async (e, id) => { 
        e.preventDefault();
        
        const payload = { 
            itemId: id,
        }
        await dispatch(addItemToCart(payload,id))
    }

    return ( 
        <div>
            <ul className="items-container"> 
                {allItems && allItems.map(item => ( 
                  <NavLink exact to={`/items/${item.id}`} className='NavLink'>
                    
                    <div className="items-card">
                    <img className='landingpage-item-image' src={item.image} alt='itemimage'></img>

                    <li className='landingpage-item-name'>{item.name}  {item.stocks} left</li>

                    <li className='landingpage-price'>${item.price}
                    <button className="landingpage-addtocart-button"
                    onClick={(e) => addToCart(e,item.id)}
                    >
                    <i class="fa-solid fa-cart-plus"></i>
                    </button>
                    </li>
                    
                    <li>{item.avgRating}({item?.commentLength})</li>

                    </div>
                    </NavLink>))}
            </ul>
        </div>
    )
}


export default LandingPage;
