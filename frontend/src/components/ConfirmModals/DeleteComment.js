import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal"
import { deleteAcomment } from "../../store/comment";

function DeleteCommentModal(props){ 
    const dispatch = useDispatch()
    const { closeModal } = useModal();
    
    const submit = e => { 
        e.preventDefault()

        dispatch(deleteAcomment(props.props))
        closeModal()
    }


    return (
            <div>
             <h1>Confirm Delete</h1>
            <h3>Are you sure you want to delete this Comment?</h3>
            <button className="user-circle-button"
            onClick={submit}
            >Yes(Delete Comment)</button>
            <button className="user-circle-button"
            onClick={closeModal}
            >No(Keep Comment)</button>
            </div>
    )
}

export default DeleteCommentModal
