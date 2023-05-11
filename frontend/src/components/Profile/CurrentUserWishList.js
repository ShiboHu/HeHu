import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getAllLikes } from "../../store/like";

function CurrentUserWishList() { 
    const history = useHistory();
    const dispatch = useDispatch();
    const allLikes = useSelector(state => state.likes.likes)


    useEffect(() => {
        dispatch(getAllLikes())
    },[dispatch])

    if(!allLikes.length) return null
    return (
        <div>
            <ul className="profile-content-ul">
                <h1>Wish List</h1>
                {allLikes?.map(like => (
                <div className="profile-items-container">
                        <img onClick={() => history.push(`/items/${like?.itemId}`)} src={like?.Item?.image} className="profile-itemimages"></img>
                        <h3>Name: {like?.Item?.name}</h3>
                        <h3>description: {like?.Item?.description}</h3>
                        <h3>Price: ${like?.Item?.price}</h3>
                    </div>
                ))}
            </ul>
        </div>
    )
}


export default CurrentUserWishList;
