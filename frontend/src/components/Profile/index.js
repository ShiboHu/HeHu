import { useState } from 'react';
import CurrentUserItems from './CurrentUserItems';
import './index.css'
import CurrentUserComment from './CurrentUserComment';
import CurrentUserProfile from './CurrentUserProfile';

function Profile(){ 
    const [itempage, setItempage] = useState(false)
    const [reviewpage, setReviewpage] = useState(false)
    const [profilepage, setprofilePage] = useState(true)

    const toItemPage = () => { 
        setItempage(true)
        setReviewpage(false)
        setprofilePage(false)
    }

    const toReviewPage = () => { 
        setReviewpage(true)
        setItempage(false)
        setprofilePage(false)
    }

    const toProfilePage = () => { 
        setprofilePage(true)
        setItempage(false)
        setReviewpage(false)
    }

    return (
        <div>
        <div className="profile-sidebar">
            <button onClick={toProfilePage}>Profile</button>
            <button onClick={toItemPage}>Your Items</button>
            <button onClick={toReviewPage}>Your Reviews</button>
        </div>
        <div className='profile-contents'>
            {itempage && <CurrentUserItems />}
            {reviewpage && <CurrentUserComment />}
            {profilepage && <CurrentUserProfile />}
        </div>
        </div>
    )
}


export default Profile;
