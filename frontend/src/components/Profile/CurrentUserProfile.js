import { useSelector } from "react-redux";


function CurrentUserProfile(){ 
    const currentUser = useSelector(state => state.session.user);

    console.log(currentUser)


    
    return(
        <div>
            <ul className="profilepage-user-container">
            <h1>Profile</h1>
            {currentUser.icon? currentUser.icon : 
            <img alt='user-icon' className="profilepage-user-icon"
            src='https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png'>
            </img>}
            <li>username: {currentUser.username}</li>
            <li>email: {currentUser.email}</li>
            <li>address: {currentUser.address}, {currentUser.state}, {currentUser.zipCode}</li>
            <li>bio:{currentUser.bio}</li>
            </ul>
        </div>
    )
}


export default CurrentUserProfile; 
