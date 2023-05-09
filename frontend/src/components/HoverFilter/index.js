import { useState, useEffect } from "react";
import { getAllMainCategory } from "../../store/maincategory";
import './HoverFilter.css'
import { getOneSubCategory } from "../../store/subcategory";
import { useHistory } from "react-router-dom";
import Skeleton from 'react-loading-skeleton';
const { useDispatch, useSelector } = require("react-redux");


function HoverFilter(){ 
    const dispatch = useDispatch();
    const history = useHistory();
    const maincat = useSelector(state => state.mainCategories.mainCategory);
    const subcat = useSelector(state => state.subCategories.subCategories);
    const [hoverMaincat, setHoverMaincat] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        dispatch(getAllMainCategory())
        dispatch(getOneSubCategory(hoverMaincat))

        setTimeout(() => { 
            setIsLoaded(true)
        },[350])
    },[dispatch, hoverMaincat])

    console.log(subcat)
    return (
      
        <div className="categorie-filter-main-container">
            <div className="categories-container">

                <div className="main-categories-container">
                    {maincat.map((cat, index) => (
                        <ul key={index} className="main-cat-name" 
                        onMouseEnter={() => {
                            setHoverMaincat(cat.id);
                            setIsLoaded(false);
                        }}
                        onMouseLeave={() => setHoverMaincat(null)}
                        >
                            <li>{cat.name}</li>
                        </ul>
                    ))}
                </div>
    
                           
              <div className="sub-categories-container">
                    { subcat?.map((cat, index) => (
                        <ul key={index} className="sub-cat-name">
                            {isLoaded ? <img onClick={() => history.push(`/subcategories/${cat.id}`)} className="subcat-image" src={cat.image} alt='subcat'></img> : <Skeleton className="subcat-image"/>}
                            {isLoaded ? <li>{cat.name}</li> : <Skeleton /> }
                        </ul>
                    )) 
                    } 
             </div>

            </div>
        </div>         
    )
}

export default HoverFilter;
