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
            history.push('/')
        }
    }

    const updateFile = e => { 
        const file = e.target.files[0];
        if(file) setImage(file)
    }

    return (
        <div>
            <ul className="profilepage-user-container">
        <form onSubmit={submit} className="create-item-form">
            <h1>Post Item</h1>
                {errors.map(error => (
                    <li>{error}</li>
                ))}
            <label>
                Name:
                <input 
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                />
            </label>
            <label>
                Description:
                <textarea 
                type='text'
                rows="5"
                cols="33"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                />
            </label>
            <label>
                Price:
                <input 
                type='text'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
                />
            </label>
            <label>
                Stocks:
                <input 
                type='text'
                value={stocks}
                onChange={(e) => setStocks(e.target.value)}
                required
                />
            </label>
            <label>
                Image:
                <input 
                type='file'
                onChange={updateFile}
                required
                />
            </label>
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
            </label>
            <button type="submit" className="button-5" onClick={submit}>Create</button>
        </form>
                </ul>
        </div>
    )
}

export default CreateNewItem;
