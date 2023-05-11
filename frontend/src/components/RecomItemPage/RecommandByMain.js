import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, NavLink, useHistory } from "react-router-dom"
import { getAllItemByMain } from "../../store/maincategory";
import Skeleton from 'react-loading-skeleton';
import { addCartItem, allCartItem } from "../../store/cart_item";
import { renderStars } from "../LandingPage";

function RecommandItemByMain(){ 
    const { mainId } = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const allitems = useSelector(state => state.mainCategories.mainCateItem)
    const [isLoaded, setisLoaded] = useState(false)
    const currentUser = useSelector(state => state.session.user);

    
    useEffect(() => { 
        dispatch(getAllItemByMain(mainId))
          .then(setisLoaded(false))
        setTimeout(() => { 
            setisLoaded(true)
        },500)
    },[dispatch, mainId])



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
       {allitems.length && allitems.map(subitem => subitem?.map(item => ( 
         
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
          
              )))} 
      </ul>
      
      </div>
      ) : ( 
        <div className="landing-main-content">
        <ul className="items-container">
        {[...Array(20)].map((_, index) => (
          <li className="items-card" key={index}>
                    <Skeleton className="skeleton" height={270} width={270}/>
                    <Skeleton className="skeleton" height={20} width={260}/>
                    <Skeleton className="skeleton" height={20} width={50}/>
                    <Skeleton height={20} width={180}/>
            </li>
        ))}
        </ul>
        </div>
      )}

</>
)
    
}


export default RecommandItemByMain
