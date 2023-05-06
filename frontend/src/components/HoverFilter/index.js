import { useState, useEffect } from "react";
import { getAllMainCategory } from "../../store/maincategory";
import './HoverFilter.css'
import { getOneSubCategory } from "../../store/subcategory";
import { useHistory } from "react-router-dom";
const { useDispatch, useSelector } = require("react-redux");

function HoverFilter(){ 
    const dispatch = useDispatch();
    const history = useHistory();
    const maincat = useSelector(state => state.mainCategories.mainCategory);
    const subcat = useSelector(state => state.subCategories.subCategories);
    const [hoverMaincat, setHoverMaincat] = useState(null);

    useEffect(() => {
        dispatch(getAllMainCategory())
        dispatch(getOneSubCategory(hoverMaincat))
    },[dispatch, hoverMaincat])

    return(
        <div className="categorie-filter-main-container">
            <div className="categories-container">

                <div className="main-categories-container">
                    {maincat.map((cat, index) => (
                        <ul key={index} className="main-cat-name" 
                        onMouseEnter={() => setHoverMaincat(cat.id)}
                        onMouseLeave={() => setHoverMaincat(null)}
                        >
                            <li>{cat.name}</li>
                        </ul>
                    ))}
                </div>

                <div className="sub-categories-container">
                    {subcat?.map((cat, index) => (
                        <ul key={index} className="sub-cat-name">
                            <li onClick={() => history.push(`/subcategories/${cat.id}`)}>{cat.name}</li>
                        </ul>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default HoverFilter;
