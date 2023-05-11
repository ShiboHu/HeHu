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

      <div>
      <li>
        <NavLink exact to="/"><img src={hehu} className='hehu-logo' alt='hehu-logo'></img></NavLink>
      </li>
      </div>


      <div className='search-input-container'>
    <div className='navbar-filters-container'>

      <div className='navabar-categories' onMouseEnter={showHover} onMouseLeave={hideHover}> 
        <i class="fa-solid fa-chevron-down">Categories</i>
      
        {showHoverFilter && <HoverFilter />}
      
      </div>
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

 
 <div className='personal-profile-navbar'>
  
        {/* <div className='personal-contact'>
          <li><a href="https://www.linkedin.com/in/shibo-hu-b4712323a/" ><i class="fa-brands fa-linkedin">Linkedin</i></a></li>
          </div>

        <div className='personal-contact'>
						<li><a href="https://github.com/ShiboHu"><i class="fa-brands fa-github">GitHub</i></a></li>
            </div>
            
            <div className='personal-contact'>
						<li><a href="mailto: hushibo456@gmail.com" ><i class="fa-solid fa-envelope">Email</i></a></li>
            </div> */}

      {isLoaded && (
        <li>
          <ProfileButton user={sessionUser} />
        </li>
      )}
</div>
    </ul>


    </div>
  );
}

export default Navigation;
