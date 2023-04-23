import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom'
import { getSingleItem } from "../../store/item";
import './singleitem.css'
import  OpenModalButton  from '../OpenModalButton'
import CreateNewComment from "../ConfirmModals/CreateComment";
import { addCartItem, allCartItem, updateCartItem } from "../../store/cart_item";
import { renderStars } from "../LandingPage";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';


function SingleItem(){ 
    const { itemId } = useParams();
    const dispatch = useDispatch();
    const item = useSelector(state => state.items.item);
    
    console.log(item)
    useEffect(() => { 
        dispatch(getSingleItem(itemId))

    },[dispatch, itemId])


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

    const quantityOptions = [];
      for (let i = 1; i <= 99; i++) {
        quantityOptions.push({ value: i, label: i });
      }

    return (
        <div className="singleitem-main-container">
        <div className="singleitem-leftpage-container">
        <img className='singleitem-image' src={item.image} alt='itemimage'></img>
        <h2>{item?.Comments?.length} review(s) | {renderStars(item.avgRating)} stars</h2>
        <h2>Item Review    {createCommentModal() }</h2> 
        {item?.Comments.map(comment => ( 
            <div>
            <h3>{comment.User.username}</h3>
            <img className='singleitem-comment-image' src={comment.image}></img>
            <li>{comment.comment}</li>
            </div>
        ))}
        </div>
        <div className="singleitem-rightpage-container">
            <h1>{item.name}</h1>
            <h3>Rating: {renderStars(item.avgRating)}</h3>
            <h2>$ {item.price}</h2>
            <h4>Description: {item.description}</h4>
            <h4>Stocks: {item.stocks}</h4>
            <div className="singleitem-rightpage-action">
            <button className="button-77"
            onClick={submit}
            >Add to cart</button>
            </div>

        </div>
        </div>
    )
}


export default SingleItem;
