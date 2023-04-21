import { useSelector } from "react-redux";


function CurrentUserProfile(){ 
    const currentUser = useSelector(state => state.session.user);

    console.log(currentUser)


    
    return(
        <div>
            {currentUser.icon? currentUser.icon : 
            <img alt='user-icon' className="profilepage-user-icon"
            src='https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png'>
            </img>}
            <h4>username: {currentUser.username}</h4>
            <h4>email: {currentUser.email}</h4>
            <h4>address: {currentUser.address}, {currentUser.state}, {currentUser.zipCode}</h4>
            <h4>bio:{currentUser.bio}</h4>
        </div>
    )
}


export default CurrentUserProfile; 
