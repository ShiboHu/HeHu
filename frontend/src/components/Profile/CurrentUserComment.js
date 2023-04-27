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
            <button className='button-5' onClick={() => setEditCommentIndex(index)}>Edit</button>
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
        <div >
            <ul className='profile-content-ul'>
            <h1>Reviews</h1>
                {comments?.map((comment, index )=> ( 
                    <div className="profile-items-container">
                    <img className="profile-itemimages" src={comment.image} alt="itemimage"></img>
                    {editCommentIndex === index ? (
                    <form onSubmit={(e) => handleSaveEdit(e, index)} className="edit-item-form">
                        <li>
                            Comment:
                            <input type='text' name="comment" defaultValue={comment.comment}/>
                        </li>
                        <li>
                            Rating:
                            <input type='number' name="rating" defaultValue={comment.rating} min={1} max={5} step={1}/>
                        </li>
                        <li>
                            Image:
                            <input type='text' name="image" defaultValue={comment.image}/>
                        </li>
                        <button type='submit' className='button-5'>Save</button>
                        <button onClick={handleCancelEdit} className='button-5'>Cancel</button>
                    </form>
                    ):(
                    <div>
                    <li>Comments: {comment.comment}</li>
                    <li>Rating:{comment.rating}</li>
                    {deleteCommentModal(comment.id)}
                    {editButton(index)}
                    </div>
                )}
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default CurrentUserComment
