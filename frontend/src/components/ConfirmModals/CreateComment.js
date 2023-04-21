import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom'
import { createAComment } from "../../store/comment";
import { useModal } from "../../context/Modal";
import { getSingleItem } from "../../store/item";

function CreateNewComment({ itemId }){ 
    const history = useHistory();
    const dispatch = useDispatch();
    const { closeModal } = useModal();

    const [comment, setComment] = useState('');
    const [image, setImage] = useState('');
    const [rating, setRating] = useState(1);
    console.log(itemId)
    
    const submit = async (e) => { 
        e.preventDefault();

        const payload = { 
            image,
            comment,
            rating,
        }

       let newComment = await dispatch(createAComment(payload, itemId));
    if(newComment){ 
            dispatch(getSingleItem(itemId))
            .then(closeModal)
        }
    }


    return (
        <form onSubmit={submit}>
            <label>
                comment:
                <input 
                type='text'
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                required
                />
            </label>
            <label>
                rating:
                <input 
                type='text'
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                required
                />
            </label>
            <label>
                image:
                <input 
                type='text'
                value={image}
                onChange={(e) => setImage(e.target.value)}
                required
                />
            </label>
           
            <button type="submit" onClick={submit}>Create</button>
        </form>
    )
}

export default CreateNewComment;
