import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import hehu from './logoo.PNG'
import HoverFilter from '../HoverFilter';


function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);
  const [showHoverFilter, setShowHoverFilter] = useState(false)

  const showHover = () => { 
    setShowHoverFilter(true)
  }

  const hideHover = () => {
    setShowHoverFilter(false)
  }

  return (
    <div className='navbar-main-container'>
    <ul className='navbar-container'>
      <li>
        <NavLink exact to="/"><img src={hehu} className='hehu-logo' alt='hehu-logo'></img></NavLink>
      </li>

    <div className='navbar-filters-container'>
      <div className='navabar-categories' onMouseEnter={showHover} onMouseLeave={hideHover}> 
        <i class="fa-solid fa-chevron-down">Categories</i>
        {showHoverFilter && <HoverFilter />}
      </div>

      <li>
        <input placeholder='serach'></input>
      </li>
    </div>

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
