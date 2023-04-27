import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import hehu from './logoo.PNG'


function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  return (
    <ul className='navbar-container'>
      <li>
        <NavLink exact to="/"><img src={hehu} className='hehu-logo' alt='hehu-logo'></img></NavLink>
      </li>
      <li>
        <input placeholder='serach'></input>
      </li>
      {isLoaded && (
        <li>
          <ProfileButton user={sessionUser} />
        </li>
      )}
    </ul>
  );
}

export default Navigation;
