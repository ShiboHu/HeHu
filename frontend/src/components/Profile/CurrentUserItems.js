import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUserItems, updateUserItem } from "../../store/item";
import DeleteItemModal from "../ConfirmModals/DeleteItem";
import OpenModalButton from "../OpenModalButton";

function CurrentUserItems() {
  const dispatch = useDispatch();
  const allItems = useSelector((state) => state.items.items);
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
      <button onClick={() => setEditItemIndex(index)}>Edit</button>
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

  return (
    <div>
      <h1>Products</h1>
      <ul className="profile-content-ul">
        {allItems?.map((item, index) => (
          <div className="profile-items-container" key={item.id}>
            <img className="profile-itemimages" src={item.image}></img>
            {editItemIndex === index ? (
              <form onSubmit={(e) => handleSaveEdit(e, index)}>
              <li>
                Name:
                <input type="text" name="name" defaultValue={item.name} />
              </li>
              <li>
                Description:
                <input
                  type="text"
                  name="description"
                  defaultValue={item.description}
                />
              </li>
              <li>
                Price:
                <input type="number" name="price" defaultValue={item.price} />
              </li>
              <li>
                Stocks:
                <input
                  type="number"
                  name="stocks"
                  defaultValue={item.stocks}
                />
              </li>
              <li>
                Image URL:
                <input type="text" name="image" defaultValue={item.image} />
              </li>
              <button type="submit">Save</button>
              <button type="button" onClick={handleCancelEdit}>
                Cancel
              </button>
            </form>
            ) : (
              <>
                <li>Name: {item.name}</li>
                <li>{item.description}</li>
                <li>Price: ${item.price}</li>
                <li>Stocks:{item.stocks}</li>
                {deleteButton(item.id)}
                {editButton(index)}
              </>
            )}
          </div>
        ))}
      </ul>
    </div>
  );
}

export default CurrentUserItems;
