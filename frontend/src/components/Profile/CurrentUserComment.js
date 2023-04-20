import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCurrentUserComment, updateAComment } from "../../store/comment";
import OpenModalButton from '../OpenModalButton'
import DeleteCommentModal from "../ConfirmModals/DeleteComment";
import { useState } from "react";

function CurrentUserComment(){ 
    const dispatch = useDispatch();
    const comments = useSelector(state => state.comments.comments)
    const [editCommentIndex, setEditCommentIndex] = useState(null)


    useEffect(() => { 
        dispatch(getCurrentUserComment())
    },[dispatch])

    const deleteCommentModal = (id) => { 
        return <OpenModalButton 
                buttonText='Delete'
                modalComponent={<DeleteCommentModal props={id}/>}
                />
    }

    const editButton = (index) => { 
        return ( 
            <button onClick={() => setEditCommentIndex(index)}>Edit</button>
        )
    }

    const handleSaveEdit = (e, index) => { 
        e.preventDefault(); 

        const payload = { 
            id: comments[index].id,
            comment: e.target.comment.value, 
            rating: e.target.rating.value,
            image: e.target.image.value
        }

        dispatch(updateAComment(payload, payload.id))
        setEditCommentIndex(null)
    }

    const handleCancelEdit = () => { 
        setEditCommentIndex(null)
    }
    
    return ( 
        <div>
            <h1>Reviews</h1>
            <ul className='profile-content-ul'>
                {comments?.map((comment, index )=> ( 
                    <div className="profile-items-container">
                    <img className="profile-itemimages" src={comment.image}></img>
                    {editCommentIndex === index ? (
                    <form onSubmit={(e) => handleSaveEdit(e, index)}>
                        <li>
                            Comment:
                            <input type='text' name="comment" defaultValue={comment.comment}/>
                        </li>
                        <li>
                            Rating:
                            <input type='text' name="rating" defaultValue={comment.rating}/>
                        </li>
                        <li>
                            Image:
                            <input type='text' name="image" defaultValue={comment.image}/>
                        </li>
                        <button type='submit'>Save</button>
                        <button onClick={handleCancelEdit}>Cancel</button>
                    </form>
                    ):(
                    <>
                    <li>Comments: {comment.comment}</li>
                    <li>Rating:{comment.rating}</li>
                    {deleteCommentModal(comment.id)}
                    {editButton(index)}
                    </>
                )}
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default CurrentUserComment
