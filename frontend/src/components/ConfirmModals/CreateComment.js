import { useState } from "react";
import { useDispatch } from "react-redux";
import { createAComment } from "../../store/comment";
import { useModal } from "../../context/Modal";
import { getSingleItem } from "../../store/item";

function CreateNewComment({ itemId }){ 
    const dispatch = useDispatch();
    const { closeModal } = useModal();

    const [comment, setComment] = useState('');
    const [image, setImage] = useState(null);
    const [rating, setRating] = useState(1);
    const [hoverRating, setHoverRating] = useState(null);
    const [errors, setError] = useState([]);

    console.log(itemId)
    
    const submit = async (e) => { 
        e.preventDefault();

        let validationErrors = [];


        if(!comment) validationErrors.push("Comment is required");

        if(!image) validationErrors.push("Image is required");

        if(comment.length > 20) validationErrors.push("Comment must be less than 20 characters");

        setError(validationErrors);
        if (validationErrors.length > 0) {
            return;
        }
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

    const uploadImage = e => { 
        const file = e.target.files[0];
        if(file) setImage(file)
    }

    return (
        <form onSubmit={submit} className="commentmodal-main-container">
            <h1>Post A Review</h1>
            <ul className="errors">
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
            <label>
                Comment:
                <input 
                type='text'
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                required
                />
            </label>
            <label>
                <div className="stars">
                    {[...Array(5)].map((star, index) => {
                        const ratingValue = index + 1;
                        return (
                            <span 
                                key={ratingValue} 
                                onClick={() => setRating(ratingValue)} 
                                onMouseEnter={() => setHoverRating(ratingValue)}
                                onMouseLeave={() => setHoverRating(null)}
                            >
                                <i className={ratingValue <= (hoverRating || rating) ? "fas fa-star" : "far fa-star"}></i>
                            </span>
                        );
                    })}
                </div>
            </label>
            <label>
                Image:
                <input 
                type='file'
                onChange={uploadImage}
                required
                />
            </label>
           
            <button type="submit" onClick={submit} className="user-circle-button">Create</button>
        </form>
    )
}

export default CreateNewComment;
