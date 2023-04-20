import { useDispatch, useSelector } from "react-redux";
import { getAllItems } from "../../store/item";
import { useEffect } from "react";
import './landingpage.css'

function LandingPage(){ 
    const dispatch = useDispatch();
    const allItems = useSelector(state => state.items.items);


    useEffect(() => { 
        dispatch(getAllItems())
    }, [dispatch])

    if(!allItems){ 
        return (
            <h1>Currently No Items Listed</h1>
        )
    }
    return ( 
        <div>
            <ul className="items-container"> 
                {allItems && allItems.map(item => ( 
                    
                    <div className="items-card">
                    <img className='landingpage-item-image' src={item.image} alt='itemimage'></img>

                    <li className='landingpage-item-name'>{item.name}  {item.stocks} left</li>

                    <li className='landingpage-price'>${item.price}
                    <button className="landingpage-addtocart-button">

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
