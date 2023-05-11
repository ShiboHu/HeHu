import { useHistory } from "react-router-dom";

function FeaturedItems(){ 
    const history = useHistory();


    return(
        <>
        <div className="featured-items">
            <ul className="feature-ul-container">
                
                <div>
                <img
                onClick={() => history.push('/products/trending')}
                className="feature-item-image" 
                src="https://queue-it.com/media/ppcp1twv/product-drop.jpg" alt="itemimg"></img>
                <li className="feature-item-text" >Trending</li>
                </div>
                
                <div>
                <img
                onClick={() => history.push('/maincategories/3')}
                className="feature-item-image" 
                src="https://nowackhoward.com/wp-content/uploads/2016/09/Movies-small.jpg" alt="itemimg"></img>
                <li className="feature-item-text">Movie Night</li>
                </div>
                
                <div>
                <img 
                onClick={() => history.push('/products/snacks')}
                className="feature-item-image" 
                src="https://cdn11.bigcommerce.com/s-74aptbcbi/images/stencil/1000x1000/products/172/1686/snack-time-box_2__41439.1640130997.jpg?c=1" alt="itemimg"></img>
                <li className="feature-item-text"> Snack Time</li>
                </div>

                <div>
                <img 
                onClick={() => history.push('/maincategories/2')}
                className="feature-item-image" 
                src="https://img.freepik.com/premium-vector/gadgets-electronic-large-set_146957-836.jpg?w=2000" alt='itemimg'></img>
                <li className="feature-item-text">Electronics</li>
                </div>

                <div>
                <img 
                onClick={() => history.push('/products/under$100')}
                className="feature-item-image" 
                src="https://media.glamour.com/photos/638e232e8a1b2e01144c29bb/16:9/w_3488,h_1962,c_limit/best%20gifts%20under%20$100.jpg" alt='itemimg'></img>
                <li className="feature-item-text">Gifts under 100</li>
                </div>

                
            </ul>
            </div>
        </>
    )
}



export default FeaturedItems;
