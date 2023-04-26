import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUserItems, updateUserItem } from "../../store/item";
import DeleteItemModal from "../ConfirmModals/DeleteItem";
import OpenModalButton from "../OpenModalButton";

function CurrentUserItems() {
  const dispatch = useDispatch();
  const allItems = useSelector((state) => state.items.currentItem);
  const [editItemIndex, setEditItemIndex] = useState(null);

  useEffect(() => {
    dispatch(getCurrentUserItems());
  }, [dispatch]);

  const deleteButton = (id) => {
    return (
      <OpenModalButton
        buttonText="Delete"
        modalComponent={<DeleteItemModal props={id} />}
      />
    );
  };

  const editButton = (index) => {
    return (
      <button className="button-5" onClick={() => setEditItemIndex(index)}>Edit</button>
    );
  };

  const handleSaveEdit = (e, index) => {
    e.preventDefault();

    const payload = {
      id: allItems[index].id,
      name: e.target.name.value,
      description: e.target.description.value,
      price: e.target.price.value,
      stocks: e.target.stocks.value,
      image: e.target.image.value,
    };

    dispatch(updateUserItem(payload, payload.id));
    setEditItemIndex(null);
    
  };

  const handleCancelEdit = () => {
    setEditItemIndex(null);
  };

  if(!allItems.length){ 
    <h1>No Products</h1>
  }
  return (
    <div>
      <ul className="profile-content-ul">
        <h1>Products</h1>
        {allItems?.map((item, index) => (
          <div className="profile-items-container" key={item.id}>
          <img className="profile-itemimages" src={item.image} alt="itemimage"></img>
            {editItemIndex === index ? (
              <form onSubmit={(e) => handleSaveEdit(e, index)} className="edit-item-form">
              <li>
                Name:
                <input type="text" name="name" defaultValue={item.name} required/>
              </li>
              <li>
                Description:
                <textarea
                  type="text"
                  rows="5"
                  cols="33"
                  name="description"
                  defaultValue={item.description}
                  required
                />
              </li>
              <li>
                Price:
                <input type="number" name="price" defaultValue={item.price} required/>
              </li>
              <li>
                Stocks:
                <input
                  type="number"
                  name="stocks"
                  defaultValue={item.stocks}
                  required
                />
              </li>
              <li>
                Image:
                <input type="text" name="image" defaultValue={item.image} required />
              </li>
              <button type="submit" className='button-5'>Save</button>
              <button type="button" onClick={handleCancelEdit} className='button-5'>
                Cancel
              </button>
            </form>
            ) : (
              <div className="profile-items-contents">
                <li>Name: {item.name}</li>
                <li>Description:{item.description}</li>
                <li>Price: ${item.price}</li>
                <li>Stocks:{item.stocks}</li>
                {deleteButton(item.id)}
                {editButton(index)}
              </div>
            )}
          </div>
        ))}
      </ul>
    </div>
  );
}

export default CurrentUserItems;
