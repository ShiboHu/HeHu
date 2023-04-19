import { useState } from 'react';
import CurrentUserItems from './CurrentUserItems';
import './index.css'
import CurrentUserComment from './CurrentUserComment';

function Profile(){ 
    const [itempage, setItempage] = useState(true)
    const [reviewpage, setReviewpage] = useState(false)

    const toItemPage = () => { 
        setItempage(true)
        setReviewpage(false)
    }

    const toReviewPage = () => { 
        setReviewpage(true)
        setItempage(false)
    }

    return (
        <div>
        <div className="profile-sidebar">
            <button>Profile</button>
            <button onClick={toItemPage}>Your Items</button>
            <button onClick={toReviewPage}>Your Reviews</button>
        </div>
        <div className='profile-contents'>
            {itempage && <CurrentUserItems />}
            {reviewpage && <CurrentUserComment />}
        </div>
        </div>
    )
}


export default Profile;
