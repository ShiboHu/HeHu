import { useState } from 'react';
import CurrentUserItems from './CurrentUserItems';
import './index.css'
import CurrentUserComment from './CurrentUserComment';
import CurrentUserProfile from './CurrentUserProfile';
import CreateNewItem from './CurrentUserCreateItem';
import { useSelector } from 'react-redux';

function Profile(){ 
    const currentUser = useSelector(state => state.session.user)

    const [profilepage, setprofilePage] = useState(true)
    const [itempage, setItempage] = useState(false)
    const [reviewpage, setReviewpage] = useState(false)
    const [orderPage, setOrderPage] = useState(false)
    const [createItem, setCreateItem] = useState(false)
    
    
    const toItemPage = () => { 
        setItempage(true)
        setReviewpage(false)
        setprofilePage(false)
        setCreateItem(false)
        setOrderPage(false)
    }
    
    const toProfilePage = () => { 
        setprofilePage(true)
        setItempage(false)
        setReviewpage(false)
        setCreateItem(false)
        setOrderPage(false)
    }
    
    const toReviewPage = () => { 
        setReviewpage(true)
        setItempage(false)
        setprofilePage(false)
        setCreateItem(false)
        setOrderPage(false)
    }
    
    const toCreateItemPage = () => { 
        setCreateItem(true)
        setOrderPage(false)
        setItempage(false)
        setprofilePage(false)
        setReviewpage(false)
    }
    
    const toOrderPage = () => { 
        setOrderPage(true)
        setItempage(false)
        setprofilePage(false)
        setReviewpage(false)
        setCreateItem(false)
    }
    
    if(!currentUser)return <h1>Please Login First</h1>

    return (
        <div>
        <div className="profile-sidebar">

            <button className={profilepage?'button-53':'button-52'} onClick={toProfilePage}>
                <i class="fa-solid fa-address-card"></i>
                Your Profile
            </button>

            <button className={itempage?'button-53':'button-52'} onClick={toItemPage}>
                <i class="fa-solid fa-shop"></i>
                Your Items
            </button>

            <button className={reviewpage?'button-53':'button-52'} onClick={toReviewPage}>
                <i class="fa-solid fa-comment"></i>
                Your Reviews
            </button>

            <button className={createItem?'button-53':'button-52'} onClick={toCreateItemPage}>
                <i class="fa-sharp fa-solid fa-plus fa-lg"></i>
                Post Item
            </button>


            <button className={orderPage?'button-53':'button-52'} onClick={toOrderPage}>
                <i class="fa-sharp fa-solid fa-note-sticky"></i>
                Your Orders
            </button>

        </div>
        <div className='profile-contents'>
            {itempage && <CurrentUserItems />}
            {reviewpage && <CurrentUserComment />}
            {profilepage && <CurrentUserProfile />}
            {createItem && <CreateNewItem />}
        </div>
        </div>
    )
}


export default Profile;
