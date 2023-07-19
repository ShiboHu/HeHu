import { useDispatch, useSelector } from "react-redux";
import { getAllItems, refreshItems } from "../../store/item";
import { useEffect, useState } from "react";
import './landingpage.css'
import { NavLink, useHistory } from "react-router-dom";
import { addCartItem, allCartItem } from "../../store/cart_item";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import ScrollToTopButton from "../ScrollToTopButton";
import FeaturedItems from "./featureItem";

function LandingPage(){ 
  const history = useHistory()
  const dispatch = useDispatch();
  const allItems = useSelector(state => state.items.items);
  const currentUser = useSelector(state => state.session.user);
  const [isLoaded, setIsLoaded] = useState(false);

  const [itemToShow, setItemToShow] = useState(15);
  const [itemToLoad, setItemToLoad] = useState(15);


  useEffect(() => { 
        dispatch(getAllItems())
        dispatch(refreshItems())

        setTimeout(() => {
          setIsLoaded(true)
        }
        , 1000)
      }, [dispatch])


      //load only 15 at once
      useEffect(() => {
        function handleScroll() {
          // detect when the user has scrolled to the bottom of the page
          const scrolledToBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight;
          if (scrolledToBottom) {
            // load more items
            setItemToShow(itemToShow + itemToLoad);
          }
        }
    
        // add event listener for scroll events
        window.addEventListener('scroll', handleScroll);
    
        // remove event listener when component unmounts
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [itemToShow, itemToLoad]);
      




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
          <FeaturedItems />
          <h1 className="landing-h1">Featured</h1>
            <ul className="items-container"> 
             {allItems && allItems.slice(0, itemToShow).map(item => ( 
               
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

              <div className="featured-items">
                <ul className="feature-ul-container"> 
                
                <div>
                <Skeleton className="feature-item-image"  baseColor="grey" highlightColor="white"  style={{width:'250px', height: '200px', borderRadius:'50%'}}/>
                <Skeleton className="feature-item-text"  baseColor="grey" highlightColor="white"  width={110} height={40}/>
                </div>
                
                <div>
                <Skeleton className="feature-item-image"  baseColor="grey" highlightColor="white"  style={{width:'250px', height: '200px', borderRadius:'50%'}}/>
                <Skeleton className="feature-item-text"  baseColor="grey" highlightColor="white"  width={110} height={40}/>
                </div>
                
                <div>
                <Skeleton className="feature-item-image"  baseColor="grey" highlightColor="white"  style={{width:'250px', height: '200px', borderRadius:'50%'}}/>
                <Skeleton className="feature-item-text"  baseColor="grey" highlightColor="white"  width={110} height={40}/>
                </div>
                
                <div>
                <Skeleton className="feature-item-image"  baseColor="grey" highlightColor="white"  style={{width:'250px', height: '200px', borderRadius:'50%'}}/>
                <Skeleton className="feature-item-text"  baseColor="grey" highlightColor="white"  width={110} height={40}/>
                </div>
                
                <div>
                <Skeleton className="feature-item-image" s baseColor="grey" highlightColor="white"  style={{width:'250px', height: '200px', borderRadius:'50%'}}/>
                <Skeleton className="feature-item-text"  baseColor="grey" highlightColor="white"  width={110} height={40}/>
                </div>
                
                </ul>
            <Skeleton width={200} height={45} baseColor="grey" highlightColor="white"  style={{textAlign:'center', marginTop:'20px'}}/> 
            </div>
{/* 
            <div className="landing-main-content" style={{ margin: "0 auto", textAlign: "center" }}>
            <Skeleton width={200} height={40} style={{marginBottom:'30px'}}/> */}
            
            
            
              <ul className="items-container">
              {[...Array(20)].map((_, index) => (
                <li className="items-card" key={index}>
                    <Skeleton className="skeleton" height={295} width={270} borderRadius={5} baseColor="grey" highlightColor="white"  />
                    <Skeleton className="skeleton" height={20} width={260}  baseColor="grey" highlightColor="white" />
                    <Skeleton className="skeleton" height={20} width={50}  baseColor="grey" highlightColor="white" />
                    <Skeleton height={20} width={180}  baseColor="grey" highlightColor="white" />
                    
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


export default LandingPage;
