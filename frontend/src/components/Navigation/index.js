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



  return (
    <div className='navbar-main-container'>
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
    </ul>
    </div>
  );
}

export default Navigation;
