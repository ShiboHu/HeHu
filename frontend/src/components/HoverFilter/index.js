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
    const [isLoaded, setIsLoaded] = useState(false);
    const [isFilterOpen, setIsFilterOpen] = useState(true);

    useEffect(() => {
        dispatch(getAllMainCategory())
        dispatch(getOneSubCategory(hoverMaincat))

        setTimeout(() => { 
            setIsLoaded(true)
        },[350])
    },[dispatch, hoverMaincat])

    const closeFilter = () => {
        setIsFilterOpen(false);
    }

    console.log(subcat)
    return (
        isFilterOpen &&
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
                            <li onClick={() => {
                                history.push(`/maincategories/${cat.id}`)
                                 closeFilter();
                        } }>{cat.name}</li>
                        </ul>
                    ))}
                </div>
    
                           
              <div className="sub-categories-container">
                    { subcat?.map((cat, index) => (
                        <ul key={index} className="sub-cat-name">
                            {isLoaded ? <img onClick={() => { 
                                history.push(`/subcategories/${cat.id}`);
                                closeFilter();
                            }} className="subcat-image" src={cat.image} alt='subcat'></img> : <Skeleton style={{width: '80px', height:'60px', borderRadius: '50%'}}/>}
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
