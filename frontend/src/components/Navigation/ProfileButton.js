import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import OpenModalMenuItem from './OpenModalMenuItem';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import { useHistory } from "react-router-dom";

function ProfileButton({ user }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const ulRef = useRef();

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      if (!ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const closeMenu = () => setShowMenu(false);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    closeMenu();
    history.push('/')
  };

  const ulClassName = "profile-dropdown" + (showMenu ? "" : " hidden");

  return (
    <div >
      <button onClick={openMenu}  
       className="user-circle-button">
    <i class="fa-solid fa-user"></i>
      </button>
      <ul className={ulClassName} ref={ulRef}>
        {user ? (
          <div className="navbar-userprofiler-container">
            
            <button className="user-circle-button" onClick={() => history.push('/profile')}>
            <i class="fa-solid fa-pen-to-square">Profile</i>
            </button>

            <button className="user-circle-button" onClick={() => history.push('/item/new')}>
            <i class="fa-sharp fa-solid fa-plus">New Item</i>
            </button>
              
            <button className="user-circle-button" onClick={logout}>
            <i class="fa-solid fa-right-from-bracket">Log Out</i>
            </button>
          </div>
        ) : (
          <div className="navbar-userprofiler-container">
            <OpenModalMenuItem
              itemText="Log In"
              onItemClick={closeMenu}
              modalComponent={<LoginFormModal />}
            />
            <OpenModalMenuItem
              itemText="Sign Up"
              onItemClick={closeMenu}
              modalComponent={<SignupFormModal />}
            />
          </div>
        )}
      </ul>
    </div>
  );
}

export default ProfileButton;
