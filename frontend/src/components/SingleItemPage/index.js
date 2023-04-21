import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom'
import { getSingleItem } from "../../store/item";
import './singleitem.css'
import { addItemToCart } from "../../store/cart";
import  OpenModalButton  from '../OpenModalButton'
import CreateNewComment from "../ConfirmModals/CreateComment";
import { addCartItem, allCartItem } from "../../store/cart_item";

function SingleItem(){ 
    const { itemId } = useParams();
    const dispatch = useDispatch();
    const item = useSelector(state => state.items.item);
    
 
    useEffect(() => { 
        dispatch(getSingleItem(itemId))

    },[dispatch, itemId])


    if(!Object.values(item).length){ 
        return (
            <h1>Loading...</h1>
        )
    }


    const createCommentModal = (itemId) => { 
        return <OpenModalButton
                buttonText='Create Review'
                modalComponent={<CreateNewComment itemId={item.id}/>}
               />
    }

    const submit = async () => { 
        await dispatch(addCartItem(item.id));
        dispatch(allCartItem());
      }

    return (
        <div className="singleitem-main-container">
        <div className="singleitem-leftpage-container">
        <img className='singleitem-image' src={item.image} alt='itemimage'></img>
        <h2>{item?.Comments?.length} reviews | {item.avgRating} stars</h2>
        <h2>Item Review    {createCommentModal()}</h2> 
        {item.Comments.map(comment => ( 
            <div>
            <h3>{comment.User.username}</h3>
            <img className='singleitem-comment-image' src={comment.image}></img>
            <li>{comment.comment}</li>
            </div>
        ))}
        </div>
        <div className="singleitem-rightpage-container">
            <h1>{item.name}</h1>
            <h3>{item.avgRating} stars</h3>
            <h2>$ {item.price}</h2>
            <h4>{item.description}</h4>
            <button className="button-77"
            onClick={submit}
            >Add to cart</button>
        </div>
        </div>
    )
}


export default SingleItem;
