import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import * as sessionActions from '../../store/session';

function CurrentUserProfile(){ 
    const history = useHistory();
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.session.user);

    console.log(currentUser)

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
        history.push('/')
      };
    
    return(
        <div>
            <ul className="profilepage-user-container">
            <h1>Profile</h1>
            {currentUser.icon? currentUser.icon : 
            <img alt='user-icon' className="profilepage-user-icon"
            src='https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png'>
            </img>}
            <div className="profilepage-user-content">
            <li>username: {currentUser.username}</li>
            <li>email: {currentUser.email}</li>
            <li>address: {currentUser.address}, {currentUser.state}, {currentUser.zipCode}</li>
            <li>bio:{currentUser.bio}</li>
            </div>
            <button className='button-87' onClick={logout}>Log Out</button>
            </ul>
        </div>
    )
}


export default CurrentUserProfile; 
