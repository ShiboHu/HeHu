import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllSubCategory } from "../../store/subcategory";
import { createNewItem } from "../../store/item";
import { useHistory } from 'react-router-dom'

function CreateNewItem(){ 
    const history = useHistory();
    const dispatch = useDispatch();
    const allSubCat = useSelector(state => state.subCategories.subCategory);
    
    const categoryOptions = allSubCat.map(sub => ({
        value: sub.id,
        label: sub.name
    }))
    
    
    useEffect(() => { 
        dispatch(getAllSubCategory())
    },[dispatch]);
        
    
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState(null);
    const [stocks, setStocks] = useState('');
    const [subcategoryId, setSubcategoryId] = useState(null);
    const [errors, setError] = useState([]);
        
        
    const submit = async (e) => { 
        e.preventDefault();

        let validationErrors = [];

        if (!name) {
            validationErrors.push("Name is required");
        }
        if (!description) {
            validationErrors.push("Description is required");
        }
        if (!price || isNaN(price)) {
            validationErrors.push("Price must be a valid number");
        }
        if (!stocks || isNaN(stocks)) {
            validationErrors.push("Stocks must be a valid number");
        }
        if(stocks <= 0) validationErrors.push("Stocks must be a positive number");
        if (price <= 0) validationErrors.push("Price must be a positive number"  );
        if (!subcategoryId) {
            validationErrors.push("Category is required");
        }
        if (!image) {
            validationErrors.push("Image is required");
        }

        setError(validationErrors);
        if (validationErrors.length > 0) {
            return;
        }

        const payload = { 
            name,
            description, 
            price,
            image,
            stocks,
            subcategoryId
        }

        const newItem = await dispatch(createNewItem(payload));

        if(newItem){
            history.push(`/items/${newItem.id}`)
        }
    }

    const updateFile = e => { 
        const file = e.target.files[0];
        if(file) setImage(file)
    }

    console.log(errors)

    return (
        <div>
            <ul className="profilepage-user-container">
        <form onSubmit={submit} className="create-item-form">
            <h1>Post Item</h1>
              

            <label>
                Name:
                
                <input 
                className="text"
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                />
        {errors.map((error, idx) => (
        <div className="signuppage-errors" key={idx}>
         {error.includes('Name') && <li>{error}</li>}
        </div>
        ))}

            </label>
            <label>
                Description:
                <textarea 
                className="textarea"
                type='text'
                rows="5"
                cols="33"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                />
        {errors.map((error, idx) => (
        <div className="signuppage-errors" key={idx}>
         {error.includes('Description') && <li>{error}</li>}
        </div>
        ))}
            </label>
            <label>
                Price:
                <input 
                type='number'
                className="text"
                min={1}
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
                />
            </label>
            {errors.map((error, idx) => (
        <div className="signuppage-errors" key={idx}>
         {error.includes('Price') && <li>{error}</li>}
        </div>
        ))}
            <label>
                Stocks:
                <input 
                type='text'
                className="text"
                value={stocks}
                onChange={(e) => setStocks(e.target.value)}
                required
                />
            </label>
        {errors.map((error, idx) => (
        <div className="signuppage-errors" key={idx}>
         {error.includes('Stocks') && <li>{error}</li>}
        </div>
        ))}
            <label>
                Image:
                <input 
                type='file'
                className="text"
                onChange={updateFile}
                required
                />
            </label>
            {errors.map((error, idx) => (
        <div className="signuppage-errors" key={idx}>
         {error.includes('Image') && <li>{error}</li>}
        </div>
        ))}
            <label>
                Category:
                <select 
                value={subcategoryId}
                onChange={(e) => setSubcategoryId(e.target.value)}
                required
                >
                <option value="">Select a category</option>
                {categoryOptions.map((option) => (
                <option key={option.value} value={option.value}>{option.label}</option>
                ))}
                </select>
                {errors.map((error, idx) => (
        <div className="signuppage-errors" key={idx}>
         {error.includes('Category') && <li>{error}</li>}
        </div>
        ))}
            </label>
            <button type="submit" className="button-5" onClick={submit}>Create</button>
        </form>
                </ul>
        </div>
    )
}

export default CreateNewItem;
