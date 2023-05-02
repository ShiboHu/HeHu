import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";

function ProfileButton({ user }) {
  const history = useHistory(); 

  const iconfunction = () => { 
    if(!user){ 
      history.push('/login')
    }else { 
      history.push('/profile')
    }
  }

  return (
    <div >
      <button  
      onClick={iconfunction}
      className="user-circle-button"
      >
      <i class="fa-solid fa-user"></i>
      </button>
    </div>
  );
}

export default ProfileButton;
