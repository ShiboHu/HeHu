import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Redirect, useHistory } from "react-router-dom";
import * as sessionActions from "../../store/session";
import hehu from '../Navigation/logoo.PNG'
import { faker } from '@faker-js/faker';


function SignupFormPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, username, password }))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  const demoLogin = (e) => {
    e.preventDefault();

    setEmail(faker.internet.email());
    setUsername(faker.lorem.word({length: {min: 4, max: 7}}));
    setPassword('hushibo123');
    setConfirmPassword('hushibo123');

    dispatch(sessionActions.login(
      {credential:'hushibo123', password:'hushibo123'}
      ))
    }


  return (
    <div className='login-form-main-container'>

        <div className='loginpage-logo-container'>
        <img className='loginpage-logo' src={hehu} alt="logo" onClick={() => history.push('/')}></img>
        </div>
  
      <form onSubmit={handleSubmit} className='loginpage-form'>
      <div className='loginpage-form-container'>
      <h2>Sign Up</h2>

        <label>
        <div className='username'>
          Email
          <input
          className='input-username'
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        {errors.map((error, idx) => (
        <div className="signuppage-errors" key={idx}>
         {error.includes('email') && <li>{error}</li>}
        </div>
        ))}
          </div>
        </label>


        <label>
          <div className='username'>
          Username
          <input
          className='input-username'
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        {errors.map((error, idx) => (
         <div className="signuppage-errors" key={idx}>
         {error.includes('username') && <li>{error}</li>}
        </div>
        
        ))}
          </div>


          
        </label>

        <label>
          <div className='username'>
          Password
          <input
          className='input-username'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />


          {errors.map((error, idx) => (
          <div className="signuppage-errors" key={idx}>
            {error.includes('6') && <li>{error}</li>}
          </div>
          ))}


          </div>
        </label>

        
        <label>
          <div className='username'>
          Re-enter Password
          <input
          className='input-username'
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          {errors.map((error, idx) => (
            <div className="signuppage-errors" key={idx}>
           {error.includes('Confirm Password') && <li>{error}</li>}
         </div>
          ))}
          </div>

        </label>

        <div className='loginpage-buttons'>
        <button className='button-17' type="submit">Sign Up</button>
        <button className='button-17'  onClick={demoLogin}>Demo</button>
        </div>

        <p>By creating an account  you agree to HeHu's Conditions of Use and Privacy Notice</p>

        </div>

      </form>

      <div className='loginpage-signup-div'>
        <h5>Already have an account?</h5>
      </div>
      
      <div className='loginpage-signup-button'>
        <button className='button-17' onClick={() => history.push('/login')}>Login in here</button>
       </div>
    </div>
  );
}

export default SignupFormPage;
