import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import hehu from './logoo.PNG'
import HoverFilter from '../HoverFilter';
import { searchFilter } from '../../store/search';


function Navigation({ isLoaded }){
  const dispatch = useDispatch();
  const history = useHistory(); 
  const sessionUser = useSelector(state => state.session.user);
  const [showHoverFilter, setShowHoverFilter] = useState(false);
  const [keyword, setkeyword] = useState('');


  const showHover = () => { 
    setShowHoverFilter(true)
  }

  const hideHover = () => {
    setShowHoverFilter(false)
  }

  const searchForWord = () => { 
    history.push(`/search/${keyword}`)
    setkeyword('')
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

      <div className='search-input-container'>
        <input 
        className='searchinput'
        placeholder='serach'
        value={keyword}
        onChange={(e) => setkeyword(e.target.value)}
        ></input>
        <button onClick={searchForWord} className='button-5'>
        <i class="fa-solid fa-magnifying-glass" ></i>
        </button>
      </div>

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
