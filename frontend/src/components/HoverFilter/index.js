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
        dispatch(getAllMainCategory());
        if (hoverMaincat !== null) {
            dispatch(getOneSubCategory(hoverMaincat));
        }
        setTimeout(() => {
            setIsLoaded(true);
        }, [500]);
    }, [dispatch, hoverMaincat]);

    const closeFilter = () => {
        setIsFilterOpen(false);
    }

    
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
    
            {isLoaded ? (            
              <div className="sub-categories-container">
                    { subcat?.map((cat, index) => (
                        <ul key={index} className="sub-cat-name">
                           <img onClick={() => { 
                                history.push(`/subcategories/${cat.id}`);
                                closeFilter();
                            }} className="subcat-image" src={cat.image} alt='subcat'></img> 
                           <li className="cat-name-li">{cat.name}</li>
                        </ul>
                    )) 
                    } 
             </div>
                ): (
            <div className="sub-categories-container">
              {[...Array(6)].map((_, index) => (
                <ul className="sub-cat-name" key={index}>
                    <div style={{marginBottom: '4px'}}>
                    <Skeleton className="subcat-image" style={{width: '100px', height:'80px', borderRadius:'50%'}}/>
                    </div>
                    <li>
                    <Skeleton className="cat-name-li"/>
                    </li>
              </ul>
              ))}
                    </div>
                )}

            </div>
        </div>         
    )
}

export default HoverFilter;
