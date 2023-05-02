import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import hehu from './logoo.PNG'
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import { useHistory } from "react-router-dom";

function Navigation({ isLoaded }){
  const history = useHistory(); 
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);


  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push('/')
  };

  return (
    <ul className='navbar-container'>
      <li>
        <NavLink exact to="/"><img src={hehu} className='hehu-logo' alt='hehu-logo'></img></NavLink>
      </li>
      <li>
        <input onClick={() => window.alert('comming soon')} placeholder='serach'></input>
      </li>
      {isLoaded && (
        <li>
          <ProfileButton user={sessionUser} />
        </li>
      )}
      {sessionUser? <button className="user-circle-button" onClick={logout}>Logouut</button> : null}
    </ul>
  );
}

export default Navigation;
