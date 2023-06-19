import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import * as sessionActions from '../../store/session';

function CurrentUserProfile(){ 
    const history = useHistory();
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.session.user);

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
            <li>Username: {currentUser.username}</li>
            <li>Email: {currentUser.email}</li>
            <li>Address: {currentUser.address}, {currentUser.state}, {currentUser.zipCode}</li>
            <li>About:{currentUser.bio}</li>

    <div className='personalsite' target="_blank" style={{gap:'30px', display:'flex'}}>
      <a href='https://www.linkedin.com/in/shibo-hu-b4712323a/'>
      <i class="fa-brands fa-linkedin">
        LinkedIn
        </i>
      </a>


      <a href='https://github.com/ShiboHu' target="_blank">
      <i class="fa-brands fa-github">
        GitHub
        </i>
      </a>


      <a href='https://shibohu.github.io/portfolio/' target="_blank">
      <i class="fa-solid fa-user-tag">
        Portfolio
        </i>
      </a>
</div>
            </div>
            <button className='button-87' onClick={logout}>Log Out</button>
            </ul>

            
            
        </div>
        
    )
}



export default CurrentUserProfile; 
