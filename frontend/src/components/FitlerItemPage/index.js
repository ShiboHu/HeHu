import {useEffect, useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory, NavLink } from 'react-router-dom';
import { getSubcategoryItems } from "../../store/item";
import { addCartItem, allCartItem } from "../../store/cart_item";
import Skeleton from 'react-loading-skeleton';

function FilterItem(){ 
    const {subId} = useParams();
    const history = useHistory()
    const dispatch = useDispatch();
    const items = useSelector(state => state.items.items);
    const currentUser = useSelector(state => state.session.user);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        dispatch(getSubcategoryItems(subId))
        .then(() => setIsLoaded(false))
        
        setTimeout(() => {
          setIsLoaded(true)
        }
        , 400)
      
    },[dispatch, subId]
)

// if (!items) { 
//     return (
//       <div className="landingpage-container">
//         <ul className="items-container"> 
//           {[...Array(items.length)].map((_, index) => (
//             <li className="items-card" key={index}>
//               <Skeleton height={280} />
//             </li>
//           ))}
//         </ul>
//       </div>
//     )
//   }

const submit = async (id) => { 
  if(!currentUser){
    history.push('/login')
  }else {
    await dispatch(addCartItem(id));
    dispatch(allCartItem());
  }
}

return ( 
  <>
  {isLoaded ? (
  <div className="landing-main-content">
      <ul className="items-container"> 
       {items && items.map(item => ( 
         
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

            <li>{renderStars(item.avgRating)}({item?.commentLength})</li>

          </div>
          
              ))} 
      </ul>
      

      </div>
      ) : ( 
        <div className="landing-main-content">
        <ul className="items-container">
        {[...Array(20)].map((_, index) => (
          <li className="items-card" key={index}>
                    <Skeleton  baseColor="grey" highlightColor="white" className="skeleton" height={270} width={270}  borderRadius={5}/>
                    <Skeleton  baseColor="grey" highlightColor="white" className="skeleton" height={20} width={260}/>
                    <Skeleton  baseColor="grey" highlightColor="white" className="skeleton" height={20} width={50}/>
                    <Skeleton  baseColor="grey" highlightColor="white" height={20} width={180}/>
            </li>
        ))}
        </ul>
        </div>
        
      )}

</>
)
}


export const renderStars = (rating) => {
 const filledStars = Math.round(rating);
 const emptyStars = 5 - filledStars;
 const stars = [];

 for (let i = 1; i <= filledStars; i++) {
    stars.push(<i key={i} className="fa fa-star"></i>);
  }

 for (let i = 1; i <= emptyStars; i++) {
     stars.push(<i key={filledStars + i} className="fa fa-star-o"></i>);
  }

return stars;
};
    


export default FilterItem;
