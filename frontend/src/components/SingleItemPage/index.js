import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from 'react-router-dom'
import { getSingleItem } from "../../store/item";
import './singleitem.css'
import  OpenModalButton  from '../OpenModalButton'
import CreateNewComment from "../ConfirmModals/CreateComment";
import { addCartItem, allCartItem, updateCartItem } from "../../store/cart_item";
import { renderStars } from "../LandingPage";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { createALike, deleteALike, getSingleLike } from "../../store/like";


function SingleItem(){ 
    const history = useHistory()
    const { itemId } = useParams();
    const dispatch = useDispatch();
    const item = useSelector(state => state.items.item);
    const currentUser = useSelector(state => state.session.user)
    const currentLike = useSelector(state => state.likes.like)
    const [liked, setLiked] = useState(false)

    useEffect(() => { 
      dispatch(getSingleItem(itemId))
      dispatch(getSingleLike(itemId))
      
    },[dispatch, itemId])
    
    
    useEffect(() => { 
      if(currentLike?.userId === currentUser?.id){ 
        setLiked(true)
      }
      if(!currentLike.userId){
        setLiked(false)
      }
    },[currentLike, currentUser])


    if(!Object.values(item).length){ 
        return (
            <div className="singleitem-main-container">
                <div className="singleitem-leftpage-container">
                    <Skeleton height={500} width={500}/>
                    <Skeleton height={30} width={300} style={{ marginBottom: "10px" }} />
                    <Skeleton height={20} width={200} style={{ marginBottom: "50px" }} />
                    <Skeleton height={20} width={200} style={{ marginBottom: "10px" }} />
                    <Skeleton height={20} width={200} style={{ marginBottom: "10px" }} />
                    <Skeleton height={20} width={200} style={{ marginBottom: "10px" }} />
                    <Skeleton height={40} width={200} style={{ marginBottom: "10px" }} />
                    <Skeleton height={30} width={100} />
                </div>
                <div className="singleitem-rightpage-container">
                    <Skeleton height={30} width={300} style={{ marginBottom: "10px" }} />
                    <Skeleton height={20} width={200} style={{ marginBottom: "50px" }} />
                    <Skeleton height={20} width={200} style={{ marginBottom: "10px" }} />
                    <Skeleton height={20} width={200} style={{ marginBottom: "10px" }} />
                    <Skeleton height={20} width={200} style={{ marginBottom: "10px" }} />
                    <Skeleton height={40} width={200} style={{ marginBottom: "10px" }} />
                    <Skeleton height={50} width={150} />
                </div>
            </div>
        )
    }


    const createCommentModal = () => {
        if (!currentUser) {
          return (
            <button className="button-5" onClick={() => history.push('/login')}>
            Create Review
            </button>
          );
        } else {
          return (
            <OpenModalButton
              buttonText="Create Review"
              modalComponent={<CreateNewComment itemId={item.id} />}
            />
          );
        }
      };

    const handleAddToCart = async () => { 
        if(!currentUser){ 
            history.push('/login')
        }else {
          await dispatch(addCartItem(item.id));
          dispatch(allCartItem());
        }
    }

    const quantityOptions = [];
      for (let i = 1; i <= 99; i++) {
        quantityOptions.push({ value: i, label: i });
      }

    console.log(currentLike, '!!!!!!!!!!!')

    const likeItem = async () => { 
      if(liked){ 
        await dispatch(deleteALike(item.id))
        setLiked(false)
      }else{ 
        await dispatch(createALike(item.id))
        setLiked(true)
      }
    }

    return (
        <div className="singleitem-main-container">
        <div className="singleitem-leftpage-container">
        <div className='singleitem-image-like-container'>
        <button className="singleitem-like-button" onClick={() => likeItem()}>
          {liked ? (
            <i className="fa-sharp fa-solid fa-heart" 
              style={{color:'#ff0000', fontSize:'35px'}}
            />
          ) : (
            <i class="fa-regular fa-heart"
              style={{color: "#ff0000;", fontSize:'35px'}}
            />
          )}
        </button>
        <img className='singleitem-image' src={item.image} alt='itemimage'></img>
        </div>
        <h2>{item?.Comments?.length} review(s) | {renderStars(item.avgRating)} stars</h2>
        <h2>Item Review    {createCommentModal()}</h2> 
        {item?.Comments.map(comment => ( 
            <div>
            <h3>{comment.User.username}</h3>
            <img className='singleitem-comment-image' src={comment.image}></img>
            <li>{comment.comment}</li>
            </div>
        ))}
        </div>
        <div className="singleitem-rightpage-container">


            <div className="singleitem-rightpage-action">
            <h1>{item.name}</h1>
            <h3>Rating: {renderStars(item.avgRating)}</h3>
            <h2>$ {item.price}</h2>
            <h4>Description: {item.description}</h4>
            <h4>Stocks: {item.stocks}</h4>

            <button 
            className="button-77"
            onClick={handleAddToCart}
            >
            Add to cart
            </button>

            </div>

        </div>
        </div>
    )
}


export default SingleItem;
