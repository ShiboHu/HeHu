import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCurrentUserComment } from "../../store/comment";

function CurrentUserComment(){ 
    const dispatch = useDispatch();
    const comments = useSelector(state => state.comments.comments)

    console.log(comments)
    useEffect(() => { 
        dispatch(getCurrentUserComment())
    },[dispatch])
    return ( 
        <div>
            <h1>Reviews</h1>
            <ul className='profile-content-ul'>
                {comments?.map(comment => ( 
                    <div className="profile-items-container">
                    <img className="profile-itemimages" src={comment.image}></img>
                    <li>Comments: {comment.comment}</li>
                    <li>Rating:{comment.rating}</li>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default CurrentUserComment
