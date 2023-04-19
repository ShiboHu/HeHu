import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllSubCategory } from "../../store/subcategory";
import { updateUserItem } from "../../store/item";
import { useHistory } from 'react-router-dom'

function UpdateItem(){ 
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
    const [image, setImage] = useState('');
    const [stocks, setStocks] = useState('');
    const [subcategoryId, setSubcategoryId] = useState(null);
    

    const submit = async (e) => { 
        e.preventDefault();

        const payload = { 
            name,
            description, 
            price,
            image,
            stocks,
            subcategoryId
        }

        const newItem = await dispatch(updateUserItem(payload));

        if(newItem){
            history.push('/')
        }
    }


    return (
        <form onSubmit={submit}>
            <label>
                name:
                <input 
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                />
            </label>
            <label>
                description:
                <input 
                type='text'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                />
            </label>
            <label>
                price:
                <input 
                type='text'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
                />
            </label>
            <label>
                stocks:
                <input 
                type='text'
                value={stocks}
                onChange={(e) => setStocks(e.target.value)}
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
            <button type="submit" onClick={submit}>Update</button>
        </form>
    )
}

export default UpdateItem;
