import { useDispatch, useSelector } from "react-redux";
import { getAllItems, refreshItems } from "../../store/item";
import { useEffect } from "react";
import './landingpage.css'
import { NavLink } from "react-router-dom";
import { addCartItem, allCartItem } from "../../store/cart_item";

function LandingPage(){ 
    const dispatch = useDispatch();
    const allItems = useSelector(state => state.items.items);

    useEffect(() => { 
        dispatch(getAllItems())
        dispatch(refreshItems())
    }, [dispatch])

    if(!allItems){ 
        return (
            <h1>Currently No Items Listed</h1>
        )
    }

    const submit = async (id) => { 
        await dispatch(addCartItem(id));
        dispatch(allCartItem());
      }
      

    return ( 
        <div>
            <ul className="items-container"> 
             {allItems && allItems.map(item => ( 

                  <div className="items-card">
                  <NavLink exact to={`/items/${item.id}`} className='NavLink'>
                    <img className='landingpage-item-image' src={item.image} alt='itemimage' />
                    <li className='landingpage-item-name'>{item.name} {item.stocks} left</li>
                  </NavLink>
                    <li className='landingpage-price'>${item.price}
                    <button className="landingpage-addtocart-button" 
                    onClick={() => submit(item.id)}>
                      <i class="fa-solid fa-cart-plus"></i>
                    </button>
                    </li>

                  <li>{item.avgRating}({item?.commentLength})</li>

                </div>
                
                    ))}
                    
            </ul>
        </div>
    )
}


export default LandingPage;
