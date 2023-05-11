import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal"
import { deleteSingleItem, getCurrentUserItems } from "../../store/item";

function DeleteItemModal(props){ 
    const dispatch = useDispatch()
    const { closeModal } = useModal();
    const submit = e => { 
        e.preventDefault()

        dispatch(deleteSingleItem(props.props))
        closeModal()
    }


    return (
            <div>
             <h1>Confirm Delete</h1>
            <h3>Are you sure you want to delete this Item?</h3>
            <button className="user-circle-button"
            onClick={submit}
            >Yes(Delete Item)</button>
            <button className="user-circle-button"
            onClick={closeModal}
            >No(Keep Item)</button>
            </div>
    )
}

export default DeleteItemModal
